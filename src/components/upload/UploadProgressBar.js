import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import './uploadProgressBar.css';

export default function UploadProgressBar({ fileName, progress, status }) {
    return (
        <div className="upload-progress-item">
            <div className="upload-progress-header">
                <span className="upload-progress-name">{fileName}</span>
                {status === 'uploading' && <FaSpinner className="upload-progress-icon upload-progress-spinning" />}
                {status === 'success' && <FaCheckCircle className="upload-progress-icon upload-progress-success" />}
                {status === 'error' && <FaTimesCircle className="upload-progress-icon upload-progress-error" />}
            </div>
            <div className="upload-progress-track">
                <div
                    className={`upload-progress-fill upload-progress-${status}`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
}