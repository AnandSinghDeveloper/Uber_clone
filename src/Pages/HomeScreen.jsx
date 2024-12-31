import React from 'react'
import { FaCaretUp } from "react-icons/fa6";

const HomeScreen = () => {
  return (
    <div className=' h-screen relative'>
        
          <img className=' w-[20vw] absolute left-[5vw] top-[5vw]' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />

          <div className=' w-screen h-screen'>
               <img className=' w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map image" />
          </div>

          <div className=' w-full absolute flex flex-col justify-end  top-0 rounded-tr-xl h-screen rounded-tl-xl'>
       
          
            <div className=' h-[30%] p-[5vw] bg-white relative'>
            <div className=' flex justify-center  rotate-0'>  <  FaCaretUp/> </div>
            <h4 className=' text-2xl font-semibold'> Find Your Trip</h4>
            <div className="line h-12 w-1 rounded top-[45%] bg-gray-800 absolute left-10 "></div>
             <form >
                 <input className=' w-full bg-[#eeeeee] px-8 py-3 text-base rounded mt-[5vw]' type="text" placeholder=' Add your pick-up location' />
                 <input className='w-full bg-[#eeeeee] px-8 py-3 text-base rounded mt-[3vw]' type="text" placeholder=' Enter your destination ' />
             </form>
            </div>
            <div className=' h-[70%] bg-slate-700 hidden'>

            </div>
          </div>
    </div>
  )
}

export default HomeScreen
