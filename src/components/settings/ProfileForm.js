import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import './profileForm.css';

export default function ProfileForm() {
    const [formData, setFormData] = useState({
        name: 'Jean Dupont',
        email: 'jean.dupont@exemple.com',
        currentPassword: '',
        newPassword: ''
    });
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setSaved(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile update', formData);
        setSaved(true);
    };

    return (
        <form className="settings-form" onSubmit={handleSubmit}>
            <h2 className="settings-form-title">Informations personnelles</h2>

            <div className="settings-field">
                <label className="settings-label">Nom complet</label>
                <div className="settings-input-wrap">
                    <FaUser className="settings-input-icon" />
                    <input
                        type="text"
                        name="name"
                        className="settings-input"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="settings-field">
                <label className="settings-label">Email</label>
                <div className="settings-input-wrap">
                    <FaEnvelope className="settings-input-icon" />
                    <input
                        type="email"
                        name="email"
                        className="settings-input"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <h2 className="settings-form-title settings-form-title-spaced">Changer le mot de passe</h2>

            <div className="settings-field">
                <label className="settings-label">Mot de passe actuel</label>
                <div className="settings-input-wrap">
                    <FaLock className="settings-input-icon" />
                    <input
                        type="password"
                        name="currentPassword"
                        className="settings-input"
                        placeholder="••••••••"
                        value={formData.currentPassword}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="settings-field">
                <label className="settings-label">Nouveau mot de passe</label>
                <div className="settings-input-wrap">
                    <FaLock className="settings-input-icon" />
                    <input
                        type="password"
                        name="newPassword"
                        className="settings-input"
                        placeholder="••••••••"
                        value={formData.newPassword}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="settings-form-actions">
                {saved && <span className="settings-saved-hint">Modifications enregistrées</span>}
                <button type="submit" className="settings-submit-btn">Enregistrer</button>
            </div>
        </form>
    );
}