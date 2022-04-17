const express = require('express');
const router = express.Router();
const userController = require('../controllers/users-controller');

router.post('/register',userController.register);
router.post('/login', userController.login);
router.get('/user', userController.verifyToken, userController.getUser);
router.get('/refresh', userController.refreshToken, userController.verifyToken, userController.getUser)

module.exports = router;