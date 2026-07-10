import { useState } from 'react';
import { FaCar, FaCalendarAlt, FaBarcode, FaIdCard, FaTachometerAlt } from 'react-icons/fa';
import './vehicleForm.css';

export default function VehicleForm({ initialData, onSubmit, submitLabel }) {
    const [formData, setFormData] = useState(initialData || {
        make: '',
        model: '',
        year: '',
        vin: '',
        plate: '',
        mileage: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="vehicle-form" onSubmit={handleSubmit}>
            <div className="vehicle-form-grid">
                <div className="vehicle-form-field">
                    <label className="vehicle-form-label">Marque</label>
                    <div className="vehicle-form-input-wrap">
                        <FaCar className="vehicle-form-icon" />
                        <input
                            type="text"
                            name="make"
                            className="vehicle-form-input"
                            placeholder="ex : Toyota"
                            value={formData.make}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="vehicle-form-field">
                    <label className="vehicle-form-label">Modèle</label>
                    <div className="vehicle-form-input-wrap">
                        <FaCar className="vehicle-form-icon" />
                        <input
                            type="text"
                            name="model"
                            className="vehicle-form-input"
                            placeholder="ex : Corolla"
                            value={formData.model}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="vehicle-form-field">
                    <label className="vehicle-form-label">Année</label>
                    <div className="vehicle-form-input-wrap">
                        <FaCalendarAlt className="vehicle-form-icon" />
                        <input
                            type="number"
                            name="year"
                            className="vehicle-form-input"
                            placeholder="ex : 2021"
                            min="1990"
                            max="2027"
                            value={formData.year}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="vehicle-form-field">
                    <label className="vehicle-form-label">Kilométrage actuel</label>
                    <div className="vehicle-form-input-wrap">
                        <FaTachometerAlt className="vehicle-form-icon" />
                        <input
                            type="number"
                            name="mileage"
                            className="vehicle-form-input"
                            placeholder="ex : 42000"
                            value={formData.mileage}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="vehicle-form-field">
                    <label className="vehicle-form-label">VIN (numéro de série)</label>
                    <div className="vehicle-form-input-wrap">
                        <FaBarcode className="vehicle-form-icon" />
                        <input
                            type="text"
                            name="vin"
                            className="vehicle-form-input"
                            placeholder="17 caractères"
                            maxLength={17}
                            value={formData.vin}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="vehicle-form-field">
                    <label className="vehicle-form-label">Plaque d'immatriculation</label>
                    <div className="vehicle-form-input-wrap">
                        <FaIdCard className="vehicle-form-icon" />
                        <input
                            type="text"
                            name="plate"
                            className="vehicle-form-input"
                            placeholder="ex : AB-123-CD"
                            value={formData.plate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </div>

            <button type="submit" className="vehicle-form-submit">
                {submitLabel}
            </button>
        </form>
    );
}