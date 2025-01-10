import React from 'react'
import { MdLocationPin } from "react-icons/md";

const LocationPanal = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {
    
  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
        setPickup(suggestion)
    } else if (activeField === 'destination') {
        setDestination(suggestion)
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
}

  return (
    <div className=' h-screen relative  '>
      
        {
          suggestions.map((elm ,key)=>{
            return <div key={key} onClick={()=>{
             handleSuggestionClick(elm);
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
