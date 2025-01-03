
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import RidePopup from "../Components/RidePopup";
import CaptainDetails from "../Components/CaptainDetails";


const CaptainHome = () => {
  return (
    <div className=' h-screen overflow-hidden'>
    <div>
      <img className="w-[20vw] absolute left-[5vw] top-[5vw]" src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png" alt="" />
    <Link  className=' flex absolute right-2 top-2  w-10 h-10 items-center justify-center bg-white rounded-full '>
      <RiLogoutBoxRLine style={{height : '20px', width : '20px'}}/>
    </Link>
    </div>
    <div className=' h-3/5'>
    <img className=' w-full h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map image" />
    </div>
    <div className=' fixed w-full z-10 bg-white   px-3 pt-[0.5rem] pb-6 bottom-0   rounded-tr-lg rounded-tl-lg'>
             <CaptainDetails/>
          </div>
    
    <div className=' fixed w-full z-10 bg-white   px-3 pt-[0.5rem] pb-6 bottom-0   rounded-tr-lg rounded-tl-lg'>
             <RidePopup/>
          </div>
  </div>
  )
}

export default CaptainHome
