import { FaLightbulb } from 'react-icons/fa';
import './recommendationList.css';

const urgencyConfig = {
    high: { label: 'Urgent', color: '#f87171' },
    medium: { label: 'Modéré', color: '#fbbf24' },
    low: { label: 'Faible', color: '#4ade80' }
};

export default function RecommendationList({ recommendations }) {
    return (
        <div className="recommendation-list">
            <h3 className="recommendation-list-title">Recommandations</h3>
            <div className="recommendation-items">
                {recommendations.map((rec) => {
                    const config = urgencyConfig[rec.urgency];
                    return (
                        <div key={rec.id} className="recommendation-item">
                            <span className="recommendation-icon"><FaLightbulb /></span>
                            <div className="recommendation-text">
                                <div className="recommendation-header">
                                    <span className="recommendation-action">{rec.action}</span>
                                    <span className="recommendation-urgency" style={{ color: config.color }}>{config.label}</span>
                                </div>
                                <p className="recommendation-reasoning">{rec.reasoning}</p>
                                <span className="recommendation-cost">Coût estimé : {rec.estimatedCost}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}