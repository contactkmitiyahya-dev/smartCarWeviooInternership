const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');
const upload = require('../middleware/upload');
const { uploadSensorFile, getUploadHistory, getSensorData } = require('../controllers/uploads.controller');

router.use(requireAuth);

router.post('/vehicles/:vehicleId/upload', upload.single('file'), uploadSensorFile);
router.get('/vehicles/:vehicleId/uploads', getUploadHistory);
router.get('/vehicles/:vehicleId/sensor-data', getSensorData);

module.exports = router;