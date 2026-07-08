import { Link } from 'react-router-dom';
import './riskOverviewList.css';

function getRiskConfig(val) {
    if (val < 30) return { label: 'Faible', color: '#4ade80' };
    if (val < 60) return { label: 'Modéré', color: '#fbbf24' };
    return { label: 'Élevé', color: '#f87171' };
}

export default function RiskOverviewList({ overview }) {
    return (
        <div className="risk-overview">
            <h3 className="risk-overview-title">Risque par véhicule</h3>
            <div className="risk-overview-list">
                {overview.map((item) => {
                    const config = getRiskConfig(item.globalRisk);
                    return (
                        <Link key={item.vehicleId} to={`/vehicles/${item.vehicleId}/predictions`} className="risk-overview-item">
                            <span className="risk-overview-name">{item.vehicleName}</span>
                            <div className="risk-overview-bar-track">
                                <div
                                    className="risk-overview-bar-fill"
                                    style={{ width: `${item.globalRisk}%`, background: config.color }}
                                ></div>
                            </div>
                            <span className="risk-overview-value" style={{ color: config.color }}>
                                {item.globalRisk}% • {config.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}