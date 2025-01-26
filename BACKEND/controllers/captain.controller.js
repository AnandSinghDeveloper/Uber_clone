const CaptainModel = require('../Models/captain.modals');
const CaptainService =require('../services/captain.service');
const {validationResult}= require('express-validator');
const BlacklistTokenModel = require('../Models/BlacklistToken.model')


module.exports.registerCaptain = async (req,res,next)=>{
  console.log("Request Body:", req.body); 
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation Errors:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }


  const { fullname,  email, password ,vehicle } = req.body;

  
  const iscaptainExit = await CaptainModel.findOne({ email });
  if(iscaptainExit){
    res.status(501).json({message : 'This email ia already exit'});
  }
  
   const hashedPassword = await CaptainModel.hashPassword(password);

 
   const Captain = await CaptainService.createCaptain({
     firstname:fullname.firstname,
     lastname : fullname.lastname,
     email,
     password : hashedPassword,
     color : vehicle.color,
     plate : vehicle.plate,
     capacity: vehicle.capacity,
     vehicleType : vehicle.vehicleType

   });


 
   const token = Captain.generateToken();
   res.status(201).json({ token,Captain});
};

module.exports.loginCaptain = async (req,res,next)=>{
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
    const captain = await CaptainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a token for the user
    const token = captain.generateToken();

    res.cookie('token',token);

    res.status(200).json({ token, captain });
} catch (error) {
    console.error("Error in loginUser:", error.message);
    res.status(500).json({ message: "Internal server error" });
}
};
module.exports.getCaptainProfile = async (req, res, next) => {
  const { captain } = req;
  res.status(200).json(captain);
};

module.exports.logoutCaptain = async (req,res,next)=>{
  res.clearCookie('token');
  const token = req.cookies.token || req.headers.authorization.split(' ')[1];

  await BlacklistTokenModel.create({token});
   
  res.status(201).json({message : 'Logged out'});
}