import './healthBreakdown.css';

export default function HealthBreakdown({ components }) {
    return (
        <div className="health-breakdown">
            <h3 className="health-breakdown-title">Détail par composant</h3>
            <div className="health-breakdown-list">
                {components.map((comp, index) => (
                    <div key={index} className="health-breakdown-item">
                        <div className="health-breakdown-item-header">
                            <span className="health-breakdown-name">{comp.name}</span>
                            <span className={`health-breakdown-risk health-risk-${comp.risk}`}>
                                {comp.risk === 'low' ? 'Faible risque' : comp.risk === 'medium' ? 'Risque moyen' : 'Risque élevé'}
                            </span>
                        </div>
                        <div className="health-breakdown-bar-track">
                            <div
                                className={`health-breakdown-bar-fill health-risk-bar-${comp.risk}`}
                                style={{ width: `${comp.score}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}