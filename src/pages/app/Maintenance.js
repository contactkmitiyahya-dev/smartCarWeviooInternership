import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { getVehicleById, getMaintenanceSchedule } from '../../data/testData.js';
import MaintenanceTimeline from '../../components/maintenance/MaintenanceTimeline';
import ServiceDueReminders from '../../components/maintenance/ServiceDueReminders';
import AddServiceForm from '../../components/maintenance/AddServiceForm';
import './Maintenance.css';

export default function Maintenance() {
    const { id } = useParams();
    const vehicle = getVehicleById(id);
    const schedule = getMaintenanceSchedule(id);
    const [history, setHistory] = useState(schedule.history);

    if (!vehicle) {
        return (
            <main className="maintenance-page">
                <p className="vehicle-not-found">
                    Véhicule introuvable. <Link to="/dashboard">Retour au tableau de bord</Link>
                </p>
            </main>
        );
    }

    const handleAddService = (newEntry) => {
        setHistory([newEntry, ...history]);
    };

    return (
        <main className="maintenance-page">
            <Link to={`/vehicles/${id}`} className="maintenance-back-link">
                <FaArrowLeft /> Retour au véhicule
            </Link>

            <div className="maintenance-header">
                <h1 className="maintenance-title">Entretien</h1>
                <p className="maintenance-subtitle">{vehicle.make} {vehicle.model} — {vehicle.plate}</p>
            </div>

            <div className="maintenance-grid">
                <div className="maintenance-main">
                    <AddServiceForm onAdd={handleAddService} />
                    <MaintenanceTimeline history={history} />
                </div>
                <div className="maintenance-side">
                    <ServiceDueReminders upcoming={schedule.upcoming} />
                </div>
            </div>
        </main>
    );
}