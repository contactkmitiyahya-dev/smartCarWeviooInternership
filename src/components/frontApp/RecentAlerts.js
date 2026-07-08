import { Link } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';
import ElectricBorder from '../stylingComposants/ElectricBorder.js';
import './recentAlerts.css';

export default function RecentAlerts({ alerts }) {
    return (
        <ElectricBorder color="#03b3c3" speed={1} chaos={0.12} borderRadius={16}>
            <div className="recent-alerts">
            <div className="recent-alerts-header">
                <h3 className="recent-alerts-title">Alertes récentes</h3>
                <Link to="/notifications" className="recent-alerts-viewall">Voir tout</Link>
            </div>

            <div className="recent-alerts-list">
                {alerts.map((alert) => (
                    <Link key={alert.id} to={`/vehicles/${alert.vehicleId}`} className="alert-item">
                        <span className={`alert-severity-dot alert-severity-${alert.severity}`}></span>
                        <div className="alert-item-text">
                            <p className="alert-item-message">{alert.message}</p>
                            <span className="alert-item-meta">{alert.vehicleName} • {alert.date}</span>
                        </div>
                        <FaExclamationCircle className={`alert-item-icon alert-severity-${alert.severity}`} />
                    </Link>
                ))}
            </div>
        </div>
    </ElectricBorder>
    );
}