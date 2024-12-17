
const mongoose = require("mongoose");

 const connectDB = async ()=>{
     try {
       const  connectionInstance=  await mongoose.connect(`${process.env.Database_connect}`)
       console.log("MongoDB connected:", connectionInstance.connection.host);

     } catch (error) {

      console.log("mongoDB connection error", error)
      process.exit(1);
      
     }
    }
      
 module.exports = connectDB ;