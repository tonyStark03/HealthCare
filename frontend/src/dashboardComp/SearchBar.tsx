import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { set } from "zod";


function SearchBar(){
    const [city, setCity] = useState("");
    const [suggestions, setSuggestions] = useState([]);


    const fetchCitySuggestion = async(city:string)=>{

    
        if(city.length <2){
            setSuggestions([]);
            return;
        }
        try{
            const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`);
            const data = await response.json();
            setSuggestions([]);
            setSuggestions(data.map((item:any)=>({
                name: item.name,
                display_name: item.display_name
            })));
            // console.log(suggestions)
        
        }
        catch(e){
            console.log(e);
        }

    }


    return(
        <>
            <div className="flex h-20 w-[72rem] mx-auto items-center ">
                <div className="flex relative border border-gray-400 focus-within:border-gray-700 h-[2.5rem] w-[19rem] items-center ">
                    <span className="pt-2 pb-1 pl-1"><CiLocationOn /></span>
                    <input  placeholder="Search location" value={city} onChange={(e)=>{setCity(e.target.value); fetchCitySuggestion(e.target.value);}}  className="pt-2 outline-none pr-5 pb-1 pl-2 mr-[1.5px] w-[280px] "></input >
                    {suggestions.length > 0 && (
                        <ul className="absolute top-full z-10 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md">

                            {suggestions.map((suggestion, index)=><li key={index} className="cursor-pointer border  hover:bg-gray-100 pl-1 " onClick={()=>{
                                setCity(suggestion.name);
                                setSuggestions([]);
                            }}>
                                <div className="mb-1">{suggestion.name}</div>
                                <div className="font-light text-sm pb-1">{suggestion.display_name}</div>
                            </li>)}
                        </ul>) 
                        
                    }
                </div>
                
                
                {/* search input */}
                <div className="border h-10 border-gray-400 focus-within:border-gray-700 flex items-center ">
                    <span className="pt-2 pb-1 pl-2"><CiSearch/></span>
                    <input placeholder="Search doctors, clinics, hospitals, etc." className="outline-none pt-2 pr-5 pb-1 pl-2  w-96"></input >
                </div>
            </div>
        </>
    )
}




export default SearchBar