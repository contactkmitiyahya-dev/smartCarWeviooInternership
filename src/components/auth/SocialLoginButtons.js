import { FaGoogle, FaGithub } from 'react-icons/fa';
import './SocialLoginButtons.css';

export default function SocialLoginButtons() {
    return (
        <div className="social-login">
            <button type="button" className="social-btn">
                <FaGoogle className="social-icon" />
                Google
            </button>
            <button type="button" className="social-btn">
                <FaGithub className="social-icon" />
                GitHub
            </button>
        </div>
    );
}