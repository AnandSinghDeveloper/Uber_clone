const CaptainModel = require('../Models/captain.modals');


module.exports.createCaptain = async ({ firstname, lastname, email, password , color,plate,vehicleType,capacity }) => {
  if (!firstname || !email || !password || !color || !plate || !vehicleType || !capacity ) {
    throw new Error('All fields are required');
  }

  const captain = await CaptainModel.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password,
    vehicle :{
      color,
      plate,
      vehicleType,
      capacity
    }
  });

  return captain;
};
