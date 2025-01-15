const express = require('express');
const router = express.Router();
const { body,query }= require('express-validator');
const rideContoller = require('../controllers/ride.controller')
const authmiddleware = require('../middlewares/auth.middleware');


router.post('/create',
  authmiddleware.authUser,
  body('pickUP').isString().isLength({ min: 3}).withMessage('Invaild pickup address'),
  body('destination').isString().isLength({min:3}).withMessage('Invaild destination address'),
  body('vehicleType').isString().isIn(['Car','Motorcycle','Auto']).withMessage('Invaild vehicle type '),
  rideContoller.CreateRide 
   
  
)

router.get('/get-fare',
  authmiddleware.authUser,
  query('pickUP').isString().isLength({min: 3}).withMessage('Invalid pickup address'),
  query('destination').isString().isLength({min: 3}).withMessage('Invaild destination address'),
  rideContoller.getFare
)




module.exports =router ;