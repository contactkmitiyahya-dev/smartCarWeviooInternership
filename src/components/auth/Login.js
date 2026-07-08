import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import AuthLayout from './AuthLayout';
import SocialLoginButtons from './SocialLoginButtons';
import './Login.css';

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submit', formData);
    };

    return (
        <AuthLayout
            title="Content de vous revoir"
            subtitle="Connectez-vous pour accéder à vos véhicules"
            footerText="Pas encore de compte ?"
            footerLinkText="Créer un compte"
            footerLinkPath="/auth/register"
        >
            <SocialLoginButtons />

            <div className="auth-divider">
                <span>ou</span>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
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
                    <div className="auth-label-row">
                        <label className="auth-label">Mot de passe</label>
                        <Link to="/auth/forgot-password" className="auth-forgot-link">
                            Mot de passe oublié ?
                        </Link>
                    </div>
                    <div className="auth-input-wrap">
                        <FaLock className="auth-input-icon" />
                        <input
                            type="password"
                            name="password"
                            className="auth-input"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="auth-submit">
                    Se connecter
                </button>
            </form>
        </AuthLayout>
    );
}