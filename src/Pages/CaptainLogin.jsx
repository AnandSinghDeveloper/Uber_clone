import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const CaptainLogin = () => {
const [captaindata,setcaptainData]=useState('');
   const [email, setEmail]=useState('');
   const [password, setPassword] = useState('');

   const submithandler = (e)=>{
     e.preventDefault();
     setcaptainData({
      email : email,
      password:password
     });

     console.log(captaindata);
     
     setPassword('');
     setEmail('');
      
   }

  return (
    <div className=' p-7 h-screen flex justify-between flex-col '>
    <div>
    <img className=' w-20 mb-7' src="http://pngimg.com/uploads/uber/uber_PNG24.png" alt="" />
     <form onSubmit={(e)=>{
      submithandler(e);
     }} 
     className=''>
     <h3 className=' text-xl mb-2 font-medium'>What's Your Email</h3>
     <input 
      value={email}
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
      
     <p>Now here? <Link to='/captain-signup' className=' text-blue-500 text-base text-center'>Resister now </Link></p>
     </form>
    </div>

    <div>
       <Link to='/login'className='bg-[#EB8B37] inline-block text-center text-[#eeeeee] w-full mb-7 px-4 py-2 rounded text-lg font-semibold '>SignIn as a User</Link>
       </div>

  </div>
  )
}

export default CaptainLogin
