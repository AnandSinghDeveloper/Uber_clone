import React, { useRef, useState } from 'react'
import { RiArrowUpWideFill } from "react-icons/ri";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import axios from 'axios';
import LocationPanal from '../Components/LocationPanal';
import ConfirmRide from '../Components/ConfirmRide';
import VehiclePanal from '../Components/VehiclePanal';
import LookingForDriver from '../Components/LookingForDriver';
import WaittingForDriver from '../Components/WaittingForDriver'
import { SocketContext } from '../Context/Socketcontext';
import { useContext } from 'react';
import { UserDataContext} from '../Context/UserContext'
import { useEffect } from 'react';



const HomeScreen = () => {
   const [pickUP , setPickup]= useState('');
   const [destination , setDestination] = useState('');
   const [pickupSuggestions , setPickupSuggestions] = useState([]);
   const [destinationSuggestions , setDestinationSuggestions] = useState([]);
   const [activeField,setActiveField]=useState(null);
   const [panelOpen , setPanelOpen] = useState(false);
   const [vehiclePanalOpen,setvehiclePanalOpen]=useState(false);
   const [ confirmRidePanal , setConfirmRidePanal] = useState(false);
   const [vehicleFound,setVehicleFound]=useState(false);
   const [waittingDriver,setWaittingDriver]=useState(false)
   const [fare,setFare]=useState({});
   const [vehicleType,setvehicleType]=useState(null)
   const panalref = useRef(null);
   const panacloselref = useRef(null);
   const searchlocation = useRef(null);
   const vehiclePanalOpenRef = useRef(null);
   const confirmRidePanalRef = useRef(null);
   const vehicleFoundRef = useRef(null);
   const WaittingForDriverRef = useRef( null);


   const { socket } = useContext(SocketContext)
   const { user } = useContext(UserDataContext)

 
   

   useEffect(() => {
       socket.emit("join", { userType: "user", userId: user._id })
       console.log(user);
       
   }, [ user ])


//    socket.on('ride-confirmed', ride => {


//     setVehicleFound(false)
//     setWaittingDriver(true)
//     setRide(ride)
// })

// socket.on('ride-started', ride => {
//     console.log("ride")
//     setWaittingDriver(false)
//     navigate('/riding', { state: { ride } }) 
// })


   const handlePickupChange = async (e) => {
      setPickup(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggesttions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          
        })
        setPickupSuggestions(response.data)
        
        
      
    } catch(error){
      console.log(error);
      
       throw error
    }
    
  }

const handleDestinationChange = async (e) => {
    setDestination(e.target.value)
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggesttions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
    } catch(error) {
        throw error
    }
}

 const  FindTrip = async ()=>{
  if(!pickUP||!destination){
    setvehiclePanalOpen(false)
  setPanelOpen(true)
  alert('Please enter your Trip')
  }else{ 
    setvehiclePanalOpen(true)
  setPanelOpen(false)
  }
   
   const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`,{
    params:{pickUP,destination},
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
   })
    setFare(response.data)
   console.log(response.data);
   

 }

 const CreateRide = async ()=>{
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`,{
      pickUP,
      destination,
      vehicleType,
    },
      { headers : {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }


    })

    console.log(response.data);
    
 }
  

  const submithandler = (e)=>{
    e.preventDefault();
  }

  useGSAP(function(){
     if(panelOpen){
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
  },[panelOpen,panacloselref])

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


  useGSAP(function(){
    if(confirmRidePanal){
      gsap.to(confirmRidePanalRef.current,{
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePanalRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[confirmRidePanal])

  useGSAP(function(){
    if(waittingDriver){
      gsap.to(WaittingForDriverRef.current,{
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(WaittingForDriverRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[waittingDriver])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform : 'translateY(0)'
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform : 'translateY(100%)'
      })
    }
  },[vehicleFound])
  
  
  return (
    <div className=' h-screen relative overflow-hidden'>
        
      <img className=' w-[20vw] absolute left-[5vw] top-[5vw]' src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />

        <div  className=' w-screen h-screen'>
               <img className=' w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map image" />
        </div>

          <div  className=' w-full absolute flex flex-col justify-end h-screen bottom-0 '>
       
          
            <div ref={searchlocation} className=' h-[35%] pt-9  pl-5 pr-5 bg-white relative rounded-tr-xl  rounded-tl-xl'>
            <div ref={panacloselref} onClick={()=>{setPanelOpen(false)}} className=' flex justify-center  rotate-0 opacity-0 '>  < RiArrowUpWideFill style={{width : '30px' , height : '30px', color :  "rgb(209 213 219 / var(--tw-border-opacity, 1))" }} /> </div>
            <h4 className=' text-2xl font-semibold'> Find Your Trip</h4>
            <div className="line h-14 w-1 rounded top-[36vw] bg-gray-800 absolute left-10 "></div>
             <form 
             onSubmit={(e)=>{
              submithandler(e)
             }}
             >
                 <input 
                 onClick={() => {
                  setPanelOpen(true)
                  setActiveField('pickup')
                 }}
                   value={pickUP}
                   onChange={
                    handlePickupChange
                   }
                 className=' w-full bg-[#eeeeee] px-8 py-3 text-base rounded mt-[5vw]' type="text" placeholder=' Add your pick-up location' />
                 <input 
                  onClick={() => {
                    setPanelOpen(true)
                    setActiveField('destination')
                  }}
                  value={destination}
                  onChange={
                    handleDestinationChange
                  }
                 className='w-full bg-[#eeeeee] px-8 py-3 text-base rounded mt-[3vw]' type="text" placeholder=' Enter your destination ' />
                <button onClick={FindTrip} className=' capitalize w-full bg-zinc-800 text-white font-semibold text-lg rounded mt-4 py-1'>Find trip</button>
                 
             </form>
            </div>
            <div ref={panalref}  className=' bg-white   '>
                <LocationPanal  suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setvehiclePanalOpen}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}  />
            </div>
          </div>
          <div ref={vehiclePanalOpenRef} className=' fixed w-full z-10 bg-white px-3 pt-[0.5rem] pb-6 bottom-0 -translate-x-full rounded-tr-lg rounded-tl-lg'>
             <VehiclePanal setvehiclePanalOpen={setvehiclePanalOpen}
               SelactVehicle ={setvehicleType}
              fare={fare}
               setConfirmRidePanal={setConfirmRidePanal}/>

          </div>
          <div ref={confirmRidePanalRef} className=' fixed w-full z-10 bg-white   px-3 pt-[0.5rem] pb-6 bottom-0 -translate-x-full rounded-tr-lg rounded-tl-lg'>
             <ConfirmRide setConfirmRidePanal={setConfirmRidePanal}
              setvehiclePanalOpen={setvehiclePanalOpen}
              CreateRide={CreateRide}
              pickup={pickUP}
              fare ={fare}
              vehicleType ={vehicleType}
              destination={destination}
               setVehicleFound={setVehicleFound} />
          </div>
          <div ref={vehicleFoundRef} className=' fixed w-full z-10 bg-white    pt-[0.5rem] pb-6 bottom-0 -translate-x-full rounded-tr-lg rounded-tl-lg'>
               <LookingForDriver setVehicleFound={setVehicleFound}
                pickup={pickUP}
                fare ={fare}
                vehicleType ={vehicleType}
                destination={destination}
               />

          </div>
          <div ref={WaittingForDriverRef}  className=' fixed w-full z-10 bg-white   px-3 pt-[0.5rem] pb-6 bottom-0 -translate-x-full  rounded-tr-lg rounded-tl-lg'>
             <WaittingForDriver setWaittingDriver={setWaittingDriver} /> 
          </div>
    </div>
  )
}

export default HomeScreen
