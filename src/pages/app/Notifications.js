import { useState, useEffect } from 'react';
import { apiFetch, ApiError } from '../../api/client';
import FilterTabs from '../../components/notifications/FilterTabs';
import AlertList from '../../components/notifications/AlertList';
import './Notificationstyle.css';

export default function Notifications() {
    const [notifications, setNotifications] = useState([]);
    const [activeTab, setActiveTab] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;

        apiFetch('/notifications')
            .then((data) => { if (!cancelled) setNotifications(data.notifications || []); })
            .catch((err) => { if (!cancelled) setError(err instanceof ApiError ? err.message : 'Erreur de chargement.'); })
            .finally(() => { if (!cancelled) setIsLoading(false); });

        return () => { cancelled = true; };
    }, []);

    const mapped = notifications.map(n => ({
        id: n.id,
        vehicleId: n.vehicle_id,
        vehicleName: n.make ? `${n.make} ${n.model}` : 'Général',
        severity: n.type,
        message: n.message,
        date: new Date(n.created_at).toLocaleDateString('fr-FR'),
        acknowledged: n.is_read
    }));

    const counts = {
        all: mapped.length,
        critical: mapped.filter(n => n.severity === 'critical').length,
        warning: mapped.filter(n => n.severity === 'warning').length,
        info: mapped.filter(n => n.severity === 'info').length
    };

    const filtered = activeTab === 'all' ? mapped : mapped.filter(n => n.severity === activeTab);

    const handleAcknowledge = async (id) => {
        // Mise à jour optimiste : l'interface réagit immédiatement, sans attendre la réponse serveur
        setNotifications(notifications.map(n => n.id === id ? { ...n, is_read: true } : n));
        try {
            await apiFetch(`/notifications/${id}/read`, { method: 'PATCH' });
        } catch (err) {
            // En cas d'échec, on annule visuellement le changement
            setNotifications(notifications.map(n => n.id === id ? { ...n, is_read: false } : n));
            setError(err instanceof ApiError ? err.message : 'Impossible de marquer comme lu.');
        }
    };

    if (isLoading) {
        return <main className="notifications-page"><p className="dashboard-loading">Chargement...</p></main>;
    }

    return (
        <main className="notifications-page">
            <div className="notifications-header">
                <h1 className="notifications-title">Notifications</h1>
                <p className="notifications-subtitle">
                    {mapped.filter(n => !n.acknowledged).length} non traitée(s)
                </p>
            </div>

            {error && <p className="auth-error" style={{ marginBottom: '16px' }}>{error}</p>}

            <FilterTabs activeTab={activeTab} onChange={setActiveTab} counts={counts} />
            <AlertList notifications={filtered} onAcknowledge={handleAcknowledge} />
        </main>
    );
}