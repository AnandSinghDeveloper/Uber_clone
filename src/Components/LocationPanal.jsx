import React from 'react'
import { MdLocationPin } from "react-icons/md";

const LocationPanal = () => {
  return (
    <div className=' h-screen relative '>
      
      <div className=' flex items-center gap-4 justify-start'>
        <h2 className=' bg-[#eeeeee] w-[3.2rem] h-[2.5rem] rounded-full flex justify-center items-center '>
          <  MdLocationPin style={{width: '25px', height : '25px'}}/>
        </h2>
           <h4 className=' font-medium text-[16px] capitalize'>
               Nearby Life care Medicare baktawarpur delhi-110036
           </h4>
      </div>  
      <div className=' flex items-center my-3 gap-4 justify-start'>
        <h2 className=' bg-[#eeeeee] w-[3.2rem] h-[2.5rem] rounded-full flex justify-center items-center '>
          <  MdLocationPin style={{width: '25px', height : '25px'}}/>
        </h2>
           <h4 className=' font-medium my-3 text-[16px] capitalize'>
               Nearby Life care Medicare baktawarpur delhi-110036
           </h4>
      </div>  

    </div>
  )
}

export default LocationPanal
