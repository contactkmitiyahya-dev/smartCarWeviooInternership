import './componentRiskCards.css';

const riskConfig = {
    low: { label: 'Faible risque', color: '#4ade80' },
    medium: { label: 'Risque modéré', color: '#fbbf24' },
    high: { label: 'Risque élevé', color: '#f87171' }
};

export default function ComponentRiskCards({ components }) {
    return (
        <div className="component-risk-grid">
            {components.map((comp, index) => {
                const config = riskConfig[comp.risk];
                return (
                    <div key={index} className="component-risk-card">
                        <div className="component-risk-header">
                            <span className="component-risk-name">{comp.name}</span>
                            <span className="component-risk-badge" style={{ color: config.color, borderColor: config.color + '40', background: config.color + '1A' }}>
                                {config.label}
                            </span>
                        </div>
                        <div className="component-risk-bar-track">
                            <div
                                className="component-risk-bar-fill"
                                style={{ width: `${comp.percentage}%`, background: config.color }}
                            ></div>
                        </div>
                        <span className="component-risk-confidence">Confiance : {comp.confidence}%</span>
                    </div>
                );
            })}
        </div>
    );
}