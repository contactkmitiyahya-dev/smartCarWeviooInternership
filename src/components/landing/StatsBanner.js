import './statsBanner.css';

const stats = [
    { value: '0-100', label: 'Health score par véhicule' },
    { value: 'Illimité', label: 'Nombre de véhicules suivis' },
    { value: 'Temps réel', label: 'Traitement des données capteurs' },
    { value: '24/7', label: 'Surveillance continue' }
];

export default function StatsBanner() {
    return (
        <section className="stats-section">
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stats-item">
                        <span className="stats-value">{stat.value}</span>
                        <span className="stats-label">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}