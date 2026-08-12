import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { getVehicleById, getPredictions } from '../../data/testData';
import RiskGauge from '../../components/predictions/RiskGauge';
import ComponentRiskCards from '../../components/predictions/ComponentRiskCards';
import RecommendationList from '../../components/predictions/RecommendationList';
import ForecastChart from '../../components/predictions/ForecastChart';
import './Predictions.css';

export default function Predictions() {
    const { id } = useParams();
    const vehicle = getVehicleById(id);
    const data = getPredictions(id);

    if (!vehicle || !data) {
        return (
            <main className="predictions-page">
                <p className="vehicle-not-found">
                    Données de prédiction indisponibles. <Link to="/userDashboard">Retour au tableau de bord</Link>
                </p>
            </main>
        );
    }

    return (
        <main className="predictions-page">
            <Link to={`/vehicles/${id}`} className="predictions-back-link">
                <FaArrowLeft /> Retour au véhicule
            </Link>

            <div className="predictions-header">
                <h1 className="predictions-title">Prédictions IA</h1>
                <p className="predictions-subtitle">{vehicle.make} {vehicle.model} — {vehicle.plate}</p>
            </div>

            <div className="predictions-top-grid">
                <div className="predictions-gauge-card">
                    <span className="predictions-gauge-label">Risque global de panne</span>
                    <RiskGauge riskPercentage={data.globalRisk} />
                </div>
                <div className="predictions-components-card">
                    <h3 className="predictions-components-title">Risque par composant</h3>
                    <ComponentRiskCards components={data.componentRisks} />
                </div>
            </div>

            <ForecastChart data={data.forecast} />
            <RecommendationList recommendations={data.recommendations} />
        </main>
    );
}