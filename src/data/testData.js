export const vehicles = [
    {
        id: 'v1',
        make: 'Toyota',
        model: 'Corolla',
        year: 2021,
        mileage: 42000,
        healthScore: 87,
        status: 'healthy',
        lastUpdated: '2026-07-01'
    },
    {
        id: 'v2',
        make: 'BMW',
        model: 'X3',
        year: 2019,
        mileage: 68500,
        healthScore: 54,
        status: 'warning',
        lastUpdated: '2026-06-29'
    },
    {
        id: 'v3',
        make: 'Renault',
        model: 'Clio',
        year: 2022,
        mileage: 15200,
        healthScore: 95,
        status: 'healthy',
        lastUpdated: '2026-07-03'
    },
    {
        id: 'v4',
        make: 'Peugeot',
        model: '3008',
        year: 2018,
        mileage: 91000,
        healthScore: 31,
        status: 'critical',
        lastUpdated: '2026-06-25'
    }
];

export const alerts = [
    {
        id: 'a1',
        vehicleId: 'v4',
        vehicleName: 'Peugeot 3008',
        severity: 'critical',
        message: 'Code défaut détecté : pression pneu avant gauche anormale',
        date: '2026-07-04'
    },
    {
        id: 'a2',
        vehicleId: 'v2',
        vehicleName: 'BMW X3',
        severity: 'warning',
        message: 'Maintenance recommandée : vidange à prévoir sous 500km',
        date: '2026-07-03'
    },
    {
        id: 'a3',
        vehicleId: 'v1',
        vehicleName: 'Toyota Corolla',
        severity: 'info',
        message: 'Analyse capteurs terminée, aucune anomalie',
        date: '2026-07-01'
    }
];

export function getHealthSummary() {
    const total = vehicles.length;
    const healthy = vehicles.filter(v => v.status === 'healthy').length;
    const warning = vehicles.filter(v => v.status === 'warning').length;
    const critical = vehicles.filter(v => v.status === 'critical').length;
    return { total, healthy, warning, critical };
}
export const vehicleDetails = {
    v1: {
        vin: '1HGCM82633A123456',
        plate: '200 tunis 1000',
        photo: null,
        componentHealth: [
            { name: 'Moteur', score: 92, risk: 'low' },
            { name: 'Freins', score: 85, risk: 'low' },
            { name: 'Batterie', score: 78, risk: 'medium' },
            { name: 'Refroidissement', score: 90, risk: 'low' }
        ],
        sensorData: [
            { date: '01/07', rpm: 2100, temp: 88, voltage: 12.6 },
            { date: '02/07', rpm: 2200, temp: 90, voltage: 12.5 },
            { date: '03/07', rpm: 2050, temp: 87, voltage: 12.6 },
            { date: '04/07', rpm: 2300, temp: 92, voltage: 12.4 },
            { date: '05/07', rpm: 2150, temp: 89, voltage: 12.6 }
        ],
        dtcs: [
            { id: 'd1', code: 'P0128', severity: 'warning', description: 'Thermostat de refroidissement', date: '2026-06-28' },
            { id: 'd2', code: 'P0442', severity: 'info', description: 'Fuite mineure système EVAP', date: '2026-06-15' }
        ],
        maintenanceLog: [
            { id: 'm1', type: 'Vidange', date: '2026-05-10', mileage: 40000, cost: 65 },
            { id: 'm2', type: 'Changement plaquettes', date: '2026-03-02', mileage: 37500, cost: 120 }
        ]
    },
    v2: {
        vin: '5UXWX7C50BA123789',
        plate: 'CD-456-EF',
        photo: null,
        componentHealth: [
            { name: 'Moteur', score: 70, risk: 'medium' },
            { name: 'Freins', score: 45, risk: 'high' },
            { name: 'Batterie', score: 60, risk: 'medium' },
            { name: 'Refroidissement', score: 80, risk: 'low' }
        ],
        sensorData: [
            { date: '01/07', rpm: 2400, temp: 95, voltage: 12.1 },
            { date: '02/07', rpm: 2500, temp: 97, voltage: 12.0 },
            { date: '03/07', rpm: 2450, temp: 96, voltage: 12.0 },
            { date: '04/07', rpm: 2600, temp: 99, voltage: 11.9 },
            { date: '05/07', rpm: 2550, temp: 98, voltage: 11.9 }
        ],
        dtcs: [
            { id: 'd3', code: 'P0300', severity: 'critical', description: 'Ratés d\'allumage multi-cylindres', date: '2026-07-02' }
        ],
        maintenanceLog: [
            { id: 'm3', type: 'Vidange', date: '2026-04-20', mileage: 65000, cost: 90 }
        ]
    }
};

export function getVehicleById(id) {
    const vehicle = vehicles.find(v => v.id === id);
    const details = vehicleDetails[id];
    if (!vehicle || !details) return null;
    return { ...vehicle, ...details };
}

export const uploadHistory = {
    v1: [
        { id: 'u1', fileName: 'obd_juin_2026.csv', date: '2026-06-28', rowCount: 1420, status: 'success', errorDetails: null },
        { id: 'u2', fileName: 'obd_mai_2026.csv', date: '2026-05-30', rowCount: 980, status: 'partial', errorDetails: '12 lignes ignorées' }
    ],
    v2: [
        { id: 'u3', fileName: 'sensors_export.json', date: '2026-07-01', rowCount: 2100, status: 'success', errorDetails: null }
    ]
};

export function getUploadHistory(vehicleId) {
    return uploadHistory[vehicleId] || [];
}
export const predictions = {
    v1: {
        globalRisk: 22,
        componentRisks: [
            { name: 'Batterie', risk: 'medium', percentage: 45, confidence: 82 },
            { name: 'Freins', risk: 'low', percentage: 12, confidence: 91 },
            { name: 'Moteur', risk: 'low', percentage: 8, confidence: 88 },
            { name: 'Refroidissement', risk: 'low', percentage: 15, confidence: 85 }
        ],
        recommendations: [
            { id: 'r1', action: 'Faire tester la batterie en atelier', urgency: 'medium', estimatedCost: '30-50 €', reasoning: 'Tension en légère baisse sur les 7 derniers jours' },
            { id: 'r2', action: 'Prochaine vidange dans 2 000 km', urgency: 'low', estimatedCost: '60-90 €', reasoning: 'Basé sur le kilométrage et l\'historique d\'entretien' }
        ],
        forecast: [
            { date: '01/07', voltage: 12.6 },
            { date: '08/07', voltage: 12.5 },
            { date: '15/07', voltage: 12.3 },
            { date: '22/07', voltage: 12.1 },
            { date: '29/07', voltage: 11.9 }
        ]
    },
    v2: {
        globalRisk: 68,
        componentRisks: [
            { name: 'Freins', risk: 'high', percentage: 78, confidence: 90 },
            { name: 'Moteur', risk: 'medium', percentage: 52, confidence: 76 },
            { name: 'Batterie', risk: 'medium', percentage: 40, confidence: 80 },
            { name: 'Refroidissement', risk: 'low', percentage: 20, confidence: 84 }
        ],
        recommendations: [
            { id: 'r3', action: 'Remplacer les plaquettes de frein avant', urgency: 'high', estimatedCost: '150-220 €', reasoning: 'Code défaut P0300 combiné à usure détectée' },
            { id: 'r4', action: 'Diagnostic moteur approfondi recommandé', urgency: 'medium', estimatedCost: '80-120 €', reasoning: 'Ratés d\'allumage multi-cylindres détectés' }
        ],
        forecast: [
            { date: '01/07', voltage: 12.1 },
            { date: '08/07', voltage: 11.9 },
            { date: '15/07', voltage: 11.7 },
            { date: '22/07', voltage: 11.4 },
            { date: '29/07', voltage: 11.1 }
        ]
    }
};

export function getPredictions(vehicleId) {
    return predictions[vehicleId] || null;
}

export const maintenanceSchedule = {
    v1: {
        history: [
            { id: 'm1', type: 'Vidange', date: '2026-05-10', mileage: 40000, cost: 65, notes: 'Huile 5W30 + filtre' },
            { id: 'm2', type: 'Changement plaquettes', date: '2026-03-02', mileage: 37500, cost: 120, notes: 'Plaquettes avant' },
            { id: 'm5', type: 'Révision complète', date: '2025-12-15', mileage: 32000, cost: 280, notes: 'Révision 30 000 km' }
        ],
        upcoming: [
            { id: 's1', type: 'Vidange', dueDate: '2026-08-10', dueMileage: 45000, urgency: 'medium' },
            { id: 's2', type: 'Contrôle technique', dueDate: '2026-09-01', dueMileage: null, urgency: 'low' }
        ]
    },
    v2: {
        history: [
            { id: 'm3', type: 'Vidange', date: '2026-04-20', mileage: 65000, cost: 90, notes: 'Huile 0W20' }
        ],
        upcoming: [
            { id: 's3', type: 'Changement plaquettes de frein', dueDate: '2026-07-15', dueMileage: 69000, urgency: 'high' },
            { id: 's4', type: 'Vidange', dueDate: '2026-10-20', dueMileage: 73000, urgency: 'low' }
        ]
    }
};

export function getMaintenanceSchedule(vehicleId) {
    return maintenanceSchedule[vehicleId] || { history: [], upcoming: [] };
}

export const serviceCostCatalog = {
    'Vidange': 75,
    'Changement plaquettes de frein': 150,
    'Révision complète': 280,
    'Changement de pneus': 400,
    'Contrôle technique': 80,
    'Changement de batterie': 150,
    'Remplacement courroie de distribution': 350,
    'Diagnostic électronique': 60,
    'Autre': 0
};
export const allNotifications = [
    { id: 'n1', vehicleId: 'v4', vehicleName: 'Peugeot 3008', severity: 'critical', message: 'Code défaut détecté : pression pneu avant gauche anormale', date: '2026-07-04', acknowledged: false },
    { id: 'n2', vehicleId: 'v2', vehicleName: 'BMW X3', severity: 'warning', message: 'Maintenance recommandée : vidange à prévoir sous 500km', date: '2026-07-03', acknowledged: false },
    { id: 'n3', vehicleId: 'v1', vehicleName: 'Toyota Corolla', severity: 'info', message: 'Analyse capteurs terminée, aucune anomalie', date: '2026-07-01', acknowledged: false },
    { id: 'n4', vehicleId: 'v2', vehicleName: 'BMW X3', severity: 'critical', message: "Ratés d'allumage multi-cylindres détectés (P0300)", date: '2026-07-02', acknowledged: false },
    { id: 'n5', vehicleId: 'v1', vehicleName: 'Toyota Corolla', severity: 'warning', message: 'Thermostat de refroidissement à vérifier (P0128)', date: '2026-06-28', acknowledged: true },
    { id: 'n6', vehicleId: 'v3', vehicleName: 'Renault Clio', severity: 'info', message: 'Nouveau véhicule ajouté avec succès', date: '2026-06-20', acknowledged: true }
];

export function getAllMaintenanceHistory() {
    return Object.entries(maintenanceSchedule).flatMap(([vehicleId, schedule]) => {
        const vehicle = vehicles.find(v => v.id === vehicleId);
        return schedule.history.map(entry => ({
            ...entry,
            vehicleId,
            vehicleName: vehicle ? `${vehicle.make} ${vehicle.model}` : 'Véhicule inconnu'
        }));
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getAllUpcomingMaintenance() {
    return Object.entries(maintenanceSchedule).flatMap(([vehicleId, schedule]) => {
        const vehicle = vehicles.find(v => v.id === vehicleId);
        return schedule.upcoming.map(entry => ({
            ...entry,
            vehicleId,
            vehicleName: vehicle ? `${vehicle.make} ${vehicle.model}` : 'Véhicule inconnu'
        }));
    }).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}

export function getGlobalRiskOverview() {
    return Object.entries(predictions).map(([vehicleId, data]) => {
        const vehicle = vehicles.find(v => v.id === vehicleId);
        return {
            vehicleId,
            vehicleName: vehicle ? `${vehicle.make} ${vehicle.model}` : 'Véhicule inconnu',
            globalRisk: data.globalRisk
        };
    }).sort((a, b) => b.globalRisk - a.globalRisk);
}

export function getAllRecommendations() {
    return Object.entries(predictions).flatMap(([vehicleId, data]) => {
        const vehicle = vehicles.find(v => v.id === vehicleId);
        return data.recommendations.map(rec => ({
            ...rec,
            vehicleId,
            vehicleName: vehicle ? `${vehicle.make} ${vehicle.model}` : 'Véhicule inconnu'
        }));
    }).sort((a, b) => {
        const order = { high: 0, medium: 1, low: 2 };
        return order[a.urgency] - order[b.urgency];
    });
}