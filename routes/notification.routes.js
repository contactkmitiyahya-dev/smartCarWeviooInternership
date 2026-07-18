const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');
const { getNotifications, markAsRead, createNotification } = require('../controllers/notification.controller');

router.use(requireAuth);

router.get('/', getNotifications);
router.post('/', createNotification);
router.patch('/:id/read', markAsRead);

module.exports = router;