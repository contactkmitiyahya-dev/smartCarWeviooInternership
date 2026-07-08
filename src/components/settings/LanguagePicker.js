import { useState } from 'react';
import './languagePicker.css';

const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' }
];

export default function LanguagePicker() {
    const [selected, setSelected] = useState('fr');

    return (
        <div className="language-picker">
            <h2 className="settings-form-title">Langue</h2>
            <p className="settings-form-desc">Choisissez la langue d'affichage de l'application.</p>

            <div className="language-options">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        type="button"
                        className={`language-option ${selected === lang.code ? 'language-option-active' : ''}`}
                        onClick={() => setSelected(lang.code)}
                    >
                        <span className="language-flag">{lang.flag}</span>
                        {lang.label}
                    </button>
                ))}
            </div>
        </div>
    );
}