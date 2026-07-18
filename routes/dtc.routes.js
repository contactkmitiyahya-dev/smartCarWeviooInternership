const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');
const { getDtcs, createDtc } = require('../controllers/dtc.controller');

router.use(requireAuth);

router.get('/vehicles/:vehicleId/dtc', getDtcs);
router.post('/vehicles/:vehicleId/dtc', createDtc);

module.exports = router;