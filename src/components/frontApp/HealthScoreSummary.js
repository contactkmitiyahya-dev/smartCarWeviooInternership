import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaCar } from 'react-icons/fa';
import './healthScoreSummary.css';

export default function HealthScoreSummary({ summary }) {
    const items = [
        { icon: FaCar, value: summary.total, label: 'Véhicules suivis', tone: 'neutral' },
        { icon: FaCheckCircle, value: summary.healthy, label: 'Sains', tone: 'healthy' },
        { icon: FaExclamationTriangle, value: summary.warning, label: 'À surveiller', tone: 'warning' },
        { icon: FaTimesCircle, value: summary.critical, label: 'Critiques', tone: 'critical' }
    ];

    return (
        <div className="health-summary">
            {items.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className={`health-summary-item health-summary-${item.tone}`}>
                        <Icon className="health-summary-icon" />
                        <div className="health-summary-text">
                            <span className="health-summary-value">{item.value}</span>
                            <span className="health-summary-label">{item.label}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}