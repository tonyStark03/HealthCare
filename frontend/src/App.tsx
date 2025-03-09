import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom"

import Dashboard from "./dashboardComp/Dashboard"


import ActiveState from "./dashboardComp/Login/ActiveState"
import Navbar from "./dashboardComp/Navbar"
import AvailableDoctor from "./VideoCalling/AvailableDoctor"


function App() {


  return (
    <>
    <BrowserRouter>  
      
      
    
      {/* Navbar is placed outside Routes, so it appears on all pages */}
      <Navbar />
      

      {/* Define routes inside Routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<ActiveState />} />
        <Route path="/availableDoctor" element={<AvailableDoctor/>}/>
 
      </Routes>
    
      
    </BrowserRouter>


    

    </>
  )
}

export default App
