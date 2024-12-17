const express = require('express');
const router= express.Router();
const {body}= require('express-validator');
const userController = require('../controllers/user.controllers');

router.post('regsiter',[
       body('email').isEmail().withMessage('Invaild email'),
       body('fullname.firstname').isLength({min:3}).withMessage('first name at least 3 characters long'),
       body('password').isLength({min : 6}).withMessage('Password must be at least 6 characters long ')
],
   userController.registerUser
)






module.exports = router ;
