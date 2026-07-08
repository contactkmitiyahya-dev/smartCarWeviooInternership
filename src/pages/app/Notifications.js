import { useState } from 'react';
import { allNotifications } from '../../data/testData.js';
import FilterTabs from '../../components/notifications/FilterTabs';
import AlertList from '../../components/notifications/AlertList';
import './Notificationstyle.css';

export default function Notifications() {
    const [notifications, setNotifications] = useState(allNotifications);
    const [activeTab, setActiveTab] = useState('all');

    const counts = {
        all: notifications.length,
        critical: notifications.filter(n => n.severity === 'critical').length,
        warning: notifications.filter(n => n.severity === 'warning').length,
        info: notifications.filter(n => n.severity === 'info').length
    };

    const filtered = activeTab === 'all'
        ? notifications
        : notifications.filter(n => n.severity === activeTab);

    const handleAcknowledge = (id) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, acknowledged: true } : n
        ));
    };

    return (
        <main className="notifications-page">
            <div className="notifications-header">
                <h1 className="notifications-title">Notifications</h1>
                <p className="notifications-subtitle">
                    {notifications.filter(n => !n.acknowledged).length} non traitée(s)
                </p>
            </div>

            <FilterTabs activeTab={activeTab} onChange={setActiveTab} counts={counts} />
            <AlertList notifications={filtered} onAcknowledge={handleAcknowledge} />
        </main>
    );
}