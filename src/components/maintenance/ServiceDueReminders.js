import { Link } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';
import './serviceDueReminders.css';

const urgencyConfig = {
    high: { label: 'Urgent', color: '#f87171' },
    medium: { label: 'À prévoir', color: '#fbbf24' },
    low: { label: 'Planifié', color: '#4ade80' }
};

export default function ServiceDueReminders({ upcoming, showVehicle = false }) {
    if (upcoming.length === 0) {
        return (
            <div className="service-due">
                <h3 className="service-due-title">Prochaines échéances</h3>
                <p className="service-due-empty">Aucune échéance à venir.</p>
            </div>
        );
    }

    return (
        <div className="service-due">
            <h3 className="service-due-title">Prochaines échéances</h3>
            <div className="service-due-list">
                {upcoming.map((item) => {
                    const config = urgencyConfig[item.urgency];
                    return (
                        <div key={item.id} className="service-due-item">
                            <span className="service-due-icon" style={{ color: config.color }}>
                                <FaClock />
                            </span>
                            <div className="service-due-text">
                                <span className="service-due-type">{item.type}</span>
                                <span className="service-due-meta">
                                    {showVehicle && (
                                        <Link to={`/vehicles/${item.vehicleId}`} className="timeline-vehicle-link">
                                            {item.vehicleName}
                                        </Link>
                                    )}
                                    {showVehicle ? ' • ' : ''}{item.dueDate}{item.dueMileage ? ` • ${item.dueMileage.toLocaleString('fr-FR')} km` : ''}
                                </span>
                            </div>
                            <span className="service-due-badge" style={{ color: config.color, borderColor: config.color + '40', background: config.color + '1A' }}>
                                {config.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}