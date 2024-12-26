import React, { useState } from 'react'
import { Link, Navigate } from 'react-router'
import axios from "axios";
import  { UserDataContext } from '../Context/UserContext';


const UserLogin = () => {

   const [userdata,setuserData]=useState('');
   const [email, setEmail]=useState('');
   const [password, setPassword] = useState('');

   const submithandler = (e)=>{
     e.preventDefault();
    const userData={
      email : email,
      password:password
     };

     console.log(userdata);
     
     setPassword('');
     setEmail('');
      
   }
   
  return (
    <div className=' p-10 h-screen flex justify-between flex-col '>
      <div>
      <img className=' w-20 mb-10' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
       <form onSubmit={(e)=>{
        submithandler(e);
       }}
       className=''>
       <h3 
       className=' text-xl mb-2 font-medium'>What's Your Email</h3>
       <input 
       value = {email}
       onChange={(e)=>{
         setEmail(e.target.value)  
       }}
       required className=' bg-[#eeeeee] w-full mb-7 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='email@example.com' type="email" />
       <h3 className=' text-xl mb-2 font-medium'>Password</h3>
       <input 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
       required className=' bg-[#eeeeee] w-full mb-7 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='password' type="password" />

       <button type='submit' className='bg-black text-white w-full mb-7 px-4 py-2 rounded text-lg font-semibold '>Login</button>
        
       <p>New here? <Link to='/Signup' className=' text-blue-500 text-base text-center'> Create New Account</Link></p>
       </form>
      </div>

      <div>
         <Link to='/captain-login'className='bg-[#10b461] inline-block text-center text-[#eeeeee] w-full mb-7 px-4 py-2 rounded text-lg font-semibold '>SignIn as a Captain</Link>
         </div>

    </div>
  )
}

export default UserLogin
