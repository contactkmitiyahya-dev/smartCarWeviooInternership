const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const pool = require('../db/pool');

async function findOrCreateOAuthUser({ provider, providerId, email, name, avatarUrl }) {
    let result = await pool.query(
        'SELECT id, email, name, role, language FROM users WHERE oauth_provider = $1 AND oauth_id = $2',
        [provider, providerId]
    );
    if (result.rows.length > 0) return result.rows[0];

    result = await pool.query('SELECT id, email, name, role, language FROM users WHERE email = $1', [email]);
    if (result.rows.length > 0) {
        await pool.query(
            'UPDATE users SET oauth_provider = $1, oauth_id = $2, avatar_url = COALESCE(avatar_url, $3) WHERE id = $4',
            [provider, providerId, avatarUrl, result.rows[0].id]
        );
        return result.rows[0];
    }

    const created = await pool.query(
        `INSERT INTO users (email, name, avatar_url, oauth_provider, oauth_id)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, email, name, role, language`,
        [email, name, avatarUrl, provider, providerId]
    );
    return created.rows[0];
}

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await findOrCreateOAuthUser({
            provider: 'google',
            providerId: profile.id,
            email: profile.emails?.[0]?.value,
            name: profile.displayName,
            avatarUrl: profile.photos?.[0]?.value
        });
        done(null, user);
    } catch (err) {
        done(err);
    }
}));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
    scope: ['user:email']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails?.[0]?.value || `${profile.username}@users.noreply.github.com`;
        const user = await findOrCreateOAuthUser({
            provider: 'github',
            providerId: profile.id,
            email,
            name: profile.displayName || profile.username,
            avatarUrl: profile.photos?.[0]?.value
        });
        done(null, user);
    } catch (err) {
        done(err);
    }
}));

module.exports = passport;