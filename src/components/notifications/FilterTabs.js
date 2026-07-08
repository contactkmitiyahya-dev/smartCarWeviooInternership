import './filterTabs.css';

const tabs = [
    { key: 'all', label: 'Toutes' },
    { key: 'critical', label: 'Critique' },
    { key: 'warning', label: 'Avertissement' },
    { key: 'info', label: 'Info' }
];

export default function FilterTabs({ activeTab, onChange, counts }) {
    return (
        <div className="filter-tabs">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    type="button"
                    className={`filter-tab ${activeTab === tab.key ? 'filter-tab-active' : ''}`}
                    onClick={() => onChange(tab.key)}
                >
                    {tab.label}
                    <span className="filter-tab-count">{counts[tab.key]}</span>
                </button>
            ))}
        </div>
    );
}