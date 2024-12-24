import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import UserLogin from "./Pages/UserLogin"
import UserSignUp from "./Pages/UserSignUp"
import CaptainLogin from "./Pages/CaptainLogin"
import CpatainSignUp from "./Pages/CpatainSignUp"




function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/Signup" element={<UserSignUp/>}/>
        <Route path="/captain-login" element={<CaptainLogin/>}/>
        <Route path="/captain-signup" element={<CpatainSignUp/>}/>
      </Routes>  
    </>
  )
}

export default App
