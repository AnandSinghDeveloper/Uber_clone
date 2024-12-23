const userModel = require('../Models/user.modals');
// const user= require('../Models/user.modals');
const userService = require('../services/user.service');
const {validationResult}= require('express-validator');
const BlacklistTokenModel = require('../Models/BlacklistToken.model');



module.exports.registerUser = async (req, res, next) => {
    console.log("Request Body:", req.body); // Debug request body
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation Errors:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    // console.log(req.body);
    
  
    const { fullname,  email, password } = req.body;
     

    const isuserExit = await userModel.findOne({ email });

    if(isuserExit){
      res.status(501).json({message : 'This email ia already exit'});
    }

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

module.exports.loginUser = async (req, res, next) => {
    try {
        console.log("Request Body:", req.body); // Debugging

        // Validate request data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log("Validation Errors:", errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        // Find the user by email
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare passwords
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate a token for the user
        const token = user.generateToken();

        res.cookie('token',token);

        res.status(200).json({ token, user });
    } catch (error) {
        console.error("Error in loginUser:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
  
module.exports.getUserProfile = async (req,res,next)=>{
   return res.status(200).json(req.user)
}

module.exports.logoutUser = async (req ,res,next )=>{
  res.clearCookie('token');
  const token = req.cookies.token || req.headers.authorization.split(' ')[1];

  await BlacklistTokenModel.create({token});
   
  res.status(201).json({message : 'Logged out'});
};