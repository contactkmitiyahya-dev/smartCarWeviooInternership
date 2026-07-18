import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { apiFetch, ApiError } from '../../api/client';
import VehicleCardGrid from '../../components/frontApp/VehicleCardGrid';
import './vehiclesListPage.css';

export default function VehiclesList() {
    const [vehicles, setVehicles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    useEffect(() => {
        let cancelled = false;

        apiFetch('/vehicles')
            .then((data) => {
                if (!cancelled) setVehicles(data.vehicles || []);
            })
            .catch((err) => {
                if (!cancelled) setError(err instanceof ApiError ? err.message : 'Erreur de chargement.');
            })
            .finally(() => {
                if (!cancelled) setIsLoading(false);
            });

        return () => { cancelled = true; };
    }, []);

    const mappedVehicles = vehicles.map(v => ({
        id: v.id,
        make: v.make,
        model: v.model,
        year: v.year,
        mileage: v.current_mileage_km,
        healthScore: v.health_score ?? 100,
        status: (v.health_score ?? 100) >= 70 ? 'healthy' : (v.health_score ?? 100) >= 40 ? 'warning' : 'critical'
    }));

    const filtered = mappedVehicles.filter((v) => {
        const matchesSearch = `${v.make} ${v.model}`.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'all' || v.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    if (isLoading) {
        return <main className="vehicles-list-page"><p className="dashboard-loading">Chargement...</p></main>;
    }

    if (error) {
        return <main className="vehicles-list-page"><p className="dashboard-error">{error}</p></main>;
    }

    return (
        <main className="vehicles-list-page">
            <div className="vehicles-list-header">
                <div>
                    <h1 className="vehicles-list-title">Véhicules</h1>
                    <p className="vehicles-list-subtitle">{vehicles.length} véhicule(s) enregistré(s)</p>
                </div>
                <Link to="/vehicles/new" className="vehicles-list-add-btn">
                    <FaPlus /> Ajouter un véhicule
                </Link>
            </div>

            <div className="vehicles-list-controls">
                <div className="vehicles-list-search">
                    <FaSearch className="vehicles-list-search-icon" />
                    <input
                        type="text"
                        placeholder="Rechercher un véhicule..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="vehicles-list-search-input"
                    />
                </div>

                <div className="vehicles-list-filters">
                    {['all', 'healthy', 'warning', 'critical'].map((status) => (
                        <button
                            key={status}
                            type="button"
                            className={`vehicles-list-filter ${statusFilter === status ? 'vehicles-list-filter-active' : ''}`}
                            onClick={() => setStatusFilter(status)}
                        >
                            {status === 'all' ? 'Tous' : status === 'healthy' ? 'Sains' : status === 'warning' ? 'À surveiller' : 'Critiques'}
                        </button>
                    ))}
                </div>
            </div>

            {filtered.length > 0 ? (
                <VehicleCardGrid vehicles={filtered} />
            ) : vehicles.length === 0 ? (
                <p className="vehicles-list-empty">Aucun véhicule enregistré. Ajoutez-en un pour commencer.</p>
            ) : (
                <p className="vehicles-list-empty">Aucun véhicule ne correspond à ta recherche.</p>
            )}
        </main>
    );
}