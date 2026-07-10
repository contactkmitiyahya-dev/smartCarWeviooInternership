import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import AuthLayout from '../../components/auth/AuthLayout';
import '../../components/auth/authForm.css';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Password reset requested for', email);
        setSubmitted(true);
    };

    return (
        <AuthLayout
            title="Mot de passe oublié"
            subtitle="Entrez votre email pour recevoir un lien de réinitialisation"
            footerText="Vous vous souvenez de votre mot de passe ?"
            footerLinkText="Se connecter"
            footerLinkPath="/auth/login"
        >
            {submitted ? (
                <div className="forgot-password-success">
                    <p>
                        Si un compte existe pour <strong>{email}</strong>, un email avec les instructions
                        de réinitialisation vient d'être envoyé.
                    </p>
                </div>
            ) : (
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="auth-field">
                        <label className="auth-label">Email</label>
                        <div className="auth-input-wrap">
                            <FaEnvelope className="auth-input-icon" />
                            <input
                                type="email"
                                className="auth-input"
                                placeholder="vous@exemple.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="auth-submit">
                        Envoyer le lien de réinitialisation
                    </button>
                </form>
            )}
        </AuthLayout>
    );
}