import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaCar, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';
import { vehicles, allNotifications } from '../../data/testData.js';
import './profilePage.css';

const currentUser = {
    name: 'Jean Dupont',
    email: 'jean.dupont@exemple.com',
    memberSince: 'Janvier 2026',
    role: 'Utilisateur standard'
};

export default function Profile() {
    const activeAlerts = allNotifications.filter(n => !n.acknowledged).length;

    return (
        <main className="profile-page">
            <div className="profile-card">
                <div className="profile-avatar-section">
                    <div className="profile-avatar">
                        <FaUserCircle className="profile-avatar-icon" />
                    </div>
                    <div className="profile-identity">
                        <h1 className="profile-name">{currentUser.name}</h1>
                        <p className="profile-email">{currentUser.email}</p>
                        <span className="profile-role-badge">{currentUser.role}</span>
                    </div>
                    <Link to="/settings" className="profile-edit-btn">
                        <FaEdit /> Modifier le profil
                    </Link>
                </div>

                <div className="profile-meta">
                    <FaCalendarAlt className="profile-meta-icon" />
                    Membre depuis {currentUser.memberSince}
                </div>
            </div>

            <div className="profile-stats-grid">
                <div className="profile-stat-card">
                    <FaCar className="profile-stat-icon" />
                    <div className="profile-stat-text">
                        <span className="profile-stat-value">{vehicles.length}</span>
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