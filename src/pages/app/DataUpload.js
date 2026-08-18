import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { apiFetch, ApiError } from '../../api/client';
import FileDropzone from '../../components/upload/FileDropzone';
import UploadProgressBar from '../../components/upload/UploadProgressBar';
import UploadHistory from '../../components/upload/UploadHistory';
import './DataUpload.css';

export default function DataUpload() {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [history, setHistory] = useState([]);
    const [files, setFiles] = useState([]);
    const [uploadingFiles, setUploadingFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let cancelled = false;

        Promise.all([
            apiFetch(`/vehicles/${id}`),
            apiFetch(`/vehicles/${id}/uploads`)
        ]).then(([vehicleData, uploadsData]) => {
            if (cancelled) return;
            setVehicle(vehicleData.vehicle);
            setHistory(uploadsData.uploads || []);
        }).catch((err) => {
            if (!cancelled) setError(err instanceof ApiError ? err.message : 'Véhicule introuvable.');
        }).finally(() => {
            if (!cancelled) setIsLoading(false);
        });

        return () => { cancelled = true; };
    }, [id]);

    if (isLoading) {
        return <main className="upload-page"><p className="dashboard-loading">Chargement...</p></main>;
    }

    if (error && !vehicle) {
        return (
            <main className="upload-page">
                <p className="vehicle-not-found">{error} <Link to="/userDashboard">Retour au tableau de bord</Link></p>
            </main>
        );
    }

    const uploadFile = async (fileItem) => {
        setUploadingFiles((prev) => [...prev, { id: fileItem.id, fileName: fileItem.file.name, progress: 30, status: 'uploading' }]);

        const form = new FormData();
        form.append('file', fileItem.file);

        try {
            const result = await apiFetch(`/vehicles/${id}/upload`, {
                method: 'POST',
                body: form
            });

            setUploadingFiles((prev) => prev.map((u) =>
                u.id === fileItem.id ? { ...u, progress: 100, status: 'success' } : u
            ));

            setHistory((prev) => [
                { id: result.uploadId, filename: fileItem.file.name, status: result.status, row_count: result.rowCount, errors: result.errors, created_at: new Date().toISOString() },
                ...prev
            ]);
        } catch (err) {
            setUploadingFiles((prev) => prev.map((u) =>
                u.id === fileItem.id ? { ...u, progress: 100, status: 'error' } : u
            ));
            setError(err instanceof ApiError ? err.message : 'Erreur lors de l\'import.');
        }
    };

    const handleStartUpload = () => {
        const validFiles = files.filter((f) => !f.error);
        validFiles.forEach((f) => uploadFile(f));
        setFiles([]);
    };

    const mappedHistory = history.map(u => ({
        id: u.id,
        fileName: u.filename,
        date: new Date(u.created_at).toLocaleDateString('fr-FR'),
        rowCount: u.row_count ?? 0,
        status: u.status === 'success' ? 'success' : u.status === 'failed' ? 'failed' : 'partial',
        errorDetails: Array.isArray(u.errors) ? `${u.errors.length} erreur(s)` : null
    }));

    return (
        <main className="upload-page">
            <Link to={`/vehicles/${id}`} className="upload-back-link">
                <FaArrowLeft /> Retour au véhicule
            </Link>

            <div className="upload-header">
                <h1 className="upload-title">Importer des données</h1>
                <p className="upload-subtitle">{vehicle.make} {vehicle.model} — {vehicle.plate_number}</p>
            </div>

            {error && <p className="auth-error" style={{ marginBottom: '16px' }}>{error}</p>}

            <FileDropzone onFilesSelected={setFiles} />

            {files.some((f) => !f.error) && (
                <button type="button" className="upload-submit-btn" onClick={handleStartUpload}>
                    Lancer l'import
                </button>
            )}

            {uploadingFiles.length > 0 && (
                <div className="upload-progress-section">
                    {uploadingFiles.map((item) => (
                        <UploadProgressBar key={item.id} fileName={item.fileName} progress={item.progress} status={item.status} />
                    ))}
                </div>
            )}

            <div className="upload-history-section">
                <UploadHistory history={mappedHistory} />
            </div>
        </main>
    );
}