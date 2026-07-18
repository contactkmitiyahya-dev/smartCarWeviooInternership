const pool = require('./pool');

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Échec de connexion :', err.message);
    } else {
        console.log('Connexion réussie ! Heure serveur PostgreSQL :', res.rows[0].now);
    }
    pool.end();
});