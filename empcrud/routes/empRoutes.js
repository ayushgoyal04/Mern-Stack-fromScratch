const express = require('express');
const router = express.Router();
const empController = require('../controllers/empController');

// GET all employees
router.get('/emp', empController.getAllEmployees);

// POST create employee
router.post('/emp', empController.createEmployee);

// PUT update employee by ID
router.put('/emp/:id', empController.updateEmployee);

// DELETE employee by ID
router.delete('/emp/:id', empController.deleteEmployee);

module.exports = router;
