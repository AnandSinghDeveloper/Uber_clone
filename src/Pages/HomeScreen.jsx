import React, { useRef, useState } from 'react'
import { RiArrowUpWideFill } from "react-icons/ri";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocationPanal from '../Components/LocationPanal';
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { RiArrowDownWideLine } from "react-icons/ri";

const HomeScreen = () => {
   const [pickup , setPickup]= useState('');
   const [destination , setDestination] = useState('');
   const [panalOpen , setPanalOpen] = useState(false);
   const panalref = useRef(null);
   const panacloselref = useRef(null);
   const searchlocation = useRef(null);
   const vehiclePanalOpenRef = useRef(null);
   const [vehiclePanalOpen,setvehiclePanalOpen]=useState(false)

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
  
  return (
    <div className=' h-screen relative overflow-hidden'>
        
          <img className=' w-[20vw] absolute left-[5vw] top-[5vw]' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />

          <div  className=' w-screen h-screen'>
               <img className=' w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map image" />
          </div>

          <div  className=' w-full absolute flex flex-col justify-end h-screen top-0 '>
       
          
            <div ref={searchlocation} className=' h-[30%] pt-5  pl-5 pr-5 bg-white relative rounded-tr-xl  rounded-tl-xl'>
            <div ref={panacloselref} onClick={()=>{setPanalOpen(false)}} className=' flex justify-center  rotate-0 opacity-0 '>  < RiArrowUpWideFill style={{width : '30px' , height : '30px', color :  "rgb(209 213 219 / var(--tw-border-opacity, 1))" }} /> </div>
            <h4 className=' text-2xl font-semibold'> Find Your Trip</h4>
            <div className="line h-12 w-1 rounded top-[50%] bg-gray-800 absolute left-10 "></div>
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
          <div ref={vehiclePanalOpenRef} className=' fixed w-full z-10 bg-white px-3 py-6 bottom-0 -translate-x-full'>
            <div onClick={()=>{ setvehiclePanalOpen(false) }} className=' w-full flex  justify-center p-3 '><RiArrowDownWideLine style={{height : '30px' , width : '30px', color : ' rgb(209 213 219 / var(--tw-border-opacity, 1))'}}/></div>
            <h3 className=' capitalize text-2xl font-semibold mb-3'> choose a vehicle</h3>
             <div className=' flex items-center  justify-between w-full mb-2 active:border-[3px] border-[3px] border-gray-200 active:border-black rounded-xl p-3  '>
                <img className=' h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt=" Car" />
                
                  <div className=' w-1/2'> 
                       <h4 className=' font-semibold text-xl'> UberGo <span className=' inline-block text-base ml-2'> <FaUserLarge/>  </span> <span className=' text-base font-normal'>4</span> </h4>
                       <h5 className='font-medium text-sm'>2 mins away</h5>
                       <p className=' font-normal text-xs text-gray-600'> Affordable , compact ride</p>
                  </div>
                  <h2 className=' font-semibold text-xl flex items-center text-green-700'> <span className=' inline-block' > <MdOutlineCurrencyRupee style={{color : 'green' }}/></span> 193.20</h2>

             </div>
             
             <div className=' flex items-center  justify-between w-full mb-2 active:border-[3px] border-[3px] border-gray-200 active:border-black  rounded-xl p-3  '>
                <img className=' h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt=" Car" />
                
                  <div className=' w-1/2'> 
                       <h4 className=' font-semibold text-xl'> Moto <span className=' inline-block text-base ml-2'> <FaUserLarge/>  </span> <span className=' text-base font-normal'>1</span> </h4>
                       <h5 className='font-medium text-sm'>3 mins away</h5>
                       <p className=' font-normal text-xs text-gray-600'> Affordable , motoecyicle rides</p>
                  </div>
                  <h2 className=' font-semibold text-xl flex items-center text-green-700'> <span className=' inline-block' > <MdOutlineCurrencyRupee style={{color : 'green' }}/></span> 65.00</h2>

             </div>


             <div className=' flex items-center  justify-between w-full mb-2 active:border-[3px] border-[3px] border-gray-200 active:border-black  rounded-xl p-3  '>
                <img className=' h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt=" Car" />
                
                  <div className=' w-1/2'> 
                       <h4 className=' font-semibold text-xl'> Auto <span className=' inline-block text-base ml-2'> <FaUserLarge/>  </span> <span className=' text-base font-normal'>3</span> </h4>
                       <h5 className='font-medium text-sm'>4 mins away</h5>
                       <p className=' font-normal text-xs text-gray-600'> Affordable , auto rides</p>
                  </div>
                  <h2 className=' font-semibold text-xl flex items-center text-green-700'> <span className=' inline-block' > <MdOutlineCurrencyRupee style={{color : 'green' }}/></span> 102.50</h2>

             </div>

          </div>
    </div>
  )
}

export default HomeScreen
