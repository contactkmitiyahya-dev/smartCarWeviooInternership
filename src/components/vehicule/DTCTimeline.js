import { FaExclamationTriangle } from 'react-icons/fa';
import './dtcTimeline.css';

export default function DTCTimeline({ dtcs }) {
    if (dtcs.length === 0) {
        return (
            <div className="dtc-timeline dtc-empty">
                <h3 className="dtc-timeline-title">Codes défaut (DTC)</h3>
                <p className="dtc-empty-text">Aucun code défaut détecté récemment.</p>
            </div>
        );
    }

    return (
        <div className="dtc-timeline">
            <h3 className="dtc-timeline-title">Codes défaut (DTC)</h3>
            <div className="dtc-list">
                {dtcs.map((dtc) => (
                    <div key={dtc.id} className="dtc-item">
                        <span className={`dtc-severity-icon dtc-severity-${dtc.severity}`}>
                            <FaExclamationTriangle />
                        </span>
                        <div className="dtc-item-text">
                            <span className="dtc-code">{dtc.code}</span>
                            <span className="dtc-description">{dtc.description}</span>
                        </div>
                        <span className="dtc-date">{dtc.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}