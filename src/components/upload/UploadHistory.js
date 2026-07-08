import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
import './uploadHistory.css';

const statusConfig = {
    success: { icon: FaCheckCircle, label: 'Succès', className: 'upload-history-success' },
    partial: { icon: FaExclamationCircle, label: 'Partiel', className: 'upload-history-partial' },
    failed: { icon: FaTimesCircle, label: 'Échoué', className: 'upload-history-failed' }
};

export default function UploadHistory({ history }) {
    if (history.length === 0) {
        return (
            <div className="upload-history">
                <h3 className="upload-history-title">Historique des imports</h3>
                <p className="upload-history-empty">Aucun import effectué pour ce véhicule.</p>
            </div>
        );
    }

    return (
        <div className="upload-history">
            <h3 className="upload-history-title">Historique des imports</h3>
            <div className="upload-history-list">
                {history.map((entry) => {
                    const config = statusConfig[entry.status];
                    const Icon = config.icon;
                    return (
                        <div key={entry.id} className="upload-history-item">
                            <span className={`upload-history-icon ${config.className}`}>
                                <Icon />
                            </span>
                            <div className="upload-history-text">
                                <span className="upload-history-filename">{entry.fileName}</span>
                                <span className="upload-history-meta">
                                    {entry.date} • {entry.rowCount} lignes
                                    {entry.errorDetails ? ` • ${entry.errorDetails}` : ''}
                                </span>
                            </div>
                            <span className={`upload-history-status ${config.className}`}>{config.label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}