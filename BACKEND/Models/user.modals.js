import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname:{
    type:String,
    require:true,
    minlength:[3,'firstname must be at 3 characters']
  },
  lastname:{
    type:String,
    minlength:[3,'lastname must be at 3 charcters']
  },
  email:{
    type:String,
    require:true,
    unique:true,
    minlength:[5,'email must be at 3 charcters']
  },
  password:{
    type:String,
    require:true,
    select:false
  },
  soketID:{
    type:String
  }
 
},{timestamps:true});

userSchema.methods.generateToken = ()=>{
  const token = Jwt.sign({_id:this._id}, process.env.JWT_SECRET);
  return token;
};

userSchema.methods.comparePassword = async (password)=>{
   return await bcrypt.compare(password,this.password)
};

userSchema.statics.hashPassword = async (password)=>{
  return await bcrypt.hash(password,10);
};


const User = mongoose.model('User',userSchema);

module.exports = User;

