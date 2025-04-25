const axios = require('axios');
require('dotenv').config(); // Load API key from .env

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAP_API; 

    
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error(response.data.error_message || 'Unable to retrieve coordinates');
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
};

module.exports.getDistanceTime = async (origin , destination)=>{
  if(!origin||!destination){
    throw new Error('origin and destination are require')
  }

  const apiKey = process.env.GOOGLE_MAP_API ;

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`


    try {

      const response = await axios.get(url);
      if(response.data.status === 'OK'){

        return response.data.rows[ 0 ].elements[ 0 ];
      }else{
        throw new Error('Enable to fatch distance and time ')
      }
      
    } catch (error) {
      console.error(error)
      throw error
      
    }

};

module.exports.getAutoCompleteSuggestions = async (input)=>{
  if(!input){
    throw new Error('Address are reqiue')
  };
  
  const apiKey = process.env.GOOGLE_MAP_API ;
  const url= `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

 

  try {

    const response = await axios.get(url);
    if(response.data.status === 'OK'){

    return response.data.predictions ;
    }else{
      throw new Error('Enable to fatch suggestions')
    }
    
  } catch (error) {
    console.log(error)
    throw error
  }

};


