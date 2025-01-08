const { FaMotorcycle } = require('react-icons/fa');
const ridemodel = require('../Models/ride.models');
const mapService = require('./maps.service');


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
    Auto : baseFare.auto +((distanceTime.distance.value/1000)*perkmRate.auto)+((distanceTime.duration.value/60)*perMintesRate.auto),
    Car : baseFare.car +((distanceTime.distance.value/1000)*perkmRate.car)+((distanceTime.duration.value/60)*perMintesRate.car),
    Motorcycle : baseFare.motorcycle +((distanceTime.distance.value/1000)*perkmRate.motorcycle)+((distanceTime.duration.value/60)*perMintesRate.motorcycle),
  }

  return fare ;

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
         fare : fare[vehicleType]
     })

     return ride ;
}