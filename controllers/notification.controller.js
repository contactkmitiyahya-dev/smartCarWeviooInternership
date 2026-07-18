const pool = require('../db/pool');

async function getNotifications(req, res) {
    try {
        const result = await pool.query(
            `SELECT n.id, n.type, n.title, n.message, n.is_read, n.created_at,
                    v.id AS vehicle_id, v.make, v.model
             FROM notifications n
             LEFT JOIN vehicles v ON v.id = n.vehicle_id
             WHERE n.user_id = $1
             ORDER BY n.is_read ASC, n.created_at DESC`,
            [req.user.id]
        );

        return res.json({ notifications: result.rows });
    } catch (err) {
        console.error('Erreur getNotifications:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

async function markAsRead(req, res) {
    try {
        const { id } = req.params;

        const result = await pool.query(
            `UPDATE notifications
             SET is_read = true
             WHERE id = $1 AND user_id = $2
             RETURNING id`,
            [id, req.user.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Notification introuvable.' });
        }

        return res.json({ message: 'Notification marquée comme lue.' });
    } catch (err) {
        console.error('Erreur markAsRead:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

async function createNotification(req, res) {
    // Usage interne : appelé par le système (détection d'anomalie, rappel de maintenance),
    // pas directement par le frontend utilisateur. Utile pour tester manuellement en attendant l'IA.
    try {
        const { vehicle_id, type, title, message } = req.body;

        if (!type || !title || !message) {
            return res.status(400).json({ error: 'Type, titre et message sont requis.' });
        }

        const result = await pool.query(
            `INSERT INTO notifications (user_id, vehicle_id, type, title, message)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *`,
            [req.user.id, vehicle_id || null, type, title, message]
        );

        return res.status(201).json({
            message: 'Notification créée.',
            notification: result.rows[0]
        });
    } catch (err) {
        console.error('Erreur createNotification:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

module.exports = { getNotifications, markAsRead, createNotification };