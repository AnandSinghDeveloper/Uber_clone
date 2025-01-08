const mongoose =require('mongoose');


const rideSchema = new mongoose.Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
  },
  captian : {
    type : mongoose.Schema.Types.ObjectId,
    red : 'Captian'
  },
  pickup : {
    type : String ,
    required : true
  },
  destination : {
    type : String ,
    required : true
  },
  fare : {
    type : Number ,
    required : true
  },
  status :{
    type : String , 
    enum : ['Panding','Accepted','Ongoing','Completed', 'Cancalled'],
    default : 'Panding'
  },
  duration : {
    type : Number
  },
  distance : {
    type : Number
  },
  paymentID : {
    type : String
  },
  oderID :{
    type : String
  },
  signature : {
    type : String
  }

})

module.exports = mongoose.model('ride',rideSchema);