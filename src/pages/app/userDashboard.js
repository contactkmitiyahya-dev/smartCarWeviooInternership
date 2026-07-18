import { useState, useEffect } from 'react';
import { apiFetch, ApiError } from '../../api/client';
import VehicleCardGrid from '../../components/frontApp/VehicleCardGrid.js';
import HealthScoreSummary from '../../components/frontApp/HealthScoreSummary';
import RecentAlerts from '../../components/frontApp/RecentAlerts.js';
import QuickActions from '../../components/frontApp/QuickActions.js';
import './userDashboard.css';

export default function UserDashboard() {
    const [vehicles, setVehicles] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;

        async function loadData() {
            try {
                const [vehiclesData, notifData] = await Promise.all([
                    apiFetch('/vehicles'),
                    apiFetch('/notifications')
                ]);

                if (!cancelled) {
                    setVehicles(vehiclesData.vehicles || []);
                    setNotifications(notifData.notifications || []);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof ApiError ? err.message : 'Impossible de charger le tableau de bord.');
                }
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        }

        loadData();
        return () => { cancelled = true; };
    }, []);

    const summary = {
        total: vehicles.length,
        healthy: vehicles.filter(v => (v.health_score ?? 100) >= 70).length,
        warning: vehicles.filter(v => (v.health_score ?? 100) >= 40 && (v.health_score ?? 100) < 70).length,
        critical: vehicles.filter(v => (v.health_score ?? 100) < 40).length
    };

    const mappedVehicles = vehicles.map(v => ({
        id: v.id,
        make: v.make,
        model: v.model,
        year: v.year,
        mileage: v.current_mileage_km,
        healthScore: v.health_score ?? 100,
        status: (v.health_score ?? 100) >= 70 ? 'healthy' : (v.health_score ?? 100) >= 40 ? 'warning' : 'critical'
    }));

    const mappedAlerts = notifications
        .filter(n => !n.is_read)
        .slice(0, 3)
        .map(n => ({
            id: n.id,
            vehicleId: n.vehicle_id,
            vehicleName: n.make ? `${n.make} ${n.model}` : 'Véhicule',
            severity: n.type,
            message: n.message,
            date: new Date(n.created_at).toLocaleDateString('fr-FR')
        }));

    if (isLoading) {
        return (
            <main className="app-dashboard">
                <p className="dashboard-loading">Chargement...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="app-dashboard">
                <p className="dashboard-error">{error}</p>
            </main>
        );
    }

    return (
        <main className="app-dashboard">
            <div className="app-dashboard-header">
                <h1 className="app-dashboard-title">Tableau de bord</h1>
                <p className="app-dashboard-subtitle">Vue d'ensemble de vos véhicules</p>
            </div>

            <HealthScoreSummary summary={summary} />
            <QuickActions />

            <div className="app-dashboard-grid">
                <div className="app-dashboard-main">
                    <h2 className="app-dashboard-section-title">Vos véhicules</h2>
                    {mappedVehicles.length > 0 ? (
                        <VehicleCardGrid vehicles={mappedVehicles} />
                    ) : (
                        <p className="dashboard-empty">Aucun véhicule pour l'instant. Ajoutez-en un pour commencer.</p>
                    )}
                </div>
                <div className="app-dashboard-side">
                    <RecentAlerts alerts={mappedAlerts} />
                </div>
            </div>
        </main>
    );
}