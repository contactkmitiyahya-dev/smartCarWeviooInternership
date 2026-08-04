import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaCar, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';
import { apiFetch, ApiError } from '../../api/client';
import './profilePage.css';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [vehicleCount, setVehicleCount] = useState(0);
    const [activeAlerts, setActiveAlerts] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;

        Promise.all([
            apiFetch('/auth/me'),
            apiFetch('/vehicles'),
            apiFetch('/notifications')
        ]).then(([meData, vehiclesData, notifData]) => {
            if (cancelled) return;
            setUser(meData.user);
            setVehicleCount((vehiclesData.vehicles || []).length);
            setActiveAlerts((notifData.notifications || []).filter(n => !n.is_read).length);
        }).catch((err) => {
            if (!cancelled) setError(err instanceof ApiError ? err.message : 'Erreur de chargement.');
        }).finally(() => {
            if (!cancelled) setIsLoading(false);
        });

        return () => { cancelled = true; };
    }, []);

    if (isLoading) {
        return <main className="profile-page"><p className="dashboard-loading">Chargement...</p></main>;
    }

    if (error || !user) {
        return <main className="profile-page"><p className="dashboard-error">{error || 'Profil introuvable.'}</p></main>;
    }

    const memberSince = new Date(user.created_at).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

    return (
        <main className="profile-page">
            <div className="profile-card">
                <div className="profile-avatar-section">
                    <div className="profile-avatar">
                        <FaUserCircle className="profile-avatar-icon" />
                    </div>
                    <div className="profile-identity">
                        <h1 className="profile-name">{user.name}</h1>
                        <p className="profile-email">{user.email}</p>
                        <span className="profile-role-badge">
                            {user.role === 'admin' ? 'Administrateur' : 'Utilisateur standard'}
                        </span>
                    </div>
                    <Link to="/settings" className="profile-edit-btn">
                        <FaEdit /> Modifier le profil
                    </Link>
                </div>

                <div className="profile-meta">
                    <FaCalendarAlt className="profile-meta-icon" />
                    Membre depuis {memberSince}
                </div>
            </div>

            <div className="profile-stats-grid">
                <div className="profile-stat-card">
                    <FaCar className="profile-stat-icon" />
                    <div className="profile-stat-text">
                        <span className="profile-stat-value">{vehicleCount}</span>
                        <span className="profile-stat-label">Véhicules suivis</span>
                    </div>
                </div>

                <div className="profile-stat-card">
                    <FaExclamationTriangle className="profile-stat-icon profile-stat-icon-warning" />
                    <div className="profile-stat-text">
                        <span className="profile-stat-value">{activeAlerts}</span>
                        <span className="profile-stat-label">Alertes actives</span>
                    </div>
                </div>
            </div>
        </main>
    );
}