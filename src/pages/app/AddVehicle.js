import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { apiFetch, ApiError } from '../../api/client';
import VehicleForm from '../../components/vehicule/VehicleForm';
import './vehicleFormPage.css';

export default function AddVehicle() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (data) => {
        setIsSubmitting(true);
        setError('');

        try {
            await apiFetch('/vehicles', {
                method: 'POST',
                body: JSON.stringify({
                    make: data.make,
                    model: data.model,
                    year: Number(data.year),
                    vin: data.vin || null,
                    plate_number: data.plate || null,
                    current_mileage_km: Number(data.mileage)
                })
            });
            navigate('/vehicles');
        } catch (err) {
            setError(err instanceof ApiError ? err.message : 'Erreur lors de l\'ajout du véhicule.');
            setIsSubmitting(false);
        }
    };

    return (
        <main className="vehicle-form-page">
            <Link to="/vehicles" className="vehicle-form-back">
                <FaArrowLeft /> Retour aux véhicules
            </Link>

            <div className="vehicle-form-header">
                <h1 className="vehicle-form-title">Ajouter un véhicule</h1>
                <p className="vehicle-form-subtitle">Renseignez les informations de votre véhicule</p>
            </div>

            <div className="vehicle-form-card">
                {error && <p className="auth-error" style={{ marginBottom: '16px' }}>{error}</p>}
                <VehicleForm
                    onSubmit={handleSubmit}
                    submitLabel={isSubmitting ? 'Ajout en cours...' : 'Ajouter le véhicule'}
                />
            </div>
        </main>
    );
}