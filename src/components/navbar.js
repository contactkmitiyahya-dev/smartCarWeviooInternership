import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    FaHome,
    FaCar,
    FaWrench,
    FaChartLine,
    FaUserCircle,
    FaSignInAlt,
    FaBell,
    FaCog,
    FaInfoCircle,
    FaDollarSign,
    FaEnvelope,
    FaSignOutAlt
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './navbar.css';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, isLoading, logout } = useAuth();
    const isActive = (path) => location.pathname === path ? 'active' : '';

    const appNavItems = [
        { path: '/userDashboard', label: 'Accueil', icon: FaHome },
        { path: '/vehicles', label: 'Véhicules', icon: FaCar },
        { path: '/maintenance', label: 'Maintenance', icon: FaWrench },
        { path: '/analytics', label: 'Analytics', icon: FaChartLine },
    ];

    const landingNavItems = [
        { path: '/features', label: 'Fonctionnalités', icon: FaInfoCircle },
        { path: '/pricing', label: 'Tarifs', icon: FaDollarSign },
        { path: '/contact', label: 'Contact', icon: FaEnvelope },
    ];

    const navItems = isAuthenticated ? appNavItems : landingNavItems;

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    if (isLoading) {
        return (
            <header className="glass-header">
                <div className="header-brand">
                    <Link to="/" className="logo-link">
                        <span className="logo-text">SmartCar</span>
                    </Link>
                </div>
            </header>
        );
    }

    return (
        <header className="glass-header">
            <div className="header-brand">
                <Link to={isAuthenticated ? '/dashboard' : '/'} className="logo-link">
                    <FaCar className="logo-icon" />
                    <span className="logo-text">SmartCar</span>
                </Link>
            </div>

            <nav className="glass-nav">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-item ${isActive(item.path)}`}
                        >
                            <Icon className="nav-icon" />
                            <span className="nav-label">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="header-auth">
                {isAuthenticated ? (
                    <>
                        <Link to="/notifications" className={`icon-btn ${isActive('/notifications')}`}>
                            <FaBell className="notif-icon" />
                        </Link>
                        <Link to="/settings" className={`icon-btn ${isActive('/settings')}`}>
                            <FaCog className="notif-icon" />
                        </Link>
                        <Link to="/profile" className={`profile-btn ${isActive('/profile')}`}>
                            <FaUserCircle className="profile-icon" />
                            <span className="profile-label">Profil</span>
                        </Link>
                        <button type="button" className="icon-btn" onClick={handleLogout} title="Se déconnecter">
                            <FaSignOutAlt className="notif-icon" />
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/auth/login" className="signin-btn">
                            <FaSignInAlt className="signin-icon" />
                            <span className="signin-label">Se connecter</span>
                        </Link>
                        <Link to="/auth/register" className="cta-btn">
                            <span>Commencer</span>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}