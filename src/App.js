import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard.js'
import Layout from './components/layout.js';
import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js';
import UserDashboard from './pages/app/userDashboard.js';
import VehicleDetail from './pages/app/VehicleDetail.js';
import DataUpload from './pages/app/DataUpload.js';
import Predictions from './pages/app/Predictions.js';
import Maintenance from './pages/app/Maintenance.js';
import Notifications from './pages/app/Notifications.js';
import Settings from './pages/app/Settings.js';
import Profile from './pages/app/Profile.js';
import GlobalMaintenance from './pages/app/GlobalMaintenance.js';
import GlobalAnalytics from './pages/app/GlobalAnalytics.js';
import GlobalDataUpload from './pages/app/GlobalDataUpload.js';
import VehiclesList from './pages/app/VehiclesList.js';
import ForgotPassword from './components/auth/ForgotPassword.js';
import NotFound from './pages/NotFound.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import AddVehicle from './pages/app/AddVehicle.js'; 
import EditVehicle from './pages/app/EditVehicle.js';
import AuthCallback from './context/AuthCallback.js';
import GuestRoute from './components/GuestRoute.js';

export default function App() {
    return (
        <Layout>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path="/auth/login" element={<GuestRoute><Login /></GuestRoute>} />
            <Route path="/auth/register" element={<GuestRoute><Register /></GuestRoute>} />
            <Route path="/auth/forgot-password" element={<GuestRoute><ForgotPassword /></GuestRoute>} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/userDashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
            <Route path="/vehicles" element={<ProtectedRoute><VehiclesList /></ProtectedRoute>} />
            <Route path="/vehicles/new" element={<ProtectedRoute><AddVehicle /></ProtectedRoute>} />
            <Route path="/vehicles/:id" element={<ProtectedRoute><VehicleDetail /></ProtectedRoute>} />
            <Route path="/vehicles/:id/edit" element={<ProtectedRoute><EditVehicle /></ProtectedRoute>} />
            <Route path="/vehicles/:id/upload" element={<ProtectedRoute><DataUpload /></ProtectedRoute>} />
            <Route path="/vehicles/:id/predictions" element={<ProtectedRoute><Predictions /></ProtectedRoute>} />
            <Route path="/vehicles/:id/maintenance" element={<ProtectedRoute><Maintenance /></ProtectedRoute>} />
            <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/maintenance" element={<ProtectedRoute><GlobalMaintenance /></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><GlobalAnalytics /></ProtectedRoute>} />
            <Route path="/upload-data" element={<ProtectedRoute><GlobalDataUpload /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Layout>
    );
}