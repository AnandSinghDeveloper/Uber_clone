const rideService = require('../services/ride.service');
const {validationResult}= require('express-validator');

module.exports.CreateRide = async (req , res ,next)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()})
  }

  const {userID,pickUP,destination,vehicleType}=req.body ;

  try {

    const ride = await rideService.CreateRide({user : req.user._id , pickUP , destination , vehicleType})

    return res.status(200).json(ride);
    
    
  } catch (error) {
    res.status(500).json({ message : error.message})
    
  }

}

module.exports.getFare = async (req , res ,next)=>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()})
  }
  
  const { pickUP,destination } = req.query ;

  try {
   const fare = await rideService.getFare(pickUP,destination);

   return res.status(200).json(fare) ;
    
    
  } catch (error) {
    console.log(error)
   return res.status(500).json({message : 'internal server error'})
  }

}