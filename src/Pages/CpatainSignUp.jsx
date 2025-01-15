import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../Context/CaptainContext';
import axios from 'axios';



const CpatainSignUp = () => {
  const [ email,setEmail]=useState('');
const [ password,setPassword]=useState('');
const [ firstname,setFirstname]=useState('');
const [ lastname,setLastname]=useState('');
const [vehiclecolor, setVehiclecolor]=useState('');
const [vehicleplate,setVehicleplate]=useState('');
const [vehiclecapacity,setVehicleCapacity]=useState('');
const [vehicleType,setVehicleType]=useState('');
// const [captaindata, setcaptainData] = useState({});
    const navigate= useNavigate()
  const { captain, setCaptain}= React.useContext(CaptainDataContext);
 
 
  const submithandler = async (e)=>{
     e.preventDefault();
  const  captainData ={
        email:email,
        password:password,
        fullname :{
        firstname:firstname,
        lastname: lastname
        },
        vehicle : {
          vehicleType: vehicleType,
          capacity: vehiclecapacity,
          color: vehiclecolor,
          plate : vehicleplate

        }
     }

     try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
      
        
        localStorage.setItem('token', data.token);
        navigate('/Captain-Home'); 
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
    
     setEmail('');
     setPassword('');
     setFirstname('');
     setLastname('');
     setVehicleCapacity('');
     setVehiclecolor('');
     setVehicleplate('')
     setVehicleType('')
  }
     
  return (
    <div className=' p-7 h-screen flex justify-between flex-col '>
        <div> 
          <img className=' w-20 mb-7' src="http://pngimg.com/uploads/uber/uber_PNG24.png" alt="" />
           <form onSubmit={(e)=>{
             submithandler(e)
           }}
           className=''>
            <h3 
           className=' text-lg mb-2 font-medium'>What's our Captain's Name</h3>
          <div className='flex gap-4 mb-6 '> 
            <input 
            value={firstname}
            onChange={(e)=>{
              setFirstname(e.target.value)
            }}
           required className=' bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='first name' type="text" />

           <input   
           value={lastname}
           onChange={(e)=>{
            setLastname(e.target.value)
           }}                            
            className=' bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='Last name' type="text" />
          </div>
           <h3 
           className=' text-lg mb-2 font-medium'>What's our Caption's Email</h3>
           <input 
           value={email}
           onChange={(e)=>{
            setEmail(e.target.value)
           }}
           required className=' bg-[#eeeeee] w-full mb-6 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='email@example.com' type="email" />
           <h3 className=' text-lg mb-2 font-medium'>Password</h3>
           <input 
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
           required className=' bg-[#eeeeee] w-full mb-6 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='password' type="password" />

          <h3 className=' text-lg mb-2 font-medium'>Vehicle</h3>

           <div className='flex gap-4 mb-6 flex-wrap '> 
            <div className='flex gap-4'>
              <input 
            value={vehiclecolor}
            onChange={(e)=>{
              setVehiclecolor(e.target.value)
            }}
           required className=' bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='vehicle-color' type="text" />

           <input   
           value={vehicleplate}
           onChange={(e)=>{
            setVehicleplate(e.target.value)
           }}                            
            className=' bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='vehicle-plate' type="text" />
            </div>
            <div className=' flex gap-4'>
              <input 
            value={vehiclecapacity}
            onChange={(e)=>{
              setVehicleCapacity(e.target.value)
            }}
           required className=' bg-[#eeeeee] w-1/2 px-4 py-2 rounded text-lg border placeholder:text-base ' placeholder='vehicle-capacity' type="number" />

          <select
            value={vehicleType}
              onChange={(e) => {
                   setVehicleType(e.target.value);
             }}
                className="bg-[#eeeeee] w-1/2 px-3 py-1 rounded text-lg  placeholder:text-base">

                <option value='Car'>Car</option>
                <option value='Motorcycle'>Motorcycle</option>

                <option value='Auto'>Auto</option>
                
         </select>
            </div>
          </div>
    
           <button type='submit' className='bg-black text-white w-full mb-6 px-4 py-2 rounded text-lg font-semibold '>Create Account</button>
            
           <p>Alreafy have a account? <Link to='/captain-login' className=' text-blue-500 text-base text-center'> Login here</Link></p>
           </form>
        </div>
    
          <div className='pb-3 mt-7' >
             <p className='text-xs '>This site is Protected bt CAPTCHA and the , <span className=' underline font-medium '>Google Privcy Policy</span> and <span className=' underline font-medium '>Terams and Service Apply</span></p>
             </div>
    
    </div>
  
  )
}

export default CpatainSignUp
