import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import VariableProximity from '../stylingComposants/VariableProximity';
import './hero.css';

export default function Hero() {
    const containerRef = useRef(null);

    return (
        <section className="hero" ref={containerRef}>
            <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                Surveillance intelligente en temps réel
            </div>

            <h1 className="hero-title">
                <VariableProximity
                    label="Anticipez les pannes de vos véhicules "
                    className="hero-title-proximity"
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 900, 'opsz' 40"
                    containerRef={containerRef}
                    radius={140}
                    falloff="linear"
                />
                <VariableProximity
                    label="avant qu'elles n'arrivent"
                    className="hero-title-proximity hero-title-accent"
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 900, 'opsz' 40"
                    containerRef={containerRef}
                    radius={140}
                    falloff="linear"
                />
            </h1>

            <p className="hero-subtitle">
                SmartCar analyse en continu l'état de vos véhicules, détecte les anomalies
                et prédit les besoins de maintenance grâce à l'intelligence artificielle.
            </p>

            <div className="hero-actions">
                <Link to="/auth/register" className="hero-cta-primary">
                    Commencer gratuitement
                    <FaArrowRight className="hero-cta-icon" />
                </Link>
                <Link to="/demo" className="hero-cta-secondary">
                    <FaPlay className="hero-cta-icon-play" />
                    Voir la démo
                </Link>
            </div>

            <div className="hero-visual">
                <div className="hero-visual-glow"></div>
                <div className="hero-visual-card">
                    <div className="hero-visual-header">
                        <span className="hero-visual-dot hero-visual-dot-red"></span>
                        <span className="hero-visual-dot hero-visual-dot-yellow"></span>
                        <span className="hero-visual-dot hero-visual-dot-green"></span>
                    </div>
                    <div className="hero-visual-body">
                        <div className="hero-visual-score">
                            <span className="hero-visual-score-label">Health score</span>
                            <span className="hero-visual-score-value">87</span>
                        </div>
                        <div className="hero-visual-bars">
                            <div className="hero-visual-bar" style={{ height: '60%' }}></div>
                            <div className="hero-visual-bar" style={{ height: '85%' }}></div>
                            <div className="hero-visual-bar" style={{ height: '45%' }}></div>
                            <div className="hero-visual-bar" style={{ height: '95%' }}></div>
                            <div className="hero-visual-bar" style={{ height: '70%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}