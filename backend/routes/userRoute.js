const userController = require('../Controller/UserController')

const express = require('express');
const verifyUser = require('../middleware/verifyUser');

const router = express.Router();


router.get('/user',userController.getUser);
router.post('/signup',userController.RegisterUser);
router.post('/login',userController.login);
router.post('/forgot-password',userController.forgetPassword);
router.post('/reset-password/:token',userController.resetPassword);
router.get('/verify', verifyUser, userController.verify);
router.get('/logout',userController.logout);

module.exports = router  