import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-min bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        {/* Illustration */}
       
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-4">
          Login
        </h2>

        {/* Input Fields */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">
            Email ID
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>

        {/* Remember Me and OTP */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me for 30 days
            </label>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" 
        onClick={()=>{
            axios.post("http://localhost:3000/api/v1/user/signin",{email:email,password: password}).then((responses)=>{
                localStorage.setItem("token","Bearer " + responses.data.token)
                Navigate("/")
            }).catch((e)=>{
                alert(e.response.data.message)
            })
          }}>
          Login
          
        </button>

        
      </div>
    </div>
  );
};

export default Login;