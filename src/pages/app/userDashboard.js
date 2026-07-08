import { vehicles, alerts, getHealthSummary } from '../../data/testData';
import VehicleCardGrid from '../../components/frontApp/VehicleCardGrid';
import HealthScoreSummary from '../../components/frontApp/HealthScoreSummary';
import RecentAlerts from '../../components/frontApp/RecentAlerts';
import QuickActions from '../../components/frontApp/QuickActions';
import './userDashboard.css';

export default function UserDashboard() {
    const summary = getHealthSummary();

    return (
        <main className="app-dashboard">
            <div className="app-dashboard-header">
                <h1 className="app-dashboard-title">Tableau de bord</h1>
                <p className="app-dashboard-subtitle">Vue d'ensemble de vos véhicules</p>
            </div>

            <HealthScoreSummary summary={summary} />
            <QuickActions />

            <div className="app-dashboard-grid">
                <div className="app-dashboard-main">
                    <h2 className="app-dashboard-section-title">Vos véhicules</h2>
                    <VehicleCardGrid vehicles={vehicles} />
                </div>
                <div className="app-dashboard-side">
                    <RecentAlerts alerts={alerts.slice(0, 3)} />
                </div>
            </div>
            
        </main>
    );
}