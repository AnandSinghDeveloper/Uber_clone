const { FaMotorcycle } = require('react-icons/fa');
const ridemodel = require('../Models/ride.models');
const mapService = require('./maps.service');
const crypto = require('crypto');


async function getFare(pickUP,destination) {
  if(!pickUP||!destination){
    throw new Error('pickup and destination are require');
  }

 const distanceTime = await mapService.getDistanceTime(pickUP,destination);

  const baseFare = {
    auto : 30 ,
    car : 50 ,
    motorcycle : 20
  }

  const perkmRate = {
    auto : 10,
    car : 15,
    motorcycle : 8
  }

  const perMintesRate = {
    auto : 2,
    car : 3 ,
    motorcycle : 1.5
  }

  const fare ={
    Auto : Math.round( baseFare.auto +((distanceTime.distance.value/1000)*perkmRate.auto)+((distanceTime.duration.value/60)*perMintesRate.auto)),
    Car : Math.round(baseFare.car +((distanceTime.distance.value/1000)*perkmRate.car)+((distanceTime.duration.value/60)*perMintesRate.car)),
    Motorcycle : Math.round( baseFare.motorcycle +((distanceTime.distance.value/1000)*perkmRate.motorcycle)+((distanceTime.duration.value/60)*perMintesRate.motorcycle)),
  }

  return fare ;

}

module.exports.getFare = getFare;

function getOTP(num){
  function genrateOTP(num){
    const OTP = crypto.randomInt(Math.pow(10,num-1) , Math.pow(10,num)).toString();

    return OTP ;
  }
  return genrateOTP(num)
}

module.exports.CreateRide = async ({
  user , pickUP , destination , vehicleType
})=>{
      if(!user || !pickUP || !destination || !vehicleType){
        throw new Error('All feldis are require');
      }

     const fare = await getFare(pickUP , destination)

     const ride = ridemodel.create({
         user,
         pickUP,
         destination,
         OTP : getOTP(6),
         fare : fare[vehicleType]
     })

     return ride ;
}