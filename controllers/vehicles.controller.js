const pool = require('../db/pool');

async function getAllVehicles(req, res) {
    try {
        const result = await pool.query(
            `SELECT id, make, model, year, vin, plate_number, current_mileage_km,
                    photo_url, health_score, created_at
             FROM vehicles
             WHERE user_id = $1 AND is_deleted = false
             ORDER BY created_at DESC`,
            [req.user.id]
        );
        return res.json({ vehicles: result.rows });
    } catch (err) {
        console.error('Erreur getAllVehicles:', err);
        return res.status(500).json({ error: 'Erreur serveur lors de la récupération des véhicules.' });
    }
}

async function getVehicleById(req, res) {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `SELECT id, make, model, year, vin, plate_number, current_mileage_km,
                    photo_url, health_score, created_at, updated_at
             FROM vehicles
             WHERE id = $1 AND user_id = $2 AND is_deleted = false`,
            [id, req.user.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        return res.json({ vehicle: result.rows[0] });
    } catch (err) {
        console.error('Erreur getVehicleById:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

async function createVehicle(req, res) {
    try {
        const { make, model, year, vin, plate_number, current_mileage_km } = req.body;

        if (!make || !model || !year || !current_mileage_km) {
            return res.status(400).json({ error: 'Marque, modèle, année et kilométrage sont requis.' });
        }

        if (year < 1990 || year > 2030) {
            return res.status(400).json({ error: 'Année invalide (doit être entre 1990 et 2030).' });
        }

        const result = await pool.query(
            `INSERT INTO vehicles (user_id, make, model, year, vin, plate_number, current_mileage_km)
             VALUES ($1, $2, $3, $4, $5, $6, $7)
             RETURNING id, make, model, year, vin, plate_number, current_mileage_km, created_at`,
            [req.user.id, make, model, year, vin || null, plate_number || null, current_mileage_km]
        );

        return res.status(201).json({
            message: 'Véhicule ajouté avec succès.',
            vehicle: result.rows[0]
        });
    } catch (err) {
        if (err.code === '23505') {
            return res.status(409).json({ error: 'Ce VIN est déjà enregistré.' });
        }
        console.error('Erreur createVehicle:', err);
        return res.status(500).json({ error: 'Erreur serveur lors de l\'ajout du véhicule.' });
    }
}

async function updateVehicle(req, res) {
    try {
        const { id } = req.params;
        const { make, model, year, vin, plate_number, current_mileage_km } = req.body;

        const existing = await pool.query(
            'SELECT id FROM vehicles WHERE id = $1 AND user_id = $2 AND is_deleted = false',
            [id, req.user.id]
        );

        if (existing.rows.length === 0) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        const result = await pool.query(
            `UPDATE vehicles
             SET make = $1, model = $2, year = $3, vin = $4, plate_number = $5,
                 current_mileage_km = $6, updated_at = NOW()
             WHERE id = $7
             RETURNING id, make, model, year, vin, plate_number, current_mileage_km, updated_at`,
            [make, model, year, vin || null, plate_number || null, current_mileage_km, id]
        );

        return res.json({
            message: 'Véhicule mis à jour avec succès.',
            vehicle: result.rows[0]
        });
    } catch (err) {
        console.error('Erreur updateVehicle:', err);
        return res.status(500).json({ error: 'Erreur serveur lors de la mise à jour.' });
    }
}

async function deleteVehicle(req, res) {
    try {
        const { id } = req.params;

        const result = await pool.query(
            `UPDATE vehicles
             SET is_deleted = true, deleted_at = NOW()
             WHERE id = $1 AND user_id = $2 AND is_deleted = false
             RETURNING id`,
            [id, req.user.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        return res.json({ message: 'Véhicule supprimé (récupérable pendant 30 jours).' });
    } catch (err) {
        console.error('Erreur deleteVehicle:', err);
        return res.status(500).json({ error: 'Erreur serveur lors de la suppression.' });
    }
}

const COMPONENT_BUCKETS = {
    engine: 'Moteur',
    ignition: 'Moteur',
    fuel: 'Moteur',
    emissions: 'Moteur',
    brakes: 'Freins',
    abs: 'Freins',
    electrical: 'Batterie',
    battery: 'Batterie',
    charging: 'Batterie',
    cooling: 'Refroidissement',
    thermostat: 'Refroidissement'
};

const DEFAULT_BUCKET = 'Moteur';

function getBucketName(componentCategory) {
    const key = (componentCategory || '').toLowerCase();
    return COMPONENT_BUCKETS[key] || DEFAULT_BUCKET;
}

const COMPONENT_WEIGHTS = {
    'Moteur':          { mileage: 1.0, age: 0.5 },
    'Freins':          { mileage: 1.2, age: 0.3 },
    'Batterie':        { mileage: 0.4, age: 1.2 },
    'Refroidissement': { mileage: 0.6, age: 1.0 }
};

function computeBaseWear(mileageKm, vehicleYear) {
    const currentYear = new Date().getFullYear();
    const ageYears = Math.max(0, currentYear - vehicleYear);

    // Pénalité kilométrage : plafonnée à 40 points (atteinte vers 200 000 km)
    const mileagePenaltyUnit = Math.min(40, mileageKm / 5000);
    // Pénalité âge : plafonnée à 25 points (atteinte vers 17 ans)
    const agePenaltyUnit = Math.min(25, ageYears * 1.5);

    const base = {};
    for (const [component, weights] of Object.entries(COMPONENT_WEIGHTS)) {
        const wear = mileagePenaltyUnit * weights.mileage + agePenaltyUnit * weights.age;
        base[component] = Math.max(5, Math.round(100 - wear));
    }
    return base;
}

async function getVehicleHealth(req, res) {
    try {
        const { id } = req.params;

        const vehicleResult = await pool.query(
            'SELECT id, year, current_mileage_km FROM vehicles WHERE id = $1 AND user_id = $2 AND is_deleted = false',
            [id, req.user.id]
        );

        if (vehicleResult.rows.length === 0) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        const { year, current_mileage_km } = vehicleResult.rows[0];

        const openDtcs = await pool.query(
            `SELECT component_category, severity FROM dtc_entries
             WHERE vehicle_id = $1 AND status != 'cleared'`,
            [id]
        );

        const lastMaintenance = await pool.query(
            `SELECT service_type, mileage_at_service_km FROM maintenance_records
             WHERE vehicle_id = $1 ORDER BY service_date DESC LIMIT 5`,
            [id]
        );

        const severityPenalty = { low: 5, medium: 15, high: 30 };

        // Base calculée à partir de l'âge et du kilométrage, PAS 100 fixe
        const buckets = computeBaseWear(current_mileage_km, year);

        openDtcs.rows.forEach((dtc) => {
            const bucketName = getBucketName(dtc.component_category);
            const penalty = severityPenalty[dtc.severity] || 10;
            buckets[bucketName] = Math.max(0, buckets[bucketName] - penalty);
        });

        const componentHealth = Object.entries(buckets).map(([name, score]) => ({
            name,
            score,
            risk: score >= 70 ? 'low' : score >= 40 ? 'medium' : 'high'
        }));

        const globalScore = Math.round(
            Object.values(buckets).reduce((sum, s) => sum + s, 0) / Object.values(buckets).length
        );

        await pool.query('UPDATE vehicles SET health_score = $1 WHERE id = $2', [globalScore, id]);

        return res.json({
            healthScore: globalScore,
            componentHealth,
            openIssuesCount: openDtcs.rows.length,
            recentMaintenance: lastMaintenance.rows,
            note: 'Score calculé par heuristique basée sur l\'âge du véhicule, le kilométrage et les DTC ouverts. Le modèle IA prédictif sera branché ultérieurement (voir section 5.6 de la spec).'
        });
    } catch (err) {
        console.error('Erreur getVehicleHealth:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}
module.exports = { getAllVehicles, getVehicleById, createVehicle, updateVehicle, deleteVehicle, getVehicleHealth };