
// import './App.css'
import Cards from './dashboardComp/Card'
import ClinicConsultation from './dashboardComp/ClinicConsultation'
import Navbar from './dashboardComp/Navbar'
import SearchBar from './dashboardComp/SearchBar'
import Specialities from './dashboardComp/Specialities'

function App() {


  return (
    <>
    <div className="">
        <div className="bg-slate-50"><Navbar/></div>
        <div className="border-t-2"></div>
        <div className=""><SearchBar/></div>
        <div className=""><Cards/></div>
        <div className="w-screen h-[353px] mt-20"><Specialities/></div>
        <div className="w-screen h-[349px] mt-[30px]"><ClinicConsultation/></div>
    </div>

    </>
  )
}

export default App
