const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController')



//Rota para usuario
router.post('/users', UserController.createUser)
router.get('/users', UserController.getAllUsers)

//Rota para login
router.post('/login', LoginController.handleLogin)

module.exports = router;
