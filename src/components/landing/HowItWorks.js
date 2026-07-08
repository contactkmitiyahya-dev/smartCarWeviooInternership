import { FaCarSide, FaCloudUploadAlt, FaChartBar } from 'react-icons/fa';
import './howItWorks.css';

const steps = [
    {
        number: '01',
        icon: FaCarSide,
        title: 'Ajoutez votre véhicule',
        description: 'Renseignez la marque, le modèle et le kilométrage pour créer un profil complet.'
    },
    {
        number: '02',
        icon: FaCloudUploadAlt,
        title: 'Envoyez vos données',
        description: "Importez vos fichiers OBD-II ou saisissez manuellement l'historique d'entretien."
    },
    {
        number: '03',
        icon: FaChartBar,
        title: 'Recevez vos insights',
        description: 'Consultez le health score, les prédictions IA et les alertes en temps réel.'
    }
];

export default function HowItWorks() {
    return (
        <section className="howitworks-section">
            <div className="howitworks-header">
                <span className="howitworks-eyebrow">Comment ça marche</span>
                <h2 className="howitworks-title">Trois étapes pour garder le contrôle</h2>
            </div>

            <div className="howitworks-steps">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div key={index} className="howitworks-step">
                            <div className="howitworks-step-top">
                                <span className="howitworks-number">{step.number}</span>
                                <div className="howitworks-icon-wrap">
                                    <Icon className="howitworks-icon" />
                                </div>
                            </div>
                            <h3 className="howitworks-step-title">{step.title}</h3>
                            <p className="howitworks-step-desc">{step.description}</p>
                            {index < steps.length - 1 && <span className="howitworks-connector"></span>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}   