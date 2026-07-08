import { getAllMaintenanceHistory, getAllUpcomingMaintenance } from '../../data/testData.js';
import MaintenanceTimeline from '../../components/maintenance/MaintenanceTimeline';
import ServiceDueReminders from '../../components/maintenance/ServiceDueReminders';
import './Maintenance.css';

export default function GlobalMaintenance() {
    const history = getAllMaintenanceHistory();
    const upcoming = getAllUpcomingMaintenance();

    return (
        <main className="maintenance-page">
            <div className="maintenance-header">
                <h1 className="maintenance-title">Maintenance</h1>
                <p className="maintenance-subtitle">Vue d'ensemble de l'entretien pour tous vos véhicules</p>
            </div>

            <div className="maintenance-grid">
                <div className="maintenance-main">
                    <MaintenanceTimeline history={history} showVehicle />
                </div>
                <div className="maintenance-side">
                    <ServiceDueReminders upcoming={upcoming} showVehicle />
                </div>
            </div>
        </main>
    );
}