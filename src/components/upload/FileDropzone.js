import { useState, useRef } from 'react';
import { FaCloudUploadAlt, FaFileAlt, FaTimes } from 'react-icons/fa';
import './fileDropzone.css';

const ACCEPTED_TYPES = ['.csv', '.json'];
const MAX_SIZE_MB = 10;

let fileIdCounter = 0;

export default function FileDropzone({ onFilesSelected }) {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const inputRef = useRef(null);

    const validateFile = (file) => {
        const ext = '.' + file.name.split('.').pop().toLowerCase();
        if (!ACCEPTED_TYPES.includes(ext)) {
            return `Format non supporté (${ext}). Utilisez .csv ou .json`;
        }
        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
            return `Fichier trop volumineux (max ${MAX_SIZE_MB} Mo)`;
        }
        return null;
    };

    const processFiles = (fileList) => {
        const files = Array.from(fileList).map((file) => ({
            file,
            id: `file-${fileIdCounter++}-${file.name}`,
            error: validateFile(file)
        }));
        const updated = [...selectedFiles, ...files];
        setSelectedFiles(updated);
        onFilesSelected(updated);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        processFiles(e.dataTransfer.files);
    };

    const handleInputChange = (e) => {
        processFiles(e.target.files);
        e.target.value = '';
    };

    const removeFile = (id) => {
        const updated = selectedFiles.filter((f) => f.id !== id);
        setSelectedFiles(updated);
        onFilesSelected(updated);
    };

    return (
        <div className="dropzone-wrapper">
            <div
                className={`dropzone ${isDragging ? 'dropzone-active' : ''}`}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => inputRef.current.click()}
            >
                <FaCloudUploadAlt className="dropzone-icon" />
                <p className="dropzone-text">Glissez vos fichiers ici ou cliquez pour parcourir</p>
                <p className="dropzone-hint">Formats acceptés : CSV, JSON — 10 Mo max par fichier</p>
                <input
                    ref={inputRef}
                    type="file"
                    accept=".csv,.json"
                    multiple
                    onChange={handleInputChange}
                    className="dropzone-input"
                />
            </div>

            {selectedFiles.length > 0 && (
                <div className="dropzone-file-list">
                    {selectedFiles.map((item) => (
                        <div key={item.id} className={`dropzone-file-item ${item.error ? 'dropzone-file-error' : ''}`}>
                            <FaFileAlt className="dropzone-file-icon" />
                            <div className="dropzone-file-info">
                                <span className="dropzone-file-name">{item.file.name}</span>
                                <span className="dropzone-file-meta">
                                    {item.error ? item.error : `${(item.file.size / 1024).toFixed(1)} Ko`}
                                </span>
                            </div>
                            <button type="button" className="dropzone-file-remove" onClick={() => removeFile(item.id)}>
                                <FaTimes />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}