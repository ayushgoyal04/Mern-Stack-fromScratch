
const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');

// GET all logs
router.get('/', logController.getAllLogs);

module.exports = router;
