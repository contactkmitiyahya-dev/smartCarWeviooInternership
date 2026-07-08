import { Link } from 'react-router-dom';
import { FaPlus, FaCloudUploadAlt } from 'react-icons/fa';
import './quickActions.css';

export default function QuickActions() {
    return (
        <div className="quick-actions">
            <Link to="/vehicles/new" className="quick-action-btn quick-action-primary">
                <FaPlus className="quick-action-icon" />
                Ajouter un véhicule
            </Link>
            <Link to="/upload-data" className="quick-action-btn">
    <FaCloudUploadAlt className="quick-action-icon" />
    Uploader des données
</Link>
        </div>
    );
}