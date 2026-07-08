import { FaWrench } from 'react-icons/fa';
import './maintenanceLog.css';

export default function MaintenanceLog({ log }) {
    return (
        <div className="maintenance-log">
            <h3 className="maintenance-log-title">Historique entretien</h3>
            <div className="maintenance-log-list">
                {log.map((entry) => (
                    <div key={entry.id} className="maintenance-log-item">
                        <span className="maintenance-log-icon"><FaWrench /></span>
                        <div className="maintenance-log-text">
                            <span className="maintenance-log-type">{entry.type}</span>
                            <span className="maintenance-log-meta">{entry.date} • {entry.mileage.toLocaleString('fr-FR')} km</span>
                        </div>
                        <span className="maintenance-log-cost">{entry.cost} €</span>
                    </div>
                ))}
            </div>
        </div>
    );
}