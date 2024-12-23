const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

const captainSchema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'First name must be at least 3 characters long'],
    },
    lastname: {
      type: String,
      minlength: [3, 'Last name must be at least 3 characters long'],
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Email must be at least 5 characters long'],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketID: {
    type: String
  },
  status :{
    type :String,
    enum : ['active','inactive'],
    default : 'inactive',

  },
   vehicle :{
       color :{
          type :String ,
          require: true,
          minlength: [3, 'vehicle color must be at least 3 characters long'],
       },
       plate :{
        type : String ,
        require : true,
        minlength: [3, 'vehicle plate must be at least 3 characters long'],
       },
       capacity :{
        type : Number,
        require : true,
        minlength : [1 , 'Capacity must be at least 1'],
       },
       vehicleType:{
        type:String,
        require:true,
        enum : ['Car','Motorcycle','Auto'],
       }
   },
  location :{
    lat :{
      type : Number,
    },
    log :{
      type : Number,
    }
  } 

}, { timestamps: true });


captainSchema.methods.generateToken = function () { 
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET , {expiresIn : '24h'});
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const CaptainModel = mongoose.model('Captain', captainSchema);

module.exports = CaptainModel
