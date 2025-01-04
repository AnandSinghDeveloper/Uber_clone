import React, { useRef, useState } from 'react'
import { IoMdTime } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import { MdOutlineCurrencyRupee } from 'react-icons/md';
import { GiSpeedometer } from "react-icons/gi";


const CaptainDetails = () => {
    
    

  return (
    <div className=' h-2/5 w-full p-5 flex flex-col  justify-evenly  '>
             <div className=' flex justify-between items-center p-3 '>
                         <div className='  relative h-16'>
                             
                         <div className=' w-10 h-10 flex items-center '>
                          <img className=" h-10 w-10 rounded-full object-cover  " src="https://t3.ftcdn.net/jpg/03/05/77/64/360_F_305776453_t7SUl48g63zLsyODxd60aj6EcWR9avVK.jpg" alt="" />
                           <div>
                           <h3 className=' ml-3 text-xl font-medium '>
                                  Bhavisya
                            </h3>
                           </div>
                         </div>
            
                         </div>
                          <div className=' '>
                            <h2 className=' capitalize -mb-1 text-lg font-medium text-green-600'><span className=' inline-block' > <MdOutlineCurrencyRupee style={{color : 'green', marginRight : '-5px', marginBottom : '-3px' }}/></span> 293.20 </h2>
                            
                            <p className=' capitalize ml-3 -mt-1 text-sm text-gray-400 '>earned</p>
                          </div>
                       </div>
                     <div className=" h-28 mb-8 w-full rounded-xl flex justify-evenly items-center  bg-gray-100">
                       <div className="text-center ">
                        <h3 className=" pl-7"> <IoMdTime style={{height : '25px' , width : '25px', fontWeight:'600', fontSize : '20px' }}/> </h3>
                        <h4 className=" text-lg font-medium"> 10.2</h4>
                        <p className=" font-light text-sm text-gray-400 capitalize"> hours online </p>
                       </div>
                       <div className="text-center">
                        <h3 className="  pl-7 "> <GiSpeedometer style={{height : '25px' , width : '25px', fontWeight:'600', fontSize : '20px' }}/> </h3>
                        <h4 className=" text-lg font-medium capitalize"> 30km</h4>
                        <p className=" font-light text-sm text-gray-400 capitalize "> total distance </p>
                       </div>
                       <div className=" text-center">
                        <h3 className=" pl-7 "> <MdEventNote style={{height : '25px' , width : '25px', fontWeight:'600', fontSize : '20px' }}/> </h3>
                        <h4 className=" text-lg font-medium"> 10</h4>
                        <p className=" font-light text-sm text-gray-400 capitalize"> total jobs </p>
                       </div>
    
                   </div>                
                
        </div>
  )
}

export default CaptainDetails
