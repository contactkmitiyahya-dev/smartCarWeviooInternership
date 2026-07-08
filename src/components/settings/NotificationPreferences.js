import { useState } from 'react';
import './notificationPreferences.css';

const defaultPrefs = [
    { key: 'critical', label: 'Alertes critiques', description: 'Panne imminente ou code défaut grave', email: true, push: true },
    { key: 'warning', label: 'Avertissements', description: 'Maintenance recommandée, anomalies mineures', email: true, push: true },
    { key: 'info', label: 'Informations', description: 'Confirmations, résumés hebdomadaires', email: false, push: true }
];

export default function NotificationPreferences() {
    const [prefs, setPrefs] = useState(defaultPrefs);

    const toggle = (key, channel) => {
        setPrefs(prefs.map(p => p.key === key ? { ...p, [channel]: !p[channel] } : p));
    };

    return (
        <div className="notif-prefs">
            <h2 className="settings-form-title">Préférences de notification</h2>

            <div className="notif-prefs-table">
                <div className="notif-prefs-row notif-prefs-header">
                    <span>Type d'alerte</span>
                    <span>Email</span>
                    <span>Push</span>
                </div>

                {prefs.map((pref) => (
                    <div key={pref.key} className="notif-prefs-row">
                        <div className="notif-prefs-info">
                            <span className="notif-prefs-label">{pref.label}</span>
                            <span className="notif-prefs-desc">{pref.description}</span>
                        </div>
                        <button
                            type="button"
                            className={`notif-toggle ${pref.email ? 'notif-toggle-on' : ''}`}
                            onClick={() => toggle(pref.key, 'email')}
                        >
                            <span className="notif-toggle-knob"></span>
                        </button>
                        <button
                            type="button"
                            className={`notif-toggle ${pref.push ? 'notif-toggle-on' : ''}`}
                            onClick={() => toggle(pref.key, 'push')}
                        >
                            <span className="notif-toggle-knob"></span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}