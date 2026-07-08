import { Link } from 'react-router-dom';
import { FaCar, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './footer.css';

const footerLinks = {
    Produit: [
        { label: 'Fonctionnalités', path: '/features' },
        { label: 'Tarifs', path: '/pricing' },
        { label: 'Démo', path: '/demo' }
    ],
    Entreprise: [
        { label: 'Contact', path: '/contact' },
        { label: 'À propos', path: '/about' }
    ],
    Légal: [
        { label: "Conditions d'utilisation", path: '/terms' },
        { label: 'Confidentialité', path: '/privacy' }
    ]
};

export default function Footer() {
    return (
        <footer className="landing-footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <FaCar className="footer-logo-icon" />
                        <span className="footer-logo-text">SmartCar</span>
                    </div>
                    <p className="footer-tagline">
                        La surveillance intelligente de vos véhicules, propulsée par l'IA.
                    </p>
                    <div className="footer-socials">
                        <a href="https://github.com" className="footer-social-link" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com" className="footer-social-link" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" className="footer-social-link" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    </div>
                </div>

                {Object.entries(footerLinks).map(([section, links]) => (
                    <div key={section} className="footer-column">
                        <h4 className="footer-column-title">{section}</h4>
                        {links.map((link) => (
                            <Link key={link.path} to={link.path} className="footer-link">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">© 2026 SmartCar. Tous droits réservés.</p>
            </div>
        </footer>
    );
}