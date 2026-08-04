import { useState } from 'react';
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
    FaSignOutAlt,
    FaBars,
    FaTimes
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './navbar.css';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, isLoading, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

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
        setIsOpen(false);
        await logout();
        navigate('/');
    };

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

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
        <header className={`glass-header ${isOpen ? 'menu-open' : ''}`}>
            <div className="header-brand">
                <Link to={isAuthenticated ? '/userDashboard' : '/'} className="logo-link" onClick={closeMenu}>
                    <FaCar className="logo-icon-brand" />
                    <span className="logo-text">SmartCar</span>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="glass-nav desktop-only">
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

            {/* Desktop Auth Buttons */}
            <div className="header-auth desktop-only">
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

            {/* Hamburger Button (Mobile & Tablet) */}
            <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Dropdown Panel */}
            <div className={`mobile-menu-panel ${isOpen ? 'show' : ''}`}>
                <nav className="mobile-nav">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`mobile-nav-item ${isActive(item.path)}`}
                                onClick={closeMenu}
                            >
                                <Icon className="mobile-nav-icon" />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="mobile-auth">
                    {isAuthenticated ? (
                        <div className="mobile-auth-grid">
                            <Link to="/notifications" className={`mobile-nav-item ${isActive('/notifications')}`} onClick={closeMenu}>
                                <FaBell className="mobile-nav-icon" />
                                <span>Notifications</span>
                            </Link>
                            <Link to="/settings" className={`mobile-nav-item ${isActive('/settings')}`} onClick={closeMenu}>
                                <FaCog className="mobile-nav-icon" />
                                <span>Paramètres</span>
                            </Link>
                            <Link to="/profile" className={`mobile-profile-btn ${isActive('/profile')}`} onClick={closeMenu}>
                                <FaUserCircle className="mobile-nav-icon" />
                                <span>Mon Profil</span>
                            </Link>
                            <button type="button" className="mobile-logout-btn" onClick={handleLogout}>
                                <FaSignOutAlt className="mobile-nav-icon" />
                                <span>Se déconnecter</span>
                            </button>
                        </div>
                    ) : (
                        <div className="mobile-guest-actions">
                            <Link to="/auth/login" className="mobile-signin-btn" onClick={closeMenu}>
                                <FaSignInAlt className="signin-icon" />
                                <span>Se connecter</span>
                            </Link>
                            <Link to="/auth/register" className="mobile-cta-btn" onClick={closeMenu}>
                                <span>Commencer</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}