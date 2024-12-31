import React, { useRef, useState } from 'react'
import { RiArrowUpWideFill } from "react-icons/ri";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocationPanal from '../Components/LocationPanal';

const HomeScreen = () => {
   const [pickup , setPickup]= useState('');
   const [destination , setDestination] = useState('');
   const [panalOpen , setPanalOpen] = useState(false);
   const panalref = useRef(null);
   const panacloselref = useRef(null);

  const submithandler = (e)=>{
    e.preventDefault();
  }

  useGSAP(function(){
     if(panalOpen){
      gsap.to(panalref.current,{
        height : '70%'
        
      })
      gsap.to(panacloselref.current,{
        rotate : '180%'
      })
     }else{
      gsap.to(panalref.current,{
        height : '0'
        
      })
      gsap.to(panacloselref.current,{
        rotate : '0%'
      })
     }
  },[panalOpen])
  
  return (
    <div className=' h-screen relative'>
        
          <img className=' w-[20vw] absolute left-[5vw] top-[5vw]' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />

          <div className=' w-screen h-screen'>
               <img className=' w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map image" />
          </div>

          <div className=' w-full absolute flex flex-col justify-end h-screen top-0 '>
       
          
            <div className=' h-[30%] pt-5  pl-5 pr-5 bg-white relative rounded-tr-xl  rounded-tl-xl'>
            <div ref={panacloselref} onClick={()=>{setPanalOpen(false)}} className=' flex justify-center  rotate-0'>  < RiArrowUpWideFill/> </div>
            <h4 className=' text-2xl font-semibold'> Find Your Trip</h4>
            <div className="line h-12 w-1 rounded top-[45%] bg-gray-800 absolute left-10 "></div>
             <form 
             onSubmit={(e)=>{
              submithandler(e)
             }}
             >
                 <input 
                 onClick={() => setPanalOpen(true)}
                   value={pickup}
                   onChange={(e)=>{
                     setPickup(e.target.value)  
                   }}
                 className=' w-full bg-[#eeeeee] px-8 py-3 text-base rounded mt-[5vw]' type="text" placeholder=' Add your pick-up location' />
                 <input 
                  onClick={() => setPanalOpen(true)}
                  value={destination}
                  onChange={(e)=>{
                     setDestination(e.target.value)
                  }}
                 className='w-full bg-[#eeeeee] px-8 py-3 text-base rounded mt-[3vw]' type="text" placeholder=' Enter your destination ' />
             </form>
            </div>
            <div ref={panalref}  className=' bg-[#eeeeee]  '>
                <LocationPanal/>
            </div>
          </div>
    </div>
  )
}

export default HomeScreen
