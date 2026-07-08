import { useParams, Link } from 'react-router-dom';
import { getVehicleById } from '../../data/testData';
import VehicleHeader from '../../components/vehicule/VehicleHeader';
import SensorCharts from '../../components/vehicule/SensorCharts';
import DTCTimeline from '../../components/vehicule/DTCTimeline';
import MaintenanceLog from '../../components/vehicule/MaintenanceLog';
import HealthBreakdown from '../../components/vehicule/HealthBreakdown';
import './vehicleDetail.css';

export default function VehicleDetail() {
    const { id } = useParams();
    const vehicle = getVehicleById(id);

    if (!vehicle) {
        return (
            <main className="vehicle-detail-page">
                <p className="vehicle-not-found">
                    Véhicule introuvable. <Link to="/userDashboard">Retour au tableau de bord</Link>
                </p>
            </main>
        );
    }

    return (
        <main className="vehicle-detail-page">
            <VehicleHeader vehicle={vehicle} />
            <SensorCharts data={vehicle.sensorData} />

            <div className="vehicle-detail-grid">
                <div className="vehicle-detail-main">
                    <DTCTimeline dtcs={vehicle.dtcs} />
                    <MaintenanceLog log={vehicle.maintenanceLog} />
                </div>
                <div className="vehicle-detail-side">
                    <HealthBreakdown components={vehicle.componentHealth} />
                </div>
            </div>
        </main>
    );
}