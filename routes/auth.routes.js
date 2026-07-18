const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');
const { register, login, refresh, logout, getMe, forgotPassword, resetPassword } = require('../controllers/auth.controller');

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/me', requireAuth, getMe);

module.exports = router;