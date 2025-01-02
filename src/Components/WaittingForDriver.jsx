import React from 'react'

import { RiArrowDownWideLine } from 'react-icons/ri'
import { MdMyLocation } from "react-icons/md";
import { FaSquare } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";
import { MdOutlineCurrencyRupee } from 'react-icons/md';

const WaittingForDriver = () => {
  return (
     <div>
          <div onClick={()=>{props.setWaittingDriver(false) }} className=' w-full flex  justify-center p-3 '><RiArrowDownWideLine style={{height : '30px' , width : '30px', color : ' rgb(209 213 219 / var(--tw-border-opacity, 1))'}}/></div>

          <div className=' flex justify-between'>
             <div className=' relative h-24'>
                 <div className=' absolute h-10 w-24 bottom-16 left-12'>
                 <img className=' h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt=" Car" />
                 </div>
             <div className=' w-20 h-20 rounded-full bg-[url(https://t3.ftcdn.net/jpg/03/05/77/64/360_F_305776453_t7SUl48g63zLsyODxd60aj6EcWR9avVK.jpg)] bg-cover absolute bottom-5 bg-center '>
             
             </div>

             </div>
              <div className=' text-right'>
                <h2 className=' capitalize -mb-1 text-lg font-medium'>Anand </h2>
                <h4 className=' capitalize text-xl font-semibold'>UP-A5-2356</h4>
                <p className=' capitalize -mt-1 text-sm text-gray-600 '>maruti alto</p>
              </div>
              </div>
            
            <div className=' flex flex-col justify-between items-center '>
              
               
              <div className=' w-full'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                      <MdMyLocation style={{width : '20px' , height : '20px', marginRight : '-10px' }}/>
                  <div>
                   <h3 className=' font-semibold text-lg'>562/11A</h3>
                      <p className=' capitalize -mt-1 text-sm text-gray-600'> baktawarpur delhi-36 </p>
                    </div>    
                   </div>
                   <div className='flex items-center gap-5 p-3 border-b-2'>
                     <FaSquare style={{width : '15px' , height : '15px', marginRight : '-10px' }}/>
                     <div>
                      <h3 className=' font-semibold text-lg'>562/11A</h3>
                      <p className=' capitalize -mt-1 text-sm text-gray-600'> baktawarpur delhi-36 </p>
                    </div>    
                   </div>
                  <div className='flex  items-center gap-5 p-3'>
                    <IoMdCash style={{width : '20px' , height : '20px', marginRight : '-10px' }}/>
                    <div>
                      <h3 className=' font-semibold text-lg text-green-600'><span className=' inline-block' > <MdOutlineCurrencyRupee style={{color : 'green', marginRight : '-5px', marginBottom : '-3px' }}/></span> 193.20</h3>
                      <p className=' capitalize -mt-1 text-sm text-gray-600'> cash cash </p>
                    </div>    
            </div>
          
       </div>
                
                
              </div>
        
    </div>
  )
}

export default WaittingForDriver
