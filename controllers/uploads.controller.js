const fs = require('fs');
const { parse } = require('csv-parse/sync');
const pool = require('../db/pool');

async function verifyVehicleOwnership(vehicleId, userId) {
    const result = await pool.query(
        'SELECT id FROM vehicles WHERE id = $1 AND user_id = $2 AND is_deleted = false',
        [vehicleId, userId]
    );
    return result.rows.length > 0;
}

const ALLOWED_COLUMNS = [
    'timestamp', 'engine_rpm', 'vehicle_speed_kmh', 'coolant_temp_c',
    'intake_air_temp_c', 'maf_airflow_gs', 'throttle_position_pct',
    'fuel_level_pct', 'control_module_voltage_v', 'engine_load_pct',
    'short_fuel_trim_pct', 'long_fuel_trim_pct', 'ambient_temp_c', 'barometric_pressure_kpa'
];

async function uploadSensorFile(req, res) {
    const { vehicleId } = req.params;

    try {
        const owns = await verifyVehicleOwnership(vehicleId, req.user.id);
        if (!owns) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        if (!req.file) {
            return res.status(400).json({ error: 'Aucun fichier reçu.' });
        }

        const uploadResult = await pool.query(
            `INSERT INTO uploads (vehicle_id, filename, status)
             VALUES ($1, $2, 'processing')
             RETURNING id`,
            [vehicleId, req.file.originalname]
        );
        const uploadId = uploadResult.rows[0].id;

        const fileContent = fs.readFileSync(req.file.path, 'utf8');
        let rows;

        try {
            if (req.file.originalname.endsWith('.json')) {
                rows = JSON.parse(fileContent);
                if (!Array.isArray(rows)) rows = [rows];
            } else {
                rows = parse(fileContent, { columns: true, skip_empty_lines: true, trim: true });
            }
        } catch (parseErr) {
            await pool.query(
                `UPDATE uploads SET status = 'failed', errors = $1 WHERE id = $2`,
                [JSON.stringify({ message: 'Fichier illisible ou mal formaté.' }), uploadId]
            );
            fs.unlinkSync(req.file.path);
            return res.status(400).json({ error: 'Le fichier est illisible ou mal formaté.' });
        }

        let insertedCount = 0;
        const errors = [];

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];

            if (!row.timestamp) {
                errors.push(`Ligne ${i + 1} : timestamp manquant, ignorée.`);
                continue;
            }

            const values = ALLOWED_COLUMNS.map((col) =>
                col === 'timestamp' ? row.timestamp : (row[col] !== undefined && row[col] !== '' ? Number(row[col]) : null)
            );

            try {
                await pool.query(
                    `INSERT INTO sensor_readings (vehicle_id, ${ALLOWED_COLUMNS.join(', ')}, upload_id)
                     VALUES ($1, ${ALLOWED_COLUMNS.map((_, idx) => `$${idx + 2}`).join(', ')}, $${ALLOWED_COLUMNS.length + 2})`,
                    [vehicleId, ...values, uploadId]
                );
                insertedCount++;
            } catch (rowErr) {
                errors.push(`Ligne ${i + 1} : ${rowErr.message}`);
            }
        }

        const finalStatus = errors.length === 0 ? 'success' : (insertedCount > 0 ? 'partial' : 'failed');

        await pool.query(
            `UPDATE uploads SET status = $1, row_count = $2, errors = $3 WHERE id = $4`,
            [finalStatus, insertedCount, errors.length > 0 ? JSON.stringify(errors) : null, uploadId]
        );

        fs.unlinkSync(req.file.path); // nettoyage du fichier temporaire

        return res.status(201).json({
            message: `Import terminé : ${insertedCount} ligne(s) importée(s).`,
            uploadId,
            status: finalStatus,
            rowCount: insertedCount,
            errors: errors.length > 0 ? errors : undefined
        });
    } catch (err) {
        console.error('Erreur uploadSensorFile:', err);
        if (req.file?.path && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
        return res.status(500).json({ error: 'Erreur serveur lors de l\'import.' });
    }
}

async function getUploadHistory(req, res) {
    try {
        const { vehicleId } = req.params;

        const owns = await verifyVehicleOwnership(vehicleId, req.user.id);
        if (!owns) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        const result = await pool.query(
            `SELECT id, filename, status, row_count, errors, created_at
             FROM uploads
             WHERE vehicle_id = $1
             ORDER BY created_at DESC`,
            [vehicleId]
        );

        return res.json({ uploads: result.rows });
    } catch (err) {
        console.error('Erreur getUploadHistory:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

async function getSensorData(req, res) {
    try {
        const { vehicleId } = req.params;
        const { limit = 100, offset = 0 } = req.query;

        const owns = await verifyVehicleOwnership(vehicleId, req.user.id);
        if (!owns) {
            return res.status(404).json({ error: 'Véhicule introuvable.' });
        }

        const result = await pool.query(
            `SELECT * FROM sensor_readings
             WHERE vehicle_id = $1
             ORDER BY timestamp DESC
             LIMIT $2 OFFSET $3`,
            [vehicleId, limit, offset]
        );

        return res.json({ readings: result.rows });
    } catch (err) {
        console.error('Erreur getSensorData:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

module.exports = { uploadSensorFile, getUploadHistory, getSensorData };