import React from 'react'
import { Link } from 'react-router-dom'
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiArrowUpWideFill } from "react-icons/ri";

const CaptainRideing = (props) => {
  return (
    <div className=' h-screen overflow-hidden'>
     <div className=''>
      <img className="w-[20vw] absolute left-[5vw] top-[5vw]" src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
    <Link  className=' flex absolute right-2 top-2  w-10 h-10 items-center justify-center bg-white rounded-full '>
      <RiLogoutBoxRLine style={{height : '20px', width : '20px'}}/>
    </Link>
    </div>
    <div className=' h-[80%] '>
    <img className=' w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map image" />
    </div>
       
       <div className='h-screen w-screen bg-yellow-400  p-3 rounded-tr-lg rounded-tl-lg z-10 '>
        <div  onClick={()=>{}} className=' flex justify-center  rotate-0  '>  < RiArrowUpWideFill style={{width : '30px' , height : '30px', color :  "zinc" }} /> </div>
         <div className=' flex justify-between items-center  '>
          <h4 className=' text-xl font-medium capitalize'> 4 km away</h4>
          <button className=' w-[50%] bg-green-600 p-2 rounded-lg text-white font-semibold mt-4 capitalize'> complete ride</button>
         </div>
       </div>
    
    </div>
  )
}

export default CaptainRideing
