 const dotenv =require('dotenv');
 dotenv.config();
 const express = require ("express")
 
 const cors = require('cors');
 const userRoutes= require('./routes/user.routes')
 const connectDB = require('./db/database')

 const app = express() ;

app.use(cors());
  
connectDB();

app.use(express.json());

app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
  res.send('hello uber')

})

app.use('/users',userRoutes);

 
 module.exports = app;