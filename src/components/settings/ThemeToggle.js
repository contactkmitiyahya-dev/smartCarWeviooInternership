import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './themeToggle.css';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('dark');

    return (
        <div className="theme-toggle-section">
            <h2 className="settings-form-title">Apparence</h2>
            <p className="settings-form-desc">Choisissez le thème de l'interface.</p>

            <div className="theme-options">
                <button
                    type="button"
                    className={`theme-option ${theme === 'dark' ? 'theme-option-active' : ''}`}
                    onClick={() => setTheme('dark')}
                >
                    <FaMoon className="theme-option-icon" />
                    Sombre
                </button>
                <button
                    type="button"
                    className={`theme-option ${theme === 'light' ? 'theme-option-active' : ''}`}
                    onClick={() => setTheme('light')}
                >
                    <FaSun className="theme-option-icon" />
                    Clair
                </button>
            </div>

            {theme === 'light' && (
                <p className="theme-option-note">
                    Le thème clair sera implémenté prochainement — l'interface reste en sombre pour l'instant.
                </p>
            )}
        </div>
    );
}