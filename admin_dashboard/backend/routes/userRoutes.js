// for user-related endpoints (GET, POST, PUT, DELETE).

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// ----------- GET Endpoint -----------
router.get('/getusers', userController.getAllUsers);

// ----------- POST Endpoint -----------
router.post('/createuser', userController.createUser);

// ----------- PUT Endpoint -----------
router.put('/editeuser/:id', userController.editUser);

// ----------- DELETE Endpoint -----------
router.delete('/deleteuser/:id', userController.softDeleteUser);

module.exports = router;
