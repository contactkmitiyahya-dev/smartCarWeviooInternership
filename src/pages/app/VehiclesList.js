import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { vehicles } from '../../data/testData.js';
import VehicleCardGrid from '../../components/frontApp/VehicleCardGrid.js';
import './VehiclesListPage.css';

export default function VehiclesList() {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const filtered = vehicles.filter((v) => {
        const matchesSearch = `${v.make} ${v.model}`.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'all' || v.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

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
            ) : (
                <p className="vehicles-list-empty">Aucun véhicule ne correspond à ta recherche.</p>
            )}
        </main>
    );
}