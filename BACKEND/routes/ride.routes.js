const express = require('express');
const router = express.Router();
const { body }= require('express-validator');


router.post('/create',
  body('userID').isString().isLength({min: 24,max:24}).withMessage('Invaild user ID'),
  body('pickUP').isString().isLength({min:3}),withMessage('Invaild pickup address'),
  body('destination').isString().isLength({min:3}),withMessage('Invaild destination address'),
   
  
)




module.exports =router ;