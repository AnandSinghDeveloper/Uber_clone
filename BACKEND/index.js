const dotenv =require('dotenv');
dotenv.config();
const express = require ("express")
 const cors = require('cors');

 const connectDB = require('./db/database')
 

connectDB();

const app = express() ;
app.use(cors());

app.get('/',(req,res)=>{
  res.send('hello uber')

})

 
 module.exports = app;