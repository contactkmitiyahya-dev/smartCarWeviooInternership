import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaTerminal, FaTachometerAlt, FaSignal, FaMicrochip } from 'react-icons/fa';
import './AuthLayout.css';

const TELEMETRY_MESSAGES = [
    "🛰️ Link: Connection established with Orbiter-X",
    "🔒 Security: End-to-end TLS 1.3 encryption enabled",
    "🔋 Battery cell temp: 34.5°C [Nominal]",
    "⚙️ Transmission: Torque Vectoring Active",
    "🧠 AI Core: Neural telemetry sync 100%",
    "📟 OBD-III: Diagnostic logs loaded successfully",
    "🛑 Radar: Anti-collision matrix calibrated",
    "⚡ Regen Braking: Efficiency at 94.2%",
    "📈 Analytics: Health Score updated (92/100)",
    "❄️ Coolant flow: 1.8 L/s [Optimal]",
    "🔥 ECU: Map 2 active (Sport Mode)",
    "📡 Telemetry: Baud rate 115200 bps secured",
];

export default function AuthLayout({ title, subtitle, children, footerText, footerLinkText, footerLinkPath }) {
    const [logs, setLogs] = useState([
        "🛰️ Link: Connection established with Orbiter-X",
        "🔒 Security: End-to-end TLS 1.3 encryption enabled",
        "📟 OBD-III: Diagnostic logs loaded successfully",
        "🧠 AI Core: Neural telemetry sync 100%",
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogs((prev) => {
                const nextMsg = TELEMETRY_MESSAGES[Math.floor(Math.random() * TELEMETRY_MESSAGES.length)];
                return [...prev.slice(-5), nextMsg];
            });
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="auth-page">
            {/* Background elements */}
            <div className="auth-mesh-grid"></div>
            <div className="auth-radial-glow"></div>

            <div className="auth-form-panel">
                <div className="auth-form-inner">
                    {/* Futuristic Shield Badge instead of big logo */}
                    <div className="auth-sec-badge">
                        <FaShieldAlt className="auth-sec-icon" />
                        <span className="auth-sec-text">SECURE LOGIN PROTOCOL</span>
                    </div>

                    <h1 className="auth-title">{title}</h1>
                    <p className="auth-subtitle">{subtitle}</p>

                    {children}

                    <p className="auth-footer">
                        {footerText}{' '}
                        <Link to={footerLinkPath} className="auth-footer-link">
                            {footerLinkText}
                        </Link>
                    </p>
                </div>
            </div>

            <div className="auth-visual-panel">
                {/* HUD Corner Tech Brackets */}
                <div className="hud-corner hud-top-left"></div>
                <div className="hud-corner hud-top-right"></div>
                <div className="hud-corner hud-bottom-left"></div>
                <div className="hud-corner hud-bottom-right"></div>

                <div className="auth-visual-content">
                    <div className="auth-visual-header">
                        <div className="auth-status-pill">
                            <span className="status-indicator status-online"></span>
                            <span className="status-label">SYS_STATUS: ONLINE</span>
                        </div>
                        <div className="auth-metric-pill">
                            <FaSignal className="metric-icon" />
                            <span>LATENCY: 14ms</span>
                        </div>
                        <div className="auth-metric-pill">
                            <FaMicrochip className="metric-icon" />
                            <span>CORE_LOAD: 24%</span>
                        </div>
                    </div>

                    <h2 className="auth-visual-title">
                        Vos véhicules,
                        <span className="auth-visual-title-accent"> sous contrôle total</span>
                    </h2>

                    {/* SVG Car Silhouette Telemetry */}
                    <div className="car-wireframe-container">
                        <svg viewBox="0 0 400 165" className="telemetry-car-svg">
                            <defs>
                                <linearGradient id="carGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                                    <stop offset="60%" stopColor="#6366f1" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
                                </linearGradient>
                                <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#0ea5e9" />
                                    <stop offset="100%" stopColor="#6366f1" />
                                </linearGradient>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>
                            
                            {/* Car Profile Path */}
                            <path d="M 30,115 
                                     L 50,115 
                                     A 25,25 0 0,1 100,115 
                                     L 240,115 
                                     A 25,25 0 0,1 290,115 
                                     L 350,115 
                                     C 370,115 380,105 380,90 
                                     C 380,80 370,75 350,70
                                     L 300,60
                                     C 270,35 230,30 180,30
                                     C 140,30 110,45 85,60
                                     L 40,80
                                     C 20,85 15,100 15,105
                                     C 15,110 20,115 30,115 Z" 
                                  fill="none" 
                                  stroke="url(#carGrad)" 
                                  strokeWidth="1.8" 
                                  strokeDasharray="600"
                                  className="car-wireframe-path"
                            />
                            
                            {/* Battery Pack Underbody */}
                            <rect x="115" y="90" width="110" height="12" rx="3" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" strokeDasharray="3,3" />
                            <rect x="120" y="93" width="100" height="6" rx="1" fill="rgba(16, 185, 129, 0.15)" />
                            
                            {/* Wheel Outlines */}
                            <circle cx="75" cy="115" r="19" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="5,3" className="wheel-spin" />
                            <circle cx="75" cy="115" r="5" fill="none" stroke="#38bdf8" strokeWidth="1" />
                            
                            <circle cx="265" cy="115" r="19" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="5,3" className="wheel-spin" />
                            <circle cx="265" cy="115" r="5" fill="none" stroke="#38bdf8" strokeWidth="1" />
                            
                            {/* Hotspots */}
                            {/* Engine */}
                            <g className="hotspot hotspot-engine">
                                <circle cx="50" cy="90" r="4.5" fill="#ef4444" filter="url(#glow)" />
                                <circle cx="50" cy="90" r="9" fill="none" stroke="#ef4444" strokeWidth="1" className="ping" />
                            </g>
                            {/* Battery */}
                            <g className="hotspot hotspot-battery">
                                <circle cx="170" cy="96" r="4.5" fill="#10b981" filter="url(#glow)" />
                                <circle cx="170" cy="96" r="9" fill="none" stroke="#10b981" strokeWidth="1" className="ping" />
                            </g>
                            {/* Central CPU */}
                            <g className="hotspot hotspot-cpu">
                                <circle cx="180" cy="58" r="4.5" fill="#38bdf8" filter="url(#glow)" />
                                <circle cx="180" cy="58" r="9" fill="none" stroke="#38bdf8" strokeWidth="1" className="ping" />
                            </g>
                            
                            {/* Tech Label Pointers */}
                            <path d="M 50,90 L 30,55 L 12,55" fill="none" stroke="#ef4444" strokeWidth="0.8" opacity="0.5" />
                            <text x="10" y="47" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold">SYS_MOTOR: OK</text>
                            
                            <path d="M 180,58 L 200,38 L 235,38" fill="none" stroke="#38bdf8" strokeWidth="0.8" opacity="0.5" />
                            <text x="202" y="31" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">AI_CORE: SYNC</text>
                            
                            <path d="M 170,96 L 190,138 L 225,138" fill="none" stroke="#10b981" strokeWidth="0.8" opacity="0.5" />
                            <text x="192" y="148" fill="#10b981" fontSize="8" fontFamily="monospace" fontWeight="bold">BATT_HEALTH: 98%</text>
                        </svg>
                    </div>

                    {/* Gauges Section */}
                    <div className="telemetry-gauges-row">
                        <div className="telemetry-gauge-card">
                            <div className="gauge-ring-outer">
                                <svg viewBox="0 0 100 100" className="gauge-svg">
                                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="5" />
                                    <circle cx="50" cy="50" r="42" fill="none" stroke="url(#gaugeGrad)" strokeWidth="5" 
                                            strokeDasharray="264" strokeDashoffset="70" className="gauge-progress-rpm" />
                                </svg>
                                <div className="gauge-content">
                                    <FaTachometerAlt className="gauge-icon" />
                                    <span className="gauge-value">7.8K</span>
                                    <span className="gauge-unit">RPM</span>
                                </div>
                            </div>
                        </div>

                        <div className="telemetry-gauge-card">
                            <div className="gauge-ring-outer">
                                <svg viewBox="0 0 100 100" className="gauge-svg">
                                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="5" />
                                    <circle cx="50" cy="50" r="42" fill="none" stroke="#10b981" strokeWidth="5" 
                                            strokeDasharray="264" strokeDashoffset="26" className="gauge-progress-battery" />
                                </svg>
                                <div className="gauge-content">
                                    <span className="gauge-value text-green">92%</span>
                                    <span className="gauge-unit">BATTERY</span>
                                </div>
                            </div>
                        </div>

                        <div className="telemetry-gauge-card">
                            <div className="gauge-ring-outer animate-pulse-slow">
                                <div className="gauge-radial-score">
                                    <span className="gauge-score-big">98</span>
                                    <span className="gauge-score-label">HEALTH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scrolling Diagnostics Terminal */}
                    <div className="telemetry-terminal">
                        <div className="terminal-header">
                            <FaTerminal className="terminal-icon" />
                            <span>LIVE_DIAGNOSTICS_STREAM</span>
                            <span className="terminal-pulse-dot"></span>
                        </div>
                        <div className="terminal-body">
                            {logs.map((log, index) => (
                                <div key={index} className="terminal-line">
                                    <span className="terminal-prompt">&gt;</span> {log}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}