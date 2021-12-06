const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController')

router.get('/auth/login', AuthController.login)

module.exports = router;