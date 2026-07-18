import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import AuthLayout from '../../components/auth/AuthLayout';
import SocialLoginButtons from '../../components/auth/SocialLoginButtons';
import { useAuth } from '../../context/AuthContext';
import { ApiError } from '../../api/client';
import '../../components/auth/authForm.css';

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            await login(formData.email, formData.password);
            navigate('/userDashboard');
        } catch (err) {
            if (err instanceof ApiError) {
                setError(err.message);
            } else {
                setError('Impossible de se connecter au serveur. Réessaie plus tard.');
            }
        } finally {
            setIsSubmitting(false);
        }
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

                {error && <p className="auth-error">{error}</p>}

                <button type="submit" className="auth-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Connexion...' : 'Se connecter'}
                </button>
            </form>
        </AuthLayout>
    );
}