import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom"

import Dashboard from "./dashboardComp/Dashboard"
import Navbar from "./dashboardComp/Navbar"
import Register from "./dashboardComp/Login/Register"
import Login from "./dashboardComp/Login/Login"


function App() {


  return (
    <>
    <BrowserRouter>  
      <div className="bg-slate-50"><Navbar/></div>
      <div className="border"></div>
      <Routes>
        <Route path="Dashboard" element={<Dashboard/>}/>
        {/* <Route path="Register" element={<Register/>}/> */}
        <Route path="Login" element={<Login/>}/>
      </Routes>
      
    </BrowserRouter>

    

    </>
  )
}

export default App
