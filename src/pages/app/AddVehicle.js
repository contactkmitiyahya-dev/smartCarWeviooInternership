import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import VehicleForm from '../../components/vehicle/VehicleForm';
import './vehicleFormPage.css';

export default function AddVehicle() {
    const navigate = useNavigate();

    const handleSubmit = (data) => {
        console.log('Nouveau véhicule', data);
        // Pas de backend encore : on simule un ajout réussi et on redirige
        navigate('/vehicles');
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
                <VehicleForm onSubmit={handleSubmit} submitLabel="Ajouter le véhicule" />
            </div>
        </main>
    );
}