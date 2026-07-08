import { useState } from 'react';
import SettingsTabs from '../../components/settings/SettingsTabs';
import ProfileForm from '../../components/settings/ProfileForm';
import NotificationPreferences from '../../components/settings/NotificationPreferences';
import LanguagePicker from '../../components/settings/LanguagePicker';
import ThemeToggle from '../../components/settings/ThemeToggle';
import './settingsPage.css';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <main className="settings-page">
            <h1 className="settings-page-title">Paramètres</h1>

            <div className="settings-layout">
                <SettingsTabs activeTab={activeTab} onChange={setActiveTab} />

                <div className="settings-content">
                    {activeTab === 'profile' && <ProfileForm />}
                    {activeTab === 'notifications' && <NotificationPreferences />}
                    {activeTab === 'language' && <LanguagePicker />}
                    {activeTab === 'theme' && <ThemeToggle />}
                </div>
            </div>
        </main>
    );
}