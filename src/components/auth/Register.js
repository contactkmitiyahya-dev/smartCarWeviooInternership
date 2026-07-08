import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import AuthLayout from './AuthLayout';
import SocialLoginButtons from './SocialLoginButtons';
import './Login.css';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Les mots de passe ne correspondent pas.');
            return;
        }

        if (formData.password.length < 8) {
            setError('Le mot de passe doit contenir au moins 8 caractères.');
            return;
        }

        console.log('Register submit', formData);
    };

    return (
        <AuthLayout
            title="Créer votre compte"
            subtitle="Commencez à surveiller vos véhicules gratuitement"
            footerText="Vous avez déjà un compte ?"
            footerLinkText="Se connecter"
            footerLinkPath="/auth/login"
        >
            <SocialLoginButtons />

            <div className="auth-divider">
                <span>ou</span>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-field">
                    <label className="auth-label">Nom complet</label>
                    <div className="auth-input-wrap">
                        <FaUser className="auth-input-icon" />
                        <input
                            type="text"
                            name="name"
                            className="auth-input"
                            placeholder="Jean Dupont"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="auth-field">
                    <label className="auth-label">Email</label>
                    <div className="auth-input-wrap">
                        <FaEnvelope className="auth-input-icon" />
                        <input
                            type="email"
                            name="email"
                            className="auth-input"
                            placeholder="vous@exemple.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="auth-field">
                    <label className="auth-label">Mot de passe</label>
                    <div className="auth-input-wrap">
                        <FaLock className="auth-input-icon" />
                        <input
                            type="password"
                            name="password"
                            className="auth-input"
                            placeholder="8 caractères minimum"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="auth-field">
                    <label className="auth-label">Confirmer le mot de passe</label>
                    <div className="auth-input-wrap">
                        <FaLock className="auth-input-icon" />
                        <input
                            type="password"
                            name="confirmPassword"
                            className="auth-input"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {error && <p className="auth-error">{error}</p>}

                <button type="submit" className="auth-submit">
                    Créer mon compte
                </button>
            </form>
        </AuthLayout>
    );
}