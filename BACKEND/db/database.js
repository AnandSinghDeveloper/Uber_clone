
const mongoose = require("mongoose");

 const connectDB = async ()=>{
     try {
       const  connectionInstance=  await mongoose.connect(`${process.env.Database_connect}`)
       console.log("mongoDB connect ", connectionInstance.Connection)
     } catch (error) {

      console.log("mongoDB connection error", error)
      process.exit(1);
      
     }
    }
      
 module.exports = connectDB ;