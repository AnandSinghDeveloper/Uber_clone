import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { RiArrowDownWideLine } from "react-icons/ri";

const VehiclePanal = (props) => {
  return (
    <div>
       <div onClick={()=>{ props.setvehiclePanalOpen(false) }} className=' w-full flex  justify-center p-3 '><RiArrowDownWideLine style={{height : '30px' , width : '30px', color : ' rgb(209 213 219 / var(--tw-border-opacity, 1))'}}/></div>
            <h3 className=' capitalize text-2xl font-semibold mb-3'> choose a vehicle</h3>
             <div onClick={()=>{props.setConfirmRidePanal(true)}} className=' flex items-center  justify-between w-full mb-2 active:border-[3px] border-[3px] border-gray-200 active:border-black rounded-xl p-3  '>
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
  )
}

export default VehiclePanal
