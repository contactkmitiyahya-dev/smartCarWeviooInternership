import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { getVehicleById, getUploadHistory } from '../../data/testData';
import FileDropzone from '../../components/upload/FileDropzone';
import UploadProgressBar from '../../components/upload/UploadProgressBar';
import UploadHistory from '../../components/upload/UploadHistory';
import './dataUpload.css';

export default function DataUpload() {
    const { id } = useParams();
    const vehicle = getVehicleById(id);
    const history = getUploadHistory(id);

    const [files, setFiles] = useState([]);
    const [uploadingFiles, setUploadingFiles] = useState([]);

    if (!vehicle ) {
        return (
            <main className="upload-page">
                <p className="vehicle-not-found">
                    Véhicule introuvable. <Link to="/userDashboard">Retour au tableau de bord</Link>
                </p>
            </main>
        );
    }

    const simulateUpload = () => {
        const validFiles = files.filter((f) => !f.error);
        if (validFiles.length === 0) return;

        const simulated = validFiles.map((f) => ({
            id: f.id,
            fileName: f.file.name,
            progress: 0,
            status: 'uploading'
        }));
        setUploadingFiles(simulated);

        simulated.forEach((item, index) => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 20;
                setUploadingFiles((prev) =>
                    prev.map((p) =>
                        p.id === item.id
                            ? { ...p, progress: Math.min(progress, 100), status: progress >= 100 ? 'success' : 'uploading' }
                            : p
                    )
                );
                if (progress >= 100) clearInterval(interval);
            }, 300 + index * 100);
        });
    };

    return (
        <main className="upload-page">
            <Link to={`/vehicles/${id}`} className="upload-back-link">
                <FaArrowLeft /> Retour au véhicule
            </Link>

            <div className="upload-header">
                <h1 className="upload-title">Importer des données</h1>
                <p className="upload-subtitle">{vehicle.make} {vehicle.model} — {vehicle.plate}</p>
            </div>

            <FileDropzone onFilesSelected={setFiles} />

            {files.some((f) => !f.error) && uploadingFiles.length === 0 && (
                <button type="button" className="upload-submit-btn" onClick={simulateUpload}>
                    Lancer l'import
                </button>
            )}

            {uploadingFiles.length > 0 && (
                <div className="upload-progress-section">
                    {uploadingFiles.map((item) => (
                        <UploadProgressBar
                            key={item.id}
                            fileName={item.fileName}
                            progress={item.progress}
                            status={item.status}
                        />
                    ))}
                </div>
            )}

            <div className="upload-history-section">
                <UploadHistory history={history} />
            </div>
        </main>
    );
}