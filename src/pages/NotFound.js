import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import './notFound.css';

export default function NotFound() {
    return (
        <main className="not-found-page">
            <FaExclamationTriangle className="not-found-icon" />
            <h1 className="not-found-title">404</h1>
            <p className="not-found-text">Cette page n'existe pas ou a été déplacée.</p>
            <Link to="/" className="not-found-link">Retour à l'accueil</Link>
        </main>
    );
}