

import { useEffect, useState } from "react";
import axios from "axios";

import { useSearchParams } from "react-router-dom";



const AvailableDoctor = () => {


  const [searchParams] = useSearchParams();
  const items = searchParams.get("items");  //
    

    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{

      
      axios.get(`http://localhost:3000/api/v1/user/specialities?items=${items}`).then((response)=>{
        setDoctors(response.data)
        setLoading(false)
      

        
      }).catch((e)=>{
        console.log(e);
        setError(true)
      })
      .finally(()=>{
        setLoading(false)
      })
    },[])
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    
    return (
      <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">Available Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.length > 0 ? (
          doctors.map((doctor) => <DoctorCard key={doctor.name} {...doctor} />)
        ) : (
          <p>No doctors available</p>
        )}
      </div>
    </div>
    )
}

export default AvailableDoctor;






const DoctorCard = ({ name, image, field, experience, city, fees, rating, reviews }) => {
  return (
    <div className=" text-black rounded-lg shadow-lg p-5 flex items-center space-x-4">
      <img
        src={image}
        // alt={name}
        className="w-20 h-20 rounded-full border-2 border-gray-400"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{field}</p>
        <p className="text-sm">{experience} years experience</p>
        <p className="text-sm">{city}</p>
        <p className="text-sm">Consultation: {fees}</p>
        <p className="text-sm text-green-400">⭐ {rating} ({reviews.length} reviews)</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        Book Clinic Visit
      </button>
    </div>
  );
};



