const userModel = require('../Models/user.modals');
// const user= require('../Models/user.modals');
const userService = require('../services/user.service');
const {validationResult}= require('express-validator');



module.exports.registerUser = async (req, res, next) => {
    console.log("Request Body:", req.body); // Debug request body
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation Errors:", errors.array()); // Debug validation errors
      return res.status(400).json({ errors: errors.array() });
    }

    // console.log(req.body);
    
  
    const { fullname,  email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);
  
    const user = await userService.createUser({
      firstname:fullname.firstname,
      lastname : fullname.lastname,
      email,
      password: hashedPassword
    });
  
    const token = user.generateToken();
    res.status(201).json({ token, user });
  };
  