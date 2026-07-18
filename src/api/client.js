const API_BASE = '/api/v1';
const isBrowser = typeof window !== 'undefined';

function getStoredTokens() {
    if (!isBrowser) return null;
    try {
        const raw = localStorage.getItem('smartcar_auth');
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function setStoredTokens(tokens) {
    if (!isBrowser) return;
    localStorage.setItem('smartcar_auth', JSON.stringify(tokens));
}

function clearStoredTokens() {
    if (!isBrowser) return;
    localStorage.removeItem('smartcar_auth');
}

async function refreshAccessToken() {
    const stored = getStoredTokens();
    if (!stored?.refreshToken) return null;

    try {
        const res = await fetch(`${API_BASE}/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken: stored.refreshToken })
        });

        if (!res.ok) {
            clearStoredTokens();
            return null;
        }

        const data = await res.json();
        setStoredTokens({ ...stored, accessToken: data.accessToken });
        return data.accessToken;
    } catch {
        clearStoredTokens();
        return null;
    }
}

class ApiError extends Error {
    constructor(message, status, data) {
        super(message);
        this.status = status;
        this.data = data;
    }
}

async function apiFetch(endpoint, options = {}) {
    const stored = getStoredTokens();
    const headers = {
        ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
        ...(stored?.accessToken ? { Authorization: `Bearer ${stored.accessToken}` } : {}),
        ...options.headers
    };

    let res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers,cache: 'no-store' });

    if (res.status === 401 && stored?.refreshToken) {
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
            res = await fetch(`${API_BASE}${endpoint}`, {
                ...options,
                headers: { ...headers, Authorization: `Bearer ${newAccessToken}` },
                cache: 'no-store'
            });
        }
    }

    const contentType = res.headers.get('content-type');
    const data = contentType?.includes('application/json') ? await res.json() : null;

    if (!res.ok) {
        throw new ApiError(data?.error || 'Une erreur est survenue.', res.status, data);
    }

    return data;
}

export { apiFetch, getStoredTokens, setStoredTokens, clearStoredTokens, ApiError };