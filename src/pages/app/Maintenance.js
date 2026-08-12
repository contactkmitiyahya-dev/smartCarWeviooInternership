import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { apiFetch, ApiError } from '../../api/client';
import MaintenanceTimeline from '../../components/maintenance/MaintenanceTimeline';
import ServiceDueReminders from '../../components/maintenance/ServiceDueReminders';
import AddServiceForm from '../../components/maintenance/AddServiceForm';
import './maintenance.css';

function computeUrgency(dueDateStr) {
    const daysLeft = (new Date(dueDateStr) - new Date()) / (1000 * 60 * 60 * 24);
    if (daysLeft <= 14) return 'high';
    if (daysLeft <= 45) return 'medium';
    return 'low';
}

export default function Maintenance() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState(null);
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const [vehicleData, maintenanceData] = await Promise.all([
                    apiFetch(`/vehicles/${id}`),
                    apiFetch(`/maintenance/vehicles/${id}`)
                ]);

                if (cancelled) return;
                setVehicle(vehicleData.vehicle);
                setHistory(maintenanceData.records || []);
            } catch (err) {
                if (!cancelled) setError(err instanceof ApiError ? err.message : 'Véhicule introuvable.');
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        }

        load();
        return () => { cancelled = true; };
    }, [id]);

    const handleAddService = async (formData) => {
    try {
        const result = await apiFetch(`/maintenance/vehicles/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                service_date: formData.date,
                service_type: formData.type,
                mileage_at_service_km: Number(formData.mileage),
                cost: formData.cost !== '' ? Number(formData.cost) : null,
                notes: formData.notes || null,
                next_due_date: formData.nextDueDate || null,
                next_due_km: formData.nextDueMileage || null
            })
        });
        setHistory([result.record, ...history]);
    } catch (err) {
        setError(err instanceof ApiError ? err.message : 'Erreur lors de l\'ajout de l\'entretien.');
    }
};

    const mappedHistory = history.map(r => ({
        id: r.id,
        type: r.service_type,
        date: r.service_date,
        mileage: r.mileage_at_service_km,
        cost: r.cost,
        notes: r.notes
    }));

    const upcoming = history
        .filter(r => r.next_due_date)
        .map(r => ({
            id: `due-${r.id}`,
            type: r.service_type,
            dueDate: r.next_due_date,
            dueMileage: r.next_due_km,
            urgency: computeUrgency(r.next_due_date)
        }))
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    if (isLoading) {
        return <main className="maintenance-page"><p className="dashboard-loading">Chargement...</p></main>;
    }

    if (error && !vehicle) {
        return (
            <main className="maintenance-page">
                <p className="vehicle-not-found">
                    {error} <Link to="/userDashboard">Retour au tableau de bord</Link>
                </p>
            </main>
        );
    }

    return (
        <main className="maintenance-page">
            <Link to={`/vehicles/${id}`} className="maintenance-back-link">
                <FaArrowLeft /> Retour au véhicule
            </Link>

            <div className="maintenance-header">
                <h1 className="maintenance-title">Entretien</h1>
                <p className="maintenance-subtitle">{vehicle.make} {vehicle.model} — {vehicle.plate_number}</p>
            </div>

            {error && <p className="auth-error" style={{ marginBottom: '16px' }}>{error}</p>}

            <div className="maintenance-grid">
                <div className="maintenance-main">
                    <AddServiceForm onAdd={handleAddService} />
                    <MaintenanceTimeline history={mappedHistory} />
                </div>
                <div className="maintenance-side">
                    <ServiceDueReminders upcoming={upcoming} />
                </div>
            </div>
        </main>
    );
}