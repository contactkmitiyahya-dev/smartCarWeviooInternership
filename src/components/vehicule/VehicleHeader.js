import { Link } from 'react-router-dom';
import { FaWrench, FaChartLine, FaCar, FaArrowLeft, FaEdit, FaCloudUploadAlt } from 'react-icons/fa';
import './vehicleHeader.css';
import '../../pages/app/maintenance.css';

export default function VehicleHeader({ vehicle }) {
    return (
        <div className="vehicle-header">
            <Link to="/userDashboard" className="vehicle-header-back">
                <FaArrowLeft /> Retour
            </Link>

            <div className="vehicle-header-main">
                <div className="vehicle-header-photo">
                    <FaCar className="vehicle-header-photo-icon" />
                </div>

                <div className="vehicle-header-info">
                    <h1 className="vehicle-header-title">{vehicle.make} {vehicle.model}</h1>
                    <p className="vehicle-header-meta">
                        {vehicle.year} • {vehicle.mileage.toLocaleString('fr-FR')} km • {vehicle.plate}
                    </p>
                    <p className="vehicle-header-vin">VIN : {vehicle.vin}</p>
                </div>

                <div className="vehicle-header-score">
                    <span className="vehicle-header-score-value">{vehicle.healthScore}</span>
                    <span className="vehicle-header-score-label">Health score</span>
                </div>

                <div className="vehicle-header-actions">
                    <Link to={`/vehicles/${vehicle.id}/upload`} className="vehicle-header-upload">
                        <FaCloudUploadAlt /> Importer des données
                    </Link>
                    <Link to={`/vehicles/${vehicle.id}/edit`} className="vehicle-header-edit">
                        <FaEdit /> Modifier
                    </Link>
                    <Link to={`/vehicles/${vehicle.id}/predictions`} className="vehicle-header-edit">
                        <FaChartLine /> Prédictions
                    </Link>
                    <Link to={`/vehicles/${vehicle.id}/maintenance`} className="vehicle-header-edit">
                        <FaWrench /> Entretien
                    </Link>
                </div>
            </div>
        </div>
    );
}