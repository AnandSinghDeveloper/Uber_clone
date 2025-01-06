import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiArrowUpWideFill } from "react-icons/ri";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FinishRide from '../Components/FinishRide';

const CaptainRideing = ({setCaptainRideing}) => {

    const [finishRide,setFinishRide]=useState(false)
    const finishRideREf=useRef(null)
          
    useGSAP(function(){
      if(finishRide){
        gsap.to(finishRideREf.current,{
          transform : 'translateY(0)'
        })
      }else{
        gsap.to(finishRideREf.current,{
          transform : 'translateY(100%)'
        })
      }
    },[finishRide])

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
        <div  onClick={()=>{setFinishRide(true)}} className=' flex justify-center  rotate-0  '>  < RiArrowUpWideFill style={{width : '30px' , height : '30px', color :  "zinc" }} /> </div>
         <div className=' flex justify-between items-center  '>
          <h4 className=' text-xl font-medium capitalize'> 4 km away</h4>
          <button onClick={()=>{setFinishRide(true)}} className=' w-[50%] bg-green-600 p-2 rounded-lg text-white font-semibold mt-4 capitalize'> complete ride</button>
         </div>
       </div>

       <div ref={finishRideREf} className=' fixed w-full z-10 bg-white   px-3 pt-[0.5rem] pb-6 bottom-0 translate-y-full  rounded-tr-lg rounded-tl-lg'>
             <FinishRide setFinishRide={setFinishRide} setCaptainRideing={setCaptainRideing} />
          </div>
    
    </div>
  )
}

export default CaptainRideing
