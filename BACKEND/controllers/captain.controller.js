const CaptainModel = require('../Models/captain.modals');
const CaptainService =require('../services/captain.service');
const {validationResult}= require('express-validator');


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
}