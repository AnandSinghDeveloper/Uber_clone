const express = require('express');
const router = express.Router();
const { body }= require('express-validator');
const rideContoller = require('../controllers/ride.controller')
const authmiddleware = require('../middlewares/auth.middleware');


router.post('/create',
  authmiddleware.authUser,
  body('pickUP').isString().isLength({ min: 3}).withMessage('Invaild pickup address'),
  body('destination').isString().isLength({min:3}).withMessage('Invaild destination address'),
  body('vehicleType').isString().isIn(['Car','Motorcycle','Auto']).withMessage('Invaild vehicle type '),
  rideContoller.CreateRide 
   
  
)




module.exports =router ;