const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db/pool');

const SALT_ROUNDS = 10;

function generateAccessToken(user) {
    return jwt.sign(
        { userId: user.id, email: user.email, role: user.role },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: '15m' }
    );
}

function generateRefreshToken(user) {
    return jwt.sign(
        { userId: user.id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' }
    );
}

async function register(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Nom, email et mot de passe sont requis.' });
        }

        if (password.length < 8) {
            return res.status(400).json({ error: 'Le mot de passe doit contenir au moins 8 caractères.' });
        }

        const existing = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
        if (existing.rows.length > 0) {
            return res.status(409).json({ error: 'Un compte existe déjà avec cet email.' });
        }

        const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

        const result = await pool.query(
            `INSERT INTO users (email, password_hash, name)
             VALUES ($1, $2, $3)
             RETURNING id, email, name, role, language, created_at`,
            [email, passwordHash, name]
        );

        const user = result.rows[0];

        // Connexion automatique : génération des tokens comme pour login
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        const refreshTokenHash = await bcrypt.hash(refreshToken, SALT_ROUNDS);
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        await pool.query(
            `INSERT INTO refresh_tokens (user_id, token_hash, expires_at)
             VALUES ($1, $2, $3)`,
            [user.id, refreshTokenHash, expiresAt]
        );

        return res.status(201).json({
            message: 'Compte créé avec succès.',
            accessToken,
            refreshToken,
            user
        });
    } catch (err) {
        console.error('Erreur register:', err);
        return res.status(500).json({ error: 'Erreur serveur lors de la création du compte.' });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email et mot de passe sont requis.' });
        }

        const result = await pool.query(
            'SELECT id, email, password_hash, name, role, language FROM users WHERE email = $1',
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
        }

        const user = result.rows[0];
        const passwordMatches = await bcrypt.compare(password, user.password_hash);

        if (!passwordMatches) {
            return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
        }

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        const refreshTokenHash = await bcrypt.hash(refreshToken, SALT_ROUNDS);
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        await pool.query(
            `INSERT INTO refresh_tokens (user_id, token_hash, expires_at)
             VALUES ($1, $2, $3)`,
            [user.id, refreshTokenHash, expiresAt]
        );

        delete user.password_hash;

        return res.status(200).json({
            message: 'Connexion réussie.',
            accessToken,
            refreshToken,
            user
        });
    } catch (err) {
        console.error('Erreur login:', err);
        return res.status(500).json({ error: 'Erreur serveur lors de la connexion.' });
    }
}

async function refresh(req, res) {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(400).json({ error: 'Refresh token requis.' });
        }

        let payload;
        try {
            payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        } catch (err) {
            return res.status(401).json({ error: 'Refresh token invalide ou expiré.' });
        }

        const storedTokens = await pool.query(
            `SELECT id, token_hash FROM refresh_tokens
             WHERE user_id = $1 AND is_revoked = false AND expires_at > NOW()`,
            [payload.userId]
        );

        let matchedTokenId = null;
        for (const row of storedTokens.rows) {
            const matches = await bcrypt.compare(refreshToken, row.token_hash);
            if (matches) {
                matchedTokenId = row.id;
                break;
            }
        }

        if (!matchedTokenId) {
            return res.status(401).json({ error: 'Refresh token révoqué ou introuvable.' });
        }

        const userResult = await pool.query(
            'SELECT id, email, role FROM users WHERE id = $1',
            [payload.userId]
        );

        if (userResult.rows.length === 0) {
            return res.status(401).json({ error: 'Utilisateur introuvable.' });
        }

        const user = userResult.rows[0];
        const newAccessToken = generateAccessToken(user);

        return res.status(200).json({
            message: 'Token renouvelé.',
            accessToken: newAccessToken
        });
    } catch (err) {
        console.error('Erreur refresh:', err);
        return res.status(500).json({ error: 'Erreur serveur lors du renouvellement du token.' });
    }
}

async function logout(req, res) {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(400).json({ error: 'Refresh token requis.' });
        }

        let payload;
        try {
            payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        } catch (err) {
            // Token déjà invalide/expiré : la déconnexion est de toute façon "réussie" côté client
            return res.status(200).json({ message: 'Déconnexion effectuée.' });
        }

        // Révoque toutes les sessions actives de cet utilisateur (simple et sûr)
        await pool.query(
            `UPDATE refresh_tokens SET is_revoked = true WHERE user_id = $1 AND is_revoked = false`,
            [payload.userId]
        );

        return res.status(200).json({ message: 'Déconnexion effectuée.' });
    } catch (err) {
        console.error('Erreur logout:', err);
        return res.status(500).json({ error: 'Erreur serveur lors de la déconnexion.' });
    }
}

async function getMe(req, res) {
    try {
        const result = await pool.query(
            `SELECT id, email, name, avatar_url, role, language, notification_prefs, created_at
             FROM users WHERE id = $1`,
            [req.user.id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Utilisateur introuvable.' });
        }

        return res.json({ user: result.rows[0] });
    } catch (err) {
        console.error('Erreur getMe:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

function generateResetToken(user) {
    return jwt.sign(
        { userId: user.id, purpose: 'password_reset' },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: '30m' }
    );
}

async function forgotPassword(req, res) {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email requis.' });
        }

        const result = await pool.query('SELECT id, name FROM users WHERE email = $1', [email]);

        // Toujours la même réponse, que l'email existe ou non (évite de révéler quels emails sont enregistrés)
        if (result.rows.length === 0) {
            return res.status(200).json({ message: 'Si ce compte existe, un email a été envoyé.' });
        }

        const user = result.rows[0];
        const resetToken = generateResetToken(user);

        // Pas de service email configuré pour l'instant : on log le lien en console
        console.log(`[RESET PASSWORD] Lien pour ${email} : http://localhost:3000/auth/reset-password?token=${resetToken}`);

        return res.status(200).json({ message: 'Si ce compte existe, un email a été envoyé.' });
    } catch (err) {
        console.error('Erreur forgotPassword:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

async function resetPassword(req, res) {
    try {
        const { token, newPassword } = req.body;

        if (!token || !newPassword) {
            return res.status(400).json({ error: 'Token et nouveau mot de passe requis.' });
        }

        if (newPassword.length < 8) {
            return res.status(400).json({ error: 'Le mot de passe doit contenir au moins 8 caractères.' });
        }

        let payload;
        try {
            payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        } catch (err) {
            return res.status(401).json({ error: 'Lien de réinitialisation invalide ou expiré.' });
        }

        if (payload.purpose !== 'password_reset') {
            return res.status(401).json({ error: 'Token invalide pour cette action.' });
        }

        const newHash = await bcrypt.hash(newPassword, SALT_ROUNDS);

        await pool.query(
            'UPDATE users SET password_hash = $1, updated_at = NOW() WHERE id = $2',
            [newHash, payload.userId]
        );

        // Révoque toutes les sessions existantes par sécurité (mot de passe changé = déconnexion partout)
        await pool.query(
            'UPDATE refresh_tokens SET is_revoked = true WHERE user_id = $1',
            [payload.userId]
        );

        return res.status(200).json({ message: 'Mot de passe réinitialisé avec succès.' });
    } catch (err) {
        console.error('Erreur resetPassword:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
}

module.exports = { register, login, refresh, logout, getMe, forgotPassword, resetPassword };