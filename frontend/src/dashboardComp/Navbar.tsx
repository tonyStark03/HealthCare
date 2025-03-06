import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
function Navbar(){
    const navigate = useNavigate();
    const isAuth = localStorage.getItem("token")
    const [auth, setAuth] = useState(false)

    function handleLogout(){
        localStorage.removeItem("token")
        setAuth(false)
        navigate("/")
    }

    function checkAuth(){
        axios.post("http://localhost:3000/api/v1/user/validate-token",{isAuth}).then((response)=>{
            if(response.status === 200){
                setAuth(true)
            }
            else{
                localStorage.removeItem("token")
                setAuth(false)
            }
        }
        ).catch(()=>{    
            setAuth(false)
        })
    }

    useEffect(()=>{
        checkAuth()
        
    }, );
    
    return(
        <>    
            <div className="hidden md:flex md:justify-between  md:items-center 2xl:mx-auto h-16 2xl:w-4/6  sm:px-12 px-2.5">
                <div className="flex ">
                    <div className="hidden md:flex text-2xl font-semibold w-24 ">
                        <div className="cursor-pointer" onClick={()=>{navigate("/")}}>Practro </div>
                    </div>
                    <div className="text-lg hidden xl:flex">
                        <div className="mr-5 cursor-pointer">Find Doctor</div>
                        <div className="mr-5 cursor-pointer">Video Consult</div>
                        <div className="mr-5 cursor-pointer">Surgeries</div>
                    </div>
                </div>
                <div className=" text-base font-light hidden md:flex">
                    <div className="mr-5 cursor-pointer">For Corporates</div>
                    <div className="mr-5 cursor-pointer">For Providers</div>
                    <div className="mr-5 cursor-pointer">Security & help</div>
                    {
                        auth ?(
                        <button className="mr-5 cursor-pointer border px-2 border-blue-400" onClick={handleLogout }>logout</button>)
                        :(
                        <button className="mr-5 cursor-pointer border px-2 border-blue-400" onClick={() => { navigate("/login") }}>Login/Signup</button>)
                    }
                </div>
                
            </div>

          
        
        </>
    )
}

export default Navbar