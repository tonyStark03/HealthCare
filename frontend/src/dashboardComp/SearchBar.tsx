import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import specialties from "../JSON/specialties.json";



function SearchBar(){

    const navigate = useNavigate();

    const [city, setCity] = useState("");
    const [citySuggestions, setcitySuggestions] = useState([]);

    const [Speciality, setSpeciality] = useState<string>("");
    const [SpecialitySuggestions, setSpecialitySuggestions] = useState<string[]>([]);

    const cityRef = useRef<HTMLDivElement>(null);
    const specialityRef = useRef<HTMLDivElement>(null);


    useEffect(()=>{
        function handleClickOutside(event: MouseEvent){
            if(cityRef.current && !cityRef.current.contains(event.target as Node)){
                setcitySuggestions([]);
            }

            if(specialityRef.current && !specialityRef.current.contains(event.target as Node)){
                setSpecialitySuggestions([]);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{ document.removeEventListener("mousedown", handleClickOutside)}
    },[])
    


    const fetchCitySuggestion = async(city:string)=>{

    
        if(city.length <2){
            setcitySuggestions([]);
            return;
        }
        try{
            const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`);
            const data = await response.json();
            setcitySuggestions([]);
            setcitySuggestions(data.map((item:any)=>({
                name: item.name,
                display_name: item.display_name
            })));
            // console.log(citySuggestions)
        
        }
        catch(e){
            console.log(e);
        }

    }

    function fetchSpeciality(query:string){
      if(query.length < 2){
        setSpecialitySuggestions([]);
        return;
      }
      
      const filteredSpecialities = specialties.specialties
        .flatMap((category)=>category.fields)
        .filter((item)=> item.toLowerCase().includes(query.toLowerCase()))
      setSpecialitySuggestions(filteredSpecialities);
      
    }


    return(
        <>
            <div className="flex h-20 w-[72rem] mx-auto items-center ">
                <div ref={cityRef} className="flex relative border border-gray-400 focus-within:border-gray-700 h-[2.5rem] w-[19rem] items-center ">
                    <span className="pt-2 pb-1 pl-1"><CiLocationOn /></span>
                    <input  placeholder="Search location" value={city} onChange={(e)=>{setCity(e.target.value); fetchCitySuggestion(e.target.value);}}  className="pt-2 outline-none pr-5 pb-1 pl-2 mr-[1.5px] w-[280px] "></input >
                    {citySuggestions.length > 0 && (
                        <ul className="absolute top-full z-10 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md">

                            {citySuggestions.map((suggestion, index)=><li key={index} className="cursor-pointer border  hover:bg-gray-100 pl-1 " onClick={()=>{
                                setCity(suggestion.name);
                                setcitySuggestions([]);
                            }}>
                                <div className="mb-1">{suggestion.name}</div>
                                <div className="font-light text-sm pb-1">{suggestion.display_name}</div>
                            </li>)}
                        </ul>) 
                        
                    }
                </div>
                
                
                {/* search input */}
                <div ref={specialityRef} className="relative border h-10 border-gray-400 focus-within:border-gray-700 flex items-center ">
                    <span className="pt-2 pb-1 pl-2"><CiSearch/></span>
                    <input placeholder="Search Speciality." value={Speciality} onChange={(e)=>{setSpeciality(e.target.value); fetchSpeciality(e.target.value)}} className="outline-none pt-2 pr-5 pb-1 pl-2  w-96"></input >
                    {SpecialitySuggestions.length > 0 && (
                        <ul className="absolute top-full z-10 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md">
                            {SpecialitySuggestions.map((item, index)=>(
                                <li key={index} 
                                className="cursor-pointer border hover:bg-gray-100 pl-1" 
                                onClick={()=>{setSpeciality(item); setSpecialitySuggestions([]);navigate(`/availableDoctor?items=${item}`)}}>
                                
                                <div className="pt-1 mb-2">{item}</div>
                            </li>))}

                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}




export default SearchBar



