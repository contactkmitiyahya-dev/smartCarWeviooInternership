const pool = require('../db/pool');

async function verifyVehicleOwnership(vehicleId, userId) {
    const result = await pool.query(
        'SELECT id FROM vehicles WHERE id = $1 AND user_id = $2 AND is_deleted = false',
        [vehicleId, userId]
    );
    return result.rows.length > 0;
}

async function getDtcs(req, res) {
    try {
        const { vehicleId } = req.params;
        const { severity, status } = req.query;

        const owns = await verifyVehicleOwnership(vehicleId, req.user.id);
        if (!owns) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        let query = 'SELECT * FROM dtc_entries WHERE vehicle_id = $1';
        const params = [vehicleId];

        if (severity) {
            params.push(severity);
            query += ` AND severity = $${params.length}`;
        }
        if (status) {
            params.push(status);
            query += ` AND status = $${params.length}`;
        }
        query += ' ORDER BY timestamp DESC';

        const result = await pool.query(query, params);
        return res.json({ dtcs: result.rows });
    } catch (err) {
        console.error('Erreur getDtcs:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

async function createDtc(req, res) {
    try {
        const { vehicleId } = req.params;
        const { timestamp, dtc_code, description, severity, component_category, status, mil_active, freeze_frame } = req.body;

        const owns = await verifyVehicleOwnership(vehicleId, req.user.id);
        if (!owns) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        if (!timestamp || !dtc_code || !severity || !component_category || !status) {
            return res.status(400).json({ error: 'Champs requis manquants.' });
        }

        const result = await pool.query(
            `INSERT INTO dtc_entries
                (vehicle_id, timestamp, dtc_code, description, severity, component_category, status, mil_active, freeze_frame)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
             RETURNING *`,
            [vehicleId, timestamp, dtc_code, description || null, severity, component_category, status, mil_active || false, freeze_frame ? JSON.stringify(freeze_frame) : null]
        );

        return res.status(201).json({ message: 'Code défaut enregistré.', dtc: result.rows[0] });
    } catch (err) {
        console.error('Erreur createDtc:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

module.exports = { getDtcs, createDtc };