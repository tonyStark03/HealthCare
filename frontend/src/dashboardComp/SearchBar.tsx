import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
function SearchBar(){
    return(
        <>
            <div className="flex h-20 w-[73rem] mx-auto items-center ">
                <div className="flex border h-10 w-72 items-center">
                    <span className="pt-2 pb-1 pl-1"><CiLocationOn /></span>
                    <input placeholder="Agra" className="pt-2 outline-none pr-5 pb-1 pl-2 mr-[0.5px]"></input >
                </div>
                
                <div className="border h-10 flex items-center ">
                    <span className="pt-2 pb-1 pl-2"><CiSearch/></span>
                    <input placeholder="Search doctors, clinics, hospitals, etc." className="outline-none pt-2 pr-5 pb-1 pl-2 text-sm w-96"></input >
                </div>
            </div>
        </>
    )
}

export default SearchBar