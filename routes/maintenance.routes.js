const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');
const {
    getMaintenanceForVehicle,
    getAllMaintenanceForUser,
    createMaintenanceRecord,
    deleteMaintenanceRecord
} = require('../controllers/maintenance.controller');

router.use(requireAuth);

router.get('/', getAllMaintenanceForUser);
router.get('/vehicles/:vehicleId', getMaintenanceForVehicle);
router.post('/vehicles/:vehicleId', createMaintenanceRecord);
router.delete('/vehicles/:vehicleId/:recordId', deleteMaintenanceRecord);

module.exports = router;