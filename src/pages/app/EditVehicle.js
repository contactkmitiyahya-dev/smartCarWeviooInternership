import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { apiFetch, ApiError } from '../../api/client';
import VehicleForm from '../../components/vehicule/VehicleForm';
import './vehicleFormPage.css';

export default function EditVehicle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [vehicle, setVehicle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;

        apiFetch(`/vehicles/${id}`)
            .then((data) => { if (!cancelled) setVehicle(data.vehicle); })
            .catch((err) => { if (!cancelled) setError(err instanceof ApiError ? err.message : 'Véhicule introuvable.'); })
            .finally(() => { if (!cancelled) setIsLoading(false); });

        return () => { cancelled = true; };
    }, [id]);

    const handleSubmit = async (data) => {
        try {
            await apiFetch(`/vehicles/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    make: data.make,
                    model: data.model,
                    year: Number(data.year),
                    vin: data.vin || null,
                    plate_number: data.plate || null,
                    current_mileage_km: Number(data.mileage)
                })
            });
            navigate(`/vehicles/${id}`);
        } catch (err) {
            setError(err instanceof ApiError ? err.message : 'Erreur lors de la mise à jour.');
        }
    };

    if (isLoading) {
        return <main className="vehicle-form-page"><p className="dashboard-loading">Chargement...</p></main>;
    }

    if (error && !vehicle) {
        return (
            <main className="vehicle-form-page">
                <p className="vehicle-not-found">
                    {error} <Link to="/userDashboard">Retour au tableau de bord</Link>
                </p>
            </main>
        );
    }

    return (
        <main className="vehicle-form-page">
            <Link to={`/vehicles/${id}`} className="vehicle-form-back">
                <FaArrowLeft /> Retour au véhicule
            </Link>

            <div className="vehicle-form-header">
                <h1 className="vehicle-form-title">Modifier le véhicule</h1>
                <p className="vehicle-form-subtitle">{vehicle.make} {vehicle.model}</p>
            </div>

            <div className="vehicle-form-card">
                {error && <p className="auth-error" style={{ marginBottom: '16px' }}>{error}</p>}
                <VehicleForm
                    initialData={{
                        make: vehicle.make,
                        model: vehicle.model,
                        year: vehicle.year,
                        vin: vehicle.vin,
                        plate: vehicle.plate_number,
                        mileage: vehicle.current_mileage_km
                    }}
                    onSubmit={handleSubmit}
                    submitLabel="Enregistrer les modifications"
                />
            </div>
        </main>
    );
}