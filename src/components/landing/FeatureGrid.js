import { FaCar, FaChartLine, FaBrain, FaBell } from 'react-icons/fa';
import './featureGrid.css';

const features = [
    {
        icon: FaCar,
        title: 'Gestion multi-véhicules',
        description: "Ajoutez et suivez tous vos véhicules depuis un seul tableau de bord, avec l'historique complet de chacun."
    },
    {
        icon: FaChartLine,
        title: 'Analytics en temps réel',
        description: 'Visualisez les données de vos capteurs OBD-II sous forme de graphiques clairs et exploitables.'
    },
    {
        icon: FaBrain,
        title: 'Prédictions par IA',
        description: "Notre modèle prédit les risques de panne par composant avant qu'ils ne deviennent critiques."
    },
    {
        icon: FaBell,
        title: 'Alertes intelligentes',
        description: 'Recevez des notifications dès qu\'une anomalie ou un besoin de maintenance est détecté.'
    }
];

export default function FeatureGrid() {
    return (
        <section className="feature-section">
            <div className="feature-header">
                <span className="feature-eyebrow">Fonctionnalités</span>
                <h2 className="feature-title">Tout ce qu'il faut pour veiller sur vos véhicules</h2>
            </div>

            <div className="feature-grid">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrap">
                                <Icon className="feature-icon" />
                            </div>
                            <h3 className="feature-card-title">{feature.title}</h3>
                            <p className="feature-card-desc">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}