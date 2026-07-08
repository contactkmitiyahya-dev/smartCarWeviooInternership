import { Link } from 'react-router-dom';
import { FaWrench } from 'react-icons/fa';
import './maintenanceTimeline.css';

export default function MaintenanceTimeline({ history, showVehicle = false }) {
    const totalCost = history.reduce((sum, entry) => sum + entry.cost, 0);

    if (history.length === 0) {
        return (
            <div className="maintenance-timeline">
                <h3 className="maintenance-timeline-title">Historique d'entretien</h3>
                <p className="maintenance-timeline-empty">Aucun entretien enregistré.</p>
            </div>
        );
    }

    return (
        <div className="maintenance-timeline">
            <div className="maintenance-timeline-header">
                <h3 className="maintenance-timeline-title">Historique d'entretien</h3>
                <span className="maintenance-timeline-total">Total : {totalCost} €</span>
            </div>

            <div className="timeline-track">
                {history.map((entry, index) => (
                    <div key={entry.id} className="timeline-entry">
                        <div className="timeline-marker">
                            <FaWrench className="timeline-marker-icon" />
                        </div>
                        {index < history.length - 1 && <div className="timeline-line"></div>}
                        <div className="timeline-content">
                            <div className="timeline-content-header">
                                <span className="timeline-type">{entry.type}</span>
                                <span className="timeline-cost">{entry.cost} €</span>
                            </div>
                            <span className="timeline-meta">
                                {showVehicle && (
                                    <Link to={`/vehicles/${entry.vehicleId}`} className="timeline-vehicle-link">
                                        {entry.vehicleName}
                                    </Link>
                                )}
                                {showVehicle ? ' • ' : ''}{entry.date} • {entry.mileage.toLocaleString('fr-FR')} km
                            </span>
                            {entry.notes && <p className="timeline-notes">{entry.notes}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}