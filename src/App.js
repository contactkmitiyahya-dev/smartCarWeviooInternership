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
export default function App() {
    return (
        <Layout>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/vehicles" element={<VehiclesList />} />
            <Route path="/vehicles/:id" element={<VehicleDetail />} />
            <Route path="/vehicles/:id/upload" element={<DataUpload />} />
            <Route path="/vehicles/:id/predictions" element={<Predictions />} />
            <Route path="/vehicles/:id/maintenance" element={<Maintenance />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/maintenance" element={<GlobalMaintenance />} />
            <Route path="/analytics" element={<GlobalAnalytics />} />
            <Route path="/upload-data" element={<GlobalDataUpload />} />
        </Routes>
        </Layout>
    );
}