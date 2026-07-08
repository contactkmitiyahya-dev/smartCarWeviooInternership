import { FaUser, FaBell, FaGlobe, FaPalette } from 'react-icons/fa';
import './settingsTabs.css';

const tabs = [
    { key: 'profile', label: 'Profil', icon: FaUser },
    { key: 'notifications', label: 'Notifications', icon: FaBell },
    { key: 'language', label: 'Langue', icon: FaGlobe },
    { key: 'theme', label: 'Apparence', icon: FaPalette }
];

export default function SettingsTabs({ activeTab, onChange }) {
    return (
        <div className="settings-tabs">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.key}
                        type="button"
                        className={`settings-tab ${activeTab === tab.key ? 'settings-tab-active' : ''}`}
                        onClick={() => onChange(tab.key)}
                    >
                        <Icon className="settings-tab-icon" />
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}