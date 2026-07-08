import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { serviceCostCatalog } from '../../data/testData';
import './addServiceForm.css';

const serviceTypes = Object.keys(serviceCostCatalog);

export default function AddServiceForm({ onAdd }) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ type: '', date: '', mileage: '', cost: '', notes: '' });

    const handleTypeChange = (e) => {
        const selectedType = e.target.value;
        setFormData({
            ...formData,
            type: selectedType,
            cost: serviceCostCatalog[selectedType] ?? ''
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            id: `m-${Date.now()}`,
            type: formData.type,
            date: formData.date,
            mileage: Number(formData.mileage),
            cost: Number(formData.cost),
            notes: formData.notes
        });
        setFormData({ type: '', date: '', mileage: '', cost: '', notes: '' });
        setIsOpen(false);
    };

    if (!isOpen) {
        return (
            <button type="button" className="add-service-toggle" onClick={() => setIsOpen(true)}>
                <FaPlus /> Ajouter un entretien
            </button>
        );
    }

    return (
        <form className="add-service-form" onSubmit={handleSubmit}>
            <div className="add-service-grid">
                <div className="add-service-field">
                    <label className="add-service-label">Type d'entretien</label>
                    <select
                        name="type"
                        className="add-service-input"
                        value={formData.type}
                        onChange={handleTypeChange}
                        required
                    >
                        <option value="" disabled>Sélectionner un type</option>
                        {serviceTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className="add-service-field">
                    <label className="add-service-label">Date</label>
                    <input
                        type="date"
                        name="date"
                        className="add-service-input"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="add-service-field">
                    <label className="add-service-label">Kilométrage</label>
                    <input
                        type="number"
                        name="mileage"
                        className="add-service-input"
                        placeholder="ex : 45000"
                        value={formData.mileage}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="add-service-field">
                    <label className="add-service-label">Coût estimé (€)</label>
                    <input
                        type="number"
                        name="cost"
                        className="add-service-input add-service-cost-auto"
                        value={formData.cost}
                        onChange={handleChange}
                        disabled={formData.type !== 'Autre'}
                        required
                    />
                    {formData.type && formData.type !== 'Autre' && (
                        <span className="add-service-cost-hint">
                            Prix estimé automatiquement selon le type sélectionné
                        </span>
                    )}
                </div>
            </div>

            <div className="add-service-field">
                <label className="add-service-label">Notes (optionnel)</label>
                <input
                    type="text"
                    name="notes"
                    className="add-service-input"
                    placeholder="ex : Huile 5W30 + filtre"
                    value={formData.notes}
                    onChange={handleChange}
                />
            </div>

            <div className="add-service-actions">
                <button type="button" className="add-service-cancel" onClick={() => setIsOpen(false)}>
                    Annuler
                </button>
                <button type="submit" className="add-service-submit">
                    Enregistrer
                </button>
            </div>
        </form>
    );
}