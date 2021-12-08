const router = require('express').Router();
const AuthController = require('../controllers/authController');
const authRequired = require('./../middlewares/authRequiredMiddleware');

/** Login Route */
router.post('/auth/login', AuthController.login)

/** Renovate Token Route */
router.post('/auth/renovate-token', authRequired, AuthController.renovateToken)

/** User Logged Route */
router.get('/auth/me', authRequired, AuthController.me)

module.exports = router;