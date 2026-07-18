const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');
const {
    getAllVehicles,
    getVehicleById,
    createVehicle,
    updateVehicle,
    deleteVehicle,
    getVehicleHealth
} = require('../controllers/vehicles.controller');

router.use(requireAuth);

router.get('/', getAllVehicles);
router.get('/:id', getVehicleById);
router.post('/', createVehicle);
router.patch('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);
router.get('/:id/health', getVehicleHealth);

module.exports = router;