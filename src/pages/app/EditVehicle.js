import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { getVehicleById } from '../../data/mockData';
import VehicleForm from '../../components/vehicle/VehicleForm';
import './vehicleFormPage.css';

export default function EditVehicle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const vehicle = getVehicleById(id);

    if (!vehicle) {
        return (
            <main className="vehicle-form-page">
                <p className="vehicle-not-found">
                    Véhicule introuvable. <Link to="/dashboard">Retour au tableau de bord</Link>
                </p>
            </main>
        );
    }

    const handleSubmit = (data) => {
        console.log('Véhicule modifié', id, data);
        navigate(`/vehicles/${id}`);
    };

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
                <VehicleForm
                    initialData={{
                        make: vehicle.make,
                        model: vehicle.model,
                        year: vehicle.year,
                        vin: vehicle.vin,
                        plate: vehicle.plate,
                        mileage: vehicle.mileage
                    }}
                    onSubmit={handleSubmit}
                    submitLabel="Enregistrer les modifications"
                />
            </div>
        </main>
    );
}