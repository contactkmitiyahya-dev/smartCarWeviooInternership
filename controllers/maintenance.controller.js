const pool = require('../db/pool');

async function verifyVehicleOwnership(vehicleId, userId) {
    const result = await pool.query(
        'SELECT id FROM vehicles WHERE id = $1 AND user_id = $2 AND is_deleted = false',
        [vehicleId, userId]
    );
    return result.rows.length > 0;
}

async function getMaintenanceForVehicle(req, res) {
    try {
        const { vehicleId } = req.params;

        const owns = await verifyVehicleOwnership(vehicleId, req.user.id);
        if (!owns) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        const result = await pool.query(
            `SELECT id, service_date, service_type, mileage_at_service_km, cost,
                    parts_replaced, shop, notes, next_due_km, next_due_date
             FROM maintenance_records
             WHERE vehicle_id = $1
             ORDER BY service_date DESC`,
            [vehicleId]
        );

        return res.json({ records: result.rows });
    } catch (err) {
        console.error('Erreur getMaintenanceForVehicle:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

async function getAllMaintenanceForUser(req, res) {
    try {
        const result = await pool.query(
            `SELECT mr.id, mr.service_date, mr.service_type, mr.mileage_at_service_km,
       mr.cost, mr.notes, mr.next_due_date, mr.next_due_km,
       v.id AS vehicle_id, v.make, v.model
FROM maintenance_records mr
JOIN vehicles v ON v.id = mr.vehicle_id
WHERE v.user_id = $1 AND v.is_deleted = false
ORDER BY mr.service_date DESC`,
            [req.user.id]
        );

        return res.json({ records: result.rows });
    } catch (err) {
        console.error('Erreur getAllMaintenanceForUser:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

async function createMaintenanceRecord(req, res) {
    try {
        const { vehicleId } = req.params;
        const { service_date, service_type, mileage_at_service_km, cost, parts_replaced, shop, notes, next_due_km, next_due_date } = req.body;

        const owns = await verifyVehicleOwnership(vehicleId, req.user.id);
        if (!owns) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        if (!service_date || !service_type || !mileage_at_service_km) {
            return res.status(400).json({ error: 'Date, type et kilométrage sont requis.' });
        }

        const result = await pool.query(
            `INSERT INTO maintenance_records
                (vehicle_id, service_date, service_type, mileage_at_service_km, cost, parts_replaced, shop, notes, next_due_km, next_due_date)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
             RETURNING *`,
            [vehicleId, service_date, service_type, mileage_at_service_km, cost || null, parts_replaced || null, shop || null, notes || null, next_due_km || null, next_due_date || null]
        );

        return res.status(201).json({
            message: 'Entretien enregistré avec succès.',
            record: result.rows[0]
        });
    } catch (err) {
        console.error('Erreur createMaintenanceRecord:', err);
        return res.status(500).json({ error: 'Erreur serveur lors de l\'enregistrement.' });
    }
}

async function deleteMaintenanceRecord(req, res) {
    try {
        const { vehicleId, recordId } = req.params;

        const owns = await verifyVehicleOwnership(vehicleId, req.user.id);
        if (!owns) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        const result = await pool.query(
            'DELETE FROM maintenance_records WHERE id = $1 AND vehicle_id = $2 RETURNING id',
            [recordId, vehicleId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Entretien introuvable.' });
        }

        return res.json({ message: 'Entretien supprimé.' });
    } catch (err) {
        console.error('Erreur deleteMaintenanceRecord:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

module.exports = { getMaintenanceForVehicle, getAllMaintenanceForUser, createMaintenanceRecord, deleteMaintenanceRecord };