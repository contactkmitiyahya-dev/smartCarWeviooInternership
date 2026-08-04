import { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { apiFetch, ApiError } from '../../api/client';
import { useAuth } from '../../context/AuthContext';
import './profileForm.css';

export default function ProfileForm() {
    const { user } = useAuth();
    const [formData, setFormData] = useState({ name: '', email: '', currentPassword: '', newPassword: '' });
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            setFormData((prev) => ({ ...prev, name: user.name, email: user.email }));
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setSaved(false);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await apiFetch('/auth/me', {
                method: 'PATCH',
                body: JSON.stringify({ name: formData.name, email: formData.email })
            });

            if (formData.currentPassword && formData.newPassword) {
                await apiFetch('/auth/change-password', {
                    method: 'POST',
                    body: JSON.stringify({
                        currentPassword: formData.currentPassword,
                        newPassword: formData.newPassword
                    })
                });
                setFormData({ ...formData, currentPassword: '', newPassword: '' });
            }

            setSaved(true);
        } catch (err) {
            setError(err instanceof ApiError ? err.message : 'Erreur lors de la mise à jour.');
        }
    };

    return (
        <form className="settings-form" onSubmit={handleSubmit}>
            <h2 className="settings-form-title">Informations personnelles</h2>

            <div className="settings-field">
                <label className="settings-label">Nom complet</label>
                <div className="settings-input-wrap">
                    <FaUser className="settings-input-icon" />
                    <input type="text" name="name" className="settings-input" value={formData.name} onChange={handleChange} />
                </div>
            </div>

            <div className="settings-field">
                <label className="settings-label">Email</label>
                <div className="settings-input-wrap">
                    <FaEnvelope className="settings-input-icon" />
                    <input type="email" name="email" className="settings-input" value={formData.email} onChange={handleChange} />
                </div>
            </div>

            <h2 className="settings-form-title settings-form-title-spaced">Changer le mot de passe</h2>

            <div className="settings-field">
                <label className="settings-label">Mot de passe actuel</label>
                <div className="settings-input-wrap">
                    <FaLock className="settings-input-icon" />
                    <input type="password" name="currentPassword" className="settings-input" placeholder="••••••••" value={formData.currentPassword} onChange={handleChange} />
                </div>
            </div>

            <div className="settings-field">
                <label className="settings-label">Nouveau mot de passe</label>
                <div className="settings-input-wrap">
                    <FaLock className="settings-input-icon" />
                    <input type="password" name="newPassword" className="settings-input" placeholder="••••••••" value={formData.newPassword} onChange={handleChange} />
                </div>
            </div>

            {error && <p className="auth-error">{error}</p>}

            <div className="settings-form-actions">
                {saved && <span className="settings-saved-hint">Modifications enregistrées</span>}
                <button type="submit" className="settings-submit-btn">Enregistrer</button>
            </div>
        </form>
    );
}