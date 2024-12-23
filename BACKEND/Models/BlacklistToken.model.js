
const mongoose = require('mongoose');


const BlacklistTokenSchema = mongoose.Schema({
  token :{
    type : String ,
    require : true,
    unique : true 
  },
  createdAt :{
     type : Date ,
     default : Date.now,
     expires : 86400 
  }
});
     
   const  BlacklistToken = mongoose.model('BlacklistToken',BlacklistTokenSchema) ;

  module.exports = BlacklistToken ;
