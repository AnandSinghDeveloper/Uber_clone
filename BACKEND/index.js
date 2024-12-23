 const dotenv =require('dotenv');
 dotenv.config();
 const express = require ("express");
 const cookie= require('cookie-parser');
 const cors = require('cors');
 const userRoutes= require('./routes/user.routes');
 const captainRoutes= require('./routes/captain.routes');
 const connectDB = require('./db/database');


 connectDB();
 const app = express() ;

app.use(cors());
app.use(cookie());
app.use(express.json());

app.use(express.urlencoded({extended:true}));



app.get('/',(req,res)=>{
  res.send('hello uber')

})

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

 
 module.exports = app;