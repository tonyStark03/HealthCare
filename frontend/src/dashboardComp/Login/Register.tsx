import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const Navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-4">
          Join Practo
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Email ID</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Email ID"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">
            Mobile Number
          </label>
          <div className="flex">
            <select className="border border-gray-300 rounded-l-md p-2">
              <option>+91 (IND)</option>
              <option>+1 (USA)</option>
              <option>+44 (UK)</option>
            </select>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your mobile number"
              onChange={(e)=>{setPhone(e.target.value)}}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">City</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your City"
            onChange={(e)=>{setCity(e.target.value)}}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">
            Create Password
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>

        <div className="flex items-center mb-4">
          <input type="checkbox" id="offers" className="mr-2" />
          <label htmlFor="offers" className="text-sm text-gray-600">
            Receive relevant offers and promotional communication from Practo
          </label>
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          onClick={()=>{
            axios.post("http//localhost:3000/api/v1/user/signup",{name,email,phone, password,city})
            .then((response)=>{
              localStorage.setItem("token",response.data.token)
              Navigate("/dashboard")
            }).catch(()=>{
              alert("invalid credentials")
            })
          }}
        
        >
          Register
        </button>

        
      </div>
    </div>
  );
};

export default Register;