import './riskGauge.css';

export default function RiskGauge({ riskPercentage }) {
    const getRiskLevel = (val) => {
        if (val < 30) return { label: 'Faible', color: '#4ade80' };
        if (val < 60) return { label: 'Modéré', color: '#fbbf24' };
        return { label: 'Élevé', color: '#f87171' };
    };

    const level = getRiskLevel(riskPercentage);
    const circumference = 2 * Math.PI * 70;
    const offset = circumference - (riskPercentage / 100) * circumference;

    return (
        <div className="risk-gauge">
            <svg viewBox="0 0 180 180" className="risk-gauge-svg">
                <circle cx="90" cy="90" r="70" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
                <circle
                    cx="90" cy="90" r="70" fill="none"
                    stroke={level.color}
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform="rotate(-90 90 90)"
                    className="risk-gauge-arc"
                />
            </svg>
            <div className="risk-gauge-center">
                <span className="risk-gauge-value">{riskPercentage}%</span>
                <span className="risk-gauge-label" style={{ color: level.color }}>{level.label}</span>
            </div>
        </div>
    );
}