import React, { useRef, useState } from 'react'
import { RiArrowUpWideFill } from "react-icons/ri";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocationPanal from '../Components/LocationPanal';
import ConfirmRide from '../Components/ConfirmRide';
import VehiclePanal from '../Components/VehiclePanal';
import LookingForDriver from '../Components/LookingForDriver';
import WaittingForDriver from '../Components/WaittingForDriver';

const HomeScreen = () => {
   const [pickup , setPickup]= useState('');
   const [destination , setDestination] = useState('');
   const [panalOpen , setPanalOpen] = useState(false);
   const [vehiclePanalOpen,setvehiclePanalOpen]=useState(false);
   const [ confirmRidePanal , setConfirmRidePanal] = useState(false);
   const [vehicleFound,setVehicleFound]=useState(false);
   const [waittingDriver,setWaittingDriver]=useState(false)
   const panalref = useRef(null);
   const panacloselref = useRef(null);
   const searchlocation = useRef(null);
   const vehiclePanalOpenRef = useRef(null);
   const confirmRidePanalRef = useRef(null);
   const vehicleFoundRef = useRef(null);
   const WaittingForDriverRef = useRef( null)
  

  const submithandler = (e)=>{
    e.preventDefault();
  }

  useGSAP(function(){
     if(panalOpen){
      gsap.to(panalref.current,{
        height : '70%',
        padding : '20px',
       
      })
      gsap.to(panacloselref.current,{
        rotate : '180%',
        opacity : '1'
      })
      gsap.to(searchlocation.current,{
        borderRadius : '0'
      })
     }else{
      gsap.to(panalref.current,{
        height : '0',
        padding : '0'
       
        
        
      })
      gsap.to(panacloselref.current,{
        rotate : '0%',
        opacity : '0'
        
      })
      gsap.to(searchlocation.current,{
        borderTopLeftRadius : '0.75rem',
        borderTopRightRadius : '0.75rem'
      })
     }
  },[panalOpen,panacloselref])

  useGSAP(function(){
    if(vehiclePanalOpen){
      gsap.to(vehiclePanalOpenRef.current,{
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanalOpenRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[vehiclePanalOpen])


  useGSAP(function(){
    if(confirmRidePanal){
      gsap.to(confirmRidePanalRef.current,{
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanalRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[confirmRidePanal])

  useGSAP(function(){
    if(waittingDriver){
      gsap.to(WaittingForDriverRef.current,{
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(WaittingForDriverRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[waittingDriver])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[vehicleFound])
  
  
  return (
    <div className=' h-screen relative overflow-hidden'>
        
      <img className=' w-[20vw] absolute left-[5vw] top-[5vw]' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />

        <div  className=' w-screen h-screen'>
               <img className=' w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map image" />
        </div>

          <div  className=' w-full absolute flex flex-col justify-end h-screen bottom-0 '>
       
          
            <div ref={searchlocation} className=' h-[35%] pt-5  pl-5 pr-5 bg-white relative rounded-tr-xl  rounded-tl-xl'>
            <div ref={panacloselref} onClick={()=>{setPanalOpen(false)}} className=' flex justify-center  rotate-0 opacity-0 '>  < RiArrowUpWideFill style={{width : '30px' , height : '30px', color :  "rgb(209 213 219 / var(--tw-border-opacity, 1))" }} /> </div>
            <h4 className=' text-2xl font-semibold'> Find Your Trip</h4>
            <div className="line h-14 w-1 rounded top-[33vw] bg-gray-800 absolute left-10 "></div>
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
            <div ref={panalref}  className=' bg-white   '>
                <LocationPanal setvehiclePanalOpen={setvehiclePanalOpen} setPanalOpen={setPanalOpen}  />
            </div>
          </div>
          <div ref={vehiclePanalOpenRef} className=' fixed w-full z-10 bg-white px-3 pt-[0.5rem] pb-6 bottom-0 -translate-x-full rounded-tr-lg rounded-tl-lg'>
             <VehiclePanal setvehiclePanalOpen={setvehiclePanalOpen} setConfirmRidePanal={setConfirmRidePanal}/>

          </div>
          <div ref={confirmRidePanalRef} className=' fixed w-full z-10 bg-white   px-3 pt-[0.5rem] pb-6 bottom-0 -translate-x-full rounded-tr-lg rounded-tl-lg'>
             <ConfirmRide setConfirmRidePanal={setConfirmRidePanal} setvehiclePanalOpen={setvehiclePanalOpen} setVehicleFound={setVehicleFound} />
          </div>
          <div ref={vehicleFoundRef} className=' fixed w-full z-10 bg-white   px-3 pt-[0.5rem] pb-6 bottom-0 -translate-x-full rounded-tr-lg rounded-tl-lg'>
               <LookingForDriver setVehicleFound={setVehicleFound}/>
          </div>
          <div ref={WaittingForDriverRef}  className=' fixed w-full z-10 bg-white   px-3 pt-[0.5rem] pb-6 bottom-0 -translate-x-full  rounded-tr-lg rounded-tl-lg'>
             <WaittingForDriver setWaittingDriver={setWaittingDriver} /> 
          </div>
    </div>
  )
}

export default HomeScreen
