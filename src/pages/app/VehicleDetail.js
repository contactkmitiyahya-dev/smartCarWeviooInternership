import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { apiFetch, ApiError } from '../../api/client';
import VehicleHeader from '../../components/vehicule/VehicleHeader';
import SensorCharts from '../../components/vehicule/SensorCharts';
import DTCTimeline from '../../components/vehicule/DTCTimeline';
import MaintenanceLog from '../../components/vehicule/MaintenanceLog';
import HealthBreakdown from '../../components/vehicule/HealthBreakdown';
import './vehicleDetail.css';

export default function VehicleDetail() {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [health, setHealth] = useState(null);
    const [dtcs, setDtcs] = useState([]);
    const [maintenanceLog, setMaintenanceLog] = useState([]);
    const [sensorData, setSensorData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;

        async function loadAll() {
            try {
                const [vehicleData, healthData, dtcData, maintenanceData, sensorResult] = await Promise.all([
                    apiFetch(`/vehicles/${id}`),
                    apiFetch(`/vehicles/${id}/health`),
                    apiFetch(`/vehicles/${id}/dtc`),
                    apiFetch(`/maintenance/vehicles/${id}`),
                    apiFetch(`/vehicles/${id}/sensor-data?limit=20`)
                ]);

                if (cancelled) return;

                setVehicle(vehicleData.vehicle);
                setHealth(healthData);
                setDtcs(dtcData.dtcs || []);
                setMaintenanceLog(maintenanceData.records || []);
                setSensorData(
                    (sensorResult.readings || []).reverse().map(r => ({
                        date: new Date(r.timestamp).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
                        rpm: r.engine_rpm,
                        temp: r.coolant_temp_c,
                        voltage: r.control_module_voltage_v
                    }))
                );
            } catch (err) {
                if (!cancelled) setError(err instanceof ApiError ? err.message : 'Véhicule introuvable.');
            } finally {
                if (!cancelled) setIsLoading(false);
            }
        }

        loadAll();
        return () => { cancelled = true; };
    }, [id]);

    if (isLoading) {
        return <main className="vehicle-detail-page"><p className="dashboard-loading">Chargement...</p></main>;
    }

    if (error || !vehicle) {
        return (
            <main className="vehicle-detail-page">
                <p className="vehicle-not-found">
                    {error || 'Véhicule introuvable.'} <Link to="/userDashboard">Retour au tableau de bord</Link>
                </p>
            </main>
        );
    }

    const mappedVehicle = {
    id: vehicle.id,
    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.year,
    mileage: vehicle.current_mileage_km,
    plate: vehicle.plate_number,
    vin: vehicle.vin,
    healthScore: health?.healthScore ?? vehicle.health_score ?? 100
};

    const mappedDtcs = dtcs.map(d => ({
        id: d.id,
        code: d.dtc_code,
        severity: d.severity,
        description: d.description,
        date: new Date(d.timestamp).toLocaleDateString('fr-FR')
    }));

    const mappedMaintenance = maintenanceLog.map(m => ({
        id: m.id,
        type: m.service_type,
        date: m.service_date,
        mileage: m.mileage_at_service_km,
        cost: m.cost
    }));

    
    const componentHealth = health?.componentHealth || [];

    return (
        <main className="vehicle-detail-page">
            <VehicleHeader vehicle={mappedVehicle} />

            {sensorData.length > 0 && <SensorCharts data={sensorData} />}

            <div className="vehicle-detail-grid">
                <div className="vehicle-detail-main">
                    <DTCTimeline dtcs={mappedDtcs} />
                    <MaintenanceLog log={mappedMaintenance} />
                </div>
                <div className="vehicle-detail-side">
                    <HealthBreakdown components={componentHealth} />
                </div>
            </div>
        </main>
    );
}