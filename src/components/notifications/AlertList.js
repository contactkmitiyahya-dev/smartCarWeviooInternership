import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaExclamationCircle, FaInfoCircle, FaCheck } from 'react-icons/fa';
import './alertList.css';

const severityConfig = {
    critical: { icon: FaExclamationTriangle, color: '#f87171', label: 'Critique' },
    warning: { icon: FaExclamationCircle, color: '#fbbf24', label: 'Avertissement' },
    info: { icon: FaInfoCircle, color: '#38bdf8', label: 'Info' }
};

export default function AlertList({ notifications, onAcknowledge }) {
    if (notifications.length === 0) {
        return <p className="alert-list-empty">Aucune notification dans cette catégorie.</p>;
    }

    return (
        <div className="alert-list">
            {notifications.map((notif) => {
                const config = severityConfig[notif.severity];
                const Icon = config.icon;
                return (
                    <div key={notif.id} className={`alert-list-item ${notif.acknowledged ? 'alert-list-item-read' : ''}`}>
                        <span className="alert-list-icon" style={{ color: config.color }}>
                            <Icon />
                        </span>

                        <div className="alert-list-content">
                            <div className="alert-list-top">
                                <span className="alert-list-severity" style={{ color: config.color }}>{config.label}</span>
                                <span className="alert-list-date">{notif.date}</span>
                            </div>
                            <Link to={`/vehicles/${notif.vehicleId}`} className="alert-list-message">
                                {notif.message}
                            </Link>
                            <span className="alert-list-vehicle">{notif.vehicleName}</span>
                        </div>

                        {!notif.acknowledged && (
                            <button
                                type="button"
                                className="alert-acknowledge-btn"
                                onClick={() => onAcknowledge(notif.id)}
                                title="Marquer comme traité"
                            >
                                <FaCheck />
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
}