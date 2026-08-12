import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function GuestRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div className="protected-route-loading" />;
    }

    if (isAuthenticated) {
        return <Navigate to="/userDashboard" replace />;
    }

    return children;
}