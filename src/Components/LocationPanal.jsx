import React from 'react'
import { MdLocationPin } from "react-icons/md";

const LocationPanal = (props) => {
    
   const Location = [
    "Nearby Life care Medicare baktawarpur delhi-110036",
    "Tigipur pur mode nearby transform baktawerpur delhi-36",
    "88a panchsheel park neraby dice academy",
    "g.b.s.s.school baktawerpue delhi-52"
   ]

  return (
    <div className=' h-screen relative  '>
      
        {
          Location.map((elm ,key)=>{
            return <div key={key} onClick={()=>{
              props.setvehiclePanalOpen(true)
              props.setPanalOpen(false)
            }} 
            className=' flex items-center p-4 active:border-2 active:border-black border-2 border-gray-50 rounded-xl gap-4 justify-start my-3'>
            <h2 className=' bg-[#eeeeee] w-[3.2rem] h-[2.5rem] rounded-full flex justify-center items-center '>
              <  MdLocationPin style={{width: '25px', height : '25px'}}/>
            </h2>
               <h4 className=' font-medium text-[16px] capitalize'>
                  {elm}
               </h4>
          </div>  
          })
        }
     

    </div>
  )
}

export default LocationPanal
