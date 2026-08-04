import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setStoredTokens } from '../api/client';

export default function AuthCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const accessToken = params.get('accessToken');
        const refreshToken = params.get('refreshToken');

        if (accessToken && refreshToken) {
            setStoredTokens({ accessToken, refreshToken });
            navigate('/userDashboard');
        } else {
            navigate('/auth/login?error=oauth_failed');
        }
    }, [navigate]);

    return <p>Connexion en cours...</p>;
}