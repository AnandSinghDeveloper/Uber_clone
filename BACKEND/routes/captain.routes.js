const captainController = require('../controllers/captain.controller')
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authmiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min :3}).withMessage('vehicle color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('vehicle plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('vehicle capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['Car','Motorcycle','Auto']).withMessage('Invaild vehicle type ')

], captainController.registerCaptain);


router.post('/login',[
   body('email').isEmail().withMessage('Invalid email'),
   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],captainController.loginCaptain);

router.get('/profile',authmiddleware.authCaptain,captainController.getCaptainProfile);

router.get('/logout',authmiddleware.authCaptain,captainController.logoutCaptain)

module.exports = router ;