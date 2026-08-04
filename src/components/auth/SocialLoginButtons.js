import { FaGoogle, FaGithub } from 'react-icons/fa';
import './SocialLoginButtons.css';

export default function SocialLoginButtons() {
    const handleGoogleLogin = () => {
        window.location.href = '/api/v1/auth/google';
    };
    const handleGithubLogin = () => {
        window.location.href = '/api/v1/auth/github';
    };

    return (
        <div className="social-login">
            <button type="button" className="social-btn" onClick={handleGoogleLogin}>
                <FaGoogle className="social-icon" />
                Google
            </button>
            <button type="button" className="social-btn" onClick={handleGithubLogin}>
                <FaGithub className="social-icon" />
                GitHub
            </button>
        </div>
    );
}