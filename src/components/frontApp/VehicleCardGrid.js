import { Link } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';
import './vehicleCardGrid.css';

export default function VehicleCardGrid({ vehicles }) {
    const statusLabel = {
        healthy: 'Sain',
        warning: 'À surveiller',
        critical: 'Critique'
    };

    return (
        <div className="vehicle-grid">
            {vehicles.map((vehicle) => (
                <Link key={vehicle.id} to={`/vehicles/${vehicle.id}`} className="vehicle-card">
                    <div className="vehicle-card-header">
                        <div className="vehicle-card-icon-wrap">
                            <FaCar className="vehicle-card-icon" />
                        </div>
                        <span className={`vehicle-status-badge vehicle-status-${vehicle.status}`}>
                            {statusLabel[vehicle.status]}
                        </span>
                    </div>

                    <h3 className="vehicle-card-title">{vehicle.make} {vehicle.model}</h3>
                    <p className="vehicle-card-subtitle">{vehicle.year} • {vehicle.mileage.toLocaleString('fr-FR')} km</p>

                    <div className="vehicle-card-score">
                        <div className="vehicle-score-bar-track">
                            <div
                                className={`vehicle-score-bar-fill vehicle-score-${vehicle.status}`}
                                style={{ width: `${vehicle.healthScore}%` }}
                            ></div>
                        </div>
                        <span className="vehicle-score-value">{vehicle.healthScore}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}