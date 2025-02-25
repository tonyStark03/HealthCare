import { BrowserRouter as Router, Route, BrowserRouter, Routes } from "react-router-dom"

import Dashboard from "./dashboardComp/Dashboard"

import Login from "./dashboardComp/Login/Login"
import Register from "./dashboardComp/Login/Register"
import ActiveState from "./dashboardComp/Login/ActiveState"


function App() {


  return (
    <>
    <BrowserRouter>  
      
      
    
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<ActiveState/>}/>
        
        
      </Routes>
      
    </BrowserRouter>


    

    </>
  )
}

export default App
