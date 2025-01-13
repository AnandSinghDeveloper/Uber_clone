import React from 'react'
import { RiArrowDownWideLine } from 'react-icons/ri'
import { MdMyLocation } from "react-icons/md";
import { FaSquare } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";
import { MdOutlineCurrencyRupee } from 'react-icons/md';

const ConfirmRide = (props) => {



  return (
    <div>
      <div onClick={()=>{ props.setConfirmRidePanal(false) }} className=' w-full flex  justify-center p-3 '><RiArrowDownWideLine style={{height : '30px' , width : '30px', color : ' rgb(209 213 219 / var(--tw-border-opacity, 1))'}}/></div>
      <h3 className=' capitalize text-2xl font-semibold mb-3'> confiom your ride </h3>

      <div className=' flex flex-col justify-between items-center '>

      <img className=' h-24' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt=" Car" />
      
        <div className=' w-full'>
           <div className='flex items-center gap-5 p-3 border-b-2'>
              <MdMyLocation style={{width : '20px' , height : '20px', marginRight : '-10px' }}/>
             <div>
              <h3 className=' font-semibold text-lg'>562/11A</h3>
              <p className=' capitalize -mt-1 text-sm text-gray-600'> {props.pickup} </p>
            </div>    
           </div>
           <div className='flex items-center gap-5 p-3 border-b-2'>
             <FaSquare style={{width : '15px' , height : '15px', marginRight : '-10px' }}/>
             <div>
              <h3 className=' font-semibold text-lg'>562/11A</h3>
              <p className=' capitalize -mt-1 text-sm text-gray-600'>{props.destination} </p>
            </div>    
           </div>
           <div className='flex  items-center gap-5 p-3'>
            <IoMdCash style={{width : '20px' , height : '20px', marginRight : '-10px' }}/>
            <div>
              <h3 className=' font-semibold text-lg text-green-600'><span className=' inline-block' > <MdOutlineCurrencyRupee style={{color : 'green', marginRight : '-5px', marginBottom : '-3px' }}/></span> {props.fare[props.vehicleType]}</h3>
              <p className=' capitalize -mt-1 text-sm text-gray-600'> cash cash </p>
            </div>    
           </div>
        </div>
        
        <button onClick={()=>{
          props.setvehiclePanalOpen(false);
          props.setConfirmRidePanal(false);
          props.setVehicleFound(true);
          props.CreateRide();
        }} className=' w-full bg-green-600 p-2 rounded-lg text-white font-semibold mt-4 '>Confirm</button>
      </div>

    </div>
  )
}

export default ConfirmRide
