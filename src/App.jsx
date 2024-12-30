import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import UserLogin from "./Pages/UserLogin"
import UserSignUp from "./Pages/UserSignUp"
import CaptainLogin from "./Pages/CaptainLogin"
import CpatainSignUp from "./Pages/CpatainSignUp"
import HomeScreen from "./Pages/HomeScreen"
import UserProtectedWrapper from "./Pages/UserProtectedWrapper"
import Userlogout from "./Pages/Userlogout"
import CaptainHome from "./Pages/CaptainHome"
import CaptainProtectedWrapper from "./Pages/CaptainProtectedWrapper"
import CpatianLogout from "./Pages/CpatianLogout"




function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/Signup" element={<UserSignUp/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CpatainSignUp/>}/>
        <Route path="/HomeScreen" element={
          <UserProtectedWrapper>
            <HomeScreen/>
          </UserProtectedWrapper>
        }/>
        <Route path="/logout" element={
          <UserProtectedWrapper>
            <Userlogout/>
          </UserProtectedWrapper>
        }/>
        <Route path="/Captain-Home" element={
          <CaptainProtectedWrapper>
            <CaptainHome/>
          </CaptainProtectedWrapper>
        }/>
        <Route path="/captain-logout" element={
          <CaptainProtectedWrapper>
            <CpatianLogout/>
          </CaptainProtectedWrapper>
        }/>
      </Routes>  
        
      
    </>
  )
}

export default App
