const user= require('../Models/user.modals');
const userService = require('../services/user.service');
const {vaildationResult}= require('express-validator');



module.exports.registerUser = async (req,res,next)=>{
   const errors = vaildationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({errors : errors.array()})
   };


   console.log(req.body);
   

   const {firstname,lastname,email,password } = req.body;
   const hashedPassword = await userModel.hashPassword(password);

   const user = await userService.createUser({
    firstname,
    lastname,
    email,
    password:hashedPassword
   });
 
    const token = user.generateToken();
    res.status(201).json({token,user});

}
