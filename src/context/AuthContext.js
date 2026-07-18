import { createContext, useContext, useState, useEffect } from 'react';
import { apiFetch, getStoredTokens, setStoredTokens, clearStoredTokens } from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const stored = getStoredTokens();
        if (!stored?.accessToken) {
            setIsLoading(false);
            return;
        }

        apiFetch('/auth/me')
            .then((data) => setUser(data.user))
            .catch(() => clearStoredTokens())
            .finally(() => setIsLoading(false));
    }, []);

    const login = async (email, password) => {
        const data = await apiFetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        setStoredTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken });
        setUser(data.user);
        return data.user;
    };

    const register = async (name, email, password) => {
    const data = await apiFetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password })
    });
    setStoredTokens({ accessToken: data.accessToken, refreshToken: data.refreshToken });
    setUser(data.user);
    return data.user;
};

    const logout = async () => {
        const stored = getStoredTokens();
        if (stored?.refreshToken) {
            try {
                await apiFetch('/auth/logout', {
                    method: 'POST',
                    body: JSON.stringify({ refreshToken: stored.refreshToken })
                });
            } catch {
                // Même si l'appel échoue, on nettoie localement
            }
        }
        clearStoredTokens();
        setUser(null);
    };

    const value = {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
    }
    return context;
}