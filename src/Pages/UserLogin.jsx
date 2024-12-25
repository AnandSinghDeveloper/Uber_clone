import React from 'react'
import { Link } from 'react-router'
const UserLogin = () => {
   

  return (
    <div className=' p-7 h-screen flex justify-between flex-col '>
      <div>
      <img className=' w-20 mb-10' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
       <form className=''>
       <h3 className=' text-xl mb-2 font-medium'>What's Your Email</h3>
       <input required className=' bg-[#eeeeee] w-full mb-7 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='email@example.com' type="email" />
       <h3 className=' text-xl mb-2 font-medium'>Password</h3>
       <input required className=' bg-[#eeeeee] w-full mb-7 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='password' type="email" />
       <button className='bg-black text-white w-full mb-7 px-4 py-2 rounded text-lg font-semibold '>Login</button>
        
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
