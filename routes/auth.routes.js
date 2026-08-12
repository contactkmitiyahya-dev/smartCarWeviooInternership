const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');
const { register, login, refresh, logout, getMe, forgotPassword, resetPassword, oauthCallback, updateMe, changePassword } = require('../controllers/auth.controller');
const passport = require('../config/passport.js');

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/me', requireAuth, getMe);
router.put('/me', requireAuth, updateMe);
router.put('/me/change-password', requireAuth, changePassword);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));
router.get('/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: '/auth/login' }),
    oauthCallback
);

router.get('/github', passport.authenticate('github', { scope: ['user:email'], session: false }));
router.get('/github/callback',
    passport.authenticate('github', { session: false, failureRedirect: '/auth/login' }),
    oauthCallback
);

module.exports = router;