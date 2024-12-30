import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../Context/CaptainContext';
import { useEffect } from 'react';
import axios from 'axios';

const CaptainProtectedWrapper =  ({children}) => {
  const token = localStorage.getItem('token')        
  const navigate = useNavigate(); 
  const {captain, setCaptain}= React.useContext(CaptainDataContext)
  const [ isloding , setIsloding]=useState(true);
     
   useEffect(()=>{
    if(!token){
      navigate('/captain-login')
     }
   },[token]) 
   
   axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
   }).then(response =>{
    if(response === 200){
      setCaptain(response.data.captain)
      setIsloding(false)
    }
   }).catch(err =>{
    console.log(err);
    localStorage.removeItem('token')
    navigate('/captain-login')
    
   })


  //  if(isloding){
  //   return <div>
  //        lodding ....... 
  //   </div>
  //  }
   

return (
  <>
     {children}
  </>
)
}
export default CaptainProtectedWrapper
