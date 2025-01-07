const mapService = require('../services/maps.service');
const {validationResult}= require('express-validator');

module.exports.getCoordinate = async(req , res , next)=>{
const {address} = req.query ;
const errors = validationResult(req)
if(!errors.isEmpty()){
  return res.status(400).json
}

try {
     
  const coodinates = await mapService.getAddressCoordinate(address)
  res.status(200).json(coodinates);
  
} catch (error) {
  res.status(404).json( {message : 'Coodinate not found'})
}

}