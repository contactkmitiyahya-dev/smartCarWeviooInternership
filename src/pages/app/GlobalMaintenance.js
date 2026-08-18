import { useState, useEffect } from 'react';
import { apiFetch, ApiError } from '../../api/client';
import MaintenanceTimeline from '../../components/maintenance/MaintenanceTimeline';
import ServiceDueReminders from '../../components/maintenance/ServiceDueReminders';
import './Maintenance.css';

function computeUrgency(dueDateStr) {
    const daysLeft = (new Date(dueDateStr) - new Date()) / (1000 * 60 * 60 * 24);
    if (daysLeft <= 14) return 'high';
    if (daysLeft <= 45) return 'medium';
    return 'low';
}

export default function GlobalMaintenance() {
    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;

        apiFetch('/maintenance')
            .then((data) => { if (!cancelled) setRecords(data.records || []); })
            .catch((err) => { if (!cancelled) setError(err instanceof ApiError ? err.message : 'Erreur de chargement.'); })
            .finally(() => { if (!cancelled) setIsLoading(false); });

        return () => { cancelled = true; };
    }, []);

    const history = records.map(r => ({
        id: r.id,
        type: r.service_type,
        date: r.service_date,
        mileage: r.mileage_at_service_km,
        cost: r.cost,
        notes: r.notes,
        vehicleId: r.vehicle_id,
        vehicleName: r.make ? `${r.make} ${r.model}` : 'Véhicule'
    }));

    const upcoming = records
        .filter(r => r.next_due_date)
        .map(r => ({
            id: `due-${r.id}`,
            type: r.service_type,
            dueDate: r.next_due_date,
            dueMileage: r.next_due_km,
            urgency: computeUrgency(r.next_due_date),
            vehicleId: r.vehicle_id,
            vehicleName: r.make ? `${r.make} ${r.model}` : 'Véhicule'
        }))
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    if (isLoading) {
        return <main className="maintenance-page"><p className="dashboard-loading">Chargement...</p></main>;
    }

    if (error) {
        return <main className="maintenance-page"><p className="dashboard-error">{error}</p></main>;
    }

    return (
        <main className="maintenance-page">
            <div className="maintenance-header">
                <h1 className="maintenance-title">Maintenance</h1>
                <p className="maintenance-subtitle">Vue d'ensemble de l'entretien pour tous vos véhicules</p>
            </div>

            <div className="maintenance-grid">
                <div className="maintenance-main">
                    <MaintenanceTimeline history={history} showVehicle />
                </div>
                <div className="maintenance-side">
                    <ServiceDueReminders upcoming={upcoming} showVehicle />
                </div>
            </div>
        </main>
    );
}