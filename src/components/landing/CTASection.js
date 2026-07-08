import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ctaSection.css';

export default function CTASection() {
    return (
        <section className="cta-section">
            <div className="cta-card">
                <div className="cta-glow"></div>
                <h2 className="cta-title">Prêt à surveiller vos véhicules intelligemment ?</h2>
                <p className="cta-subtitle">
                    Créez votre compte gratuitement et ajoutez votre premier véhicule en quelques minutes.
                </p>
                <Link to="/auth/register" className="cta-button">
                    Commencer gratuitement
                    <FaArrowRight className="cta-button-icon" />
                </Link>
            </div>
        </section>
    );
}