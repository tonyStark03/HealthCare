import Cards from './Card'
import ClinicConsultation from './ClinicConsultation'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Specialities from './Specialities'

function Dashboard() {
  return (
    <>
      {/* <div className="bg-slate-50"><Navbar/></div> */}
      <div>
          
          
          <div className=""><SearchBar/></div>
          <div className=""><Cards/></div>
          <div className="w-screen h-[353px] mt-20"><Specialities/></div>
          <div className="w-screen h-[349px] mt-[30px]"><ClinicConsultation/></div>
      
      </div>
    </>
  );
}
export default Dashboard;