import React, { useState } from 'react'

import { Link } from 'react-router-dom';



const UserSignUp = () => {
   
const [ email,setEmail]=useState('');
const [ password,setPassword]=useState('');
const [ firstname,setFirstname]=useState('');
const [ lastname,setLastname]=useState('');
const [userdata, setuserData] = useState({});
  const submithandler = (e)=>{
     e.preventDefault();
     setuserData({
        email:email,
        password:password,
        fullname :{
        firstname:firstname,
        lastname: lastname
        }
     })
    
    
     setEmail('');
     setPassword('');
     setFirstname('');
     setLastname('');
  }
     
  return (
    <div className=' p-7 h-screen flex justify-between flex-col '>
        <div> 
          <img className=' w-20 mb-7' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
           <form onSubmit={(e)=>{
             submithandler(e)
           }}
           className=''>
            <h3 
           className=' text-lg mb-2 font-medium'>What's Your Name</h3>
          <div className='flex gap-4 mb-6 '> 
            <input 
            value={firstname}
            onChange={(e)=>{
              setFirstname(e.target.value)
            }}
           required className=' bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='first name' type="text" />

           <input   
           value={lastname}
           onChange={(e)=>{
            setLastname(e.target.value)
           }}                            
            className=' bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='Last name' type="text" />
          </div>
           <h3 
           className=' text-lg mb-2 font-medium'>What's Your Email</h3>
           <input 
           value={email}
           onChange={(e)=>{
            setEmail(e.target.value)
           }}
           required className=' bg-[#eeeeee] w-full mb-6 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='email@example.com' type="email" />
           <h3 className=' text-lg mb-2 font-medium'>Password</h3>
           <input 
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
           required className=' bg-[#eeeeee] w-full mb-6 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='password' type="password" />
    
           <button type='submit' className='bg-black text-white w-full mb-6 px-4 py-2 rounded text-lg font-semibold '>Login</button>
            
           <p>Alreafy have a account? <Link to='/login' className=' text-blue-500 text-base text-center'> Login here</Link></p>
           </form>
        </div>
    
          <div>
             <p className='text-xs '>By proceeding  , you cansent to get a calls whatsApp or SMS messages including by automate means , from uber by affiliates to number provided. </p>
             </div>
    
    </div>
  
  )
}

export default UserSignUp
