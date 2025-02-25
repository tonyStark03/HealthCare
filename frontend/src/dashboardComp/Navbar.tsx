import { useNavigate } from "react-router-dom"
function Navbar(){
    const navigate = useNavigate();
    return(
        <>    
            <div className="hidden md:flex md:justify-between  md:items-center 2xl:mx-auto h-16 2xl:w-4/6  sm:px-12 px-2.5">
                <div className="flex ">
                    <div className="hidden md:flex text-2xl font-semibold w-24 ">
                        <div className="">Practro</div>
                    </div>
                    <div className="text-lg hidden xl:flex">
                        <div className="mr-5">Find Doctor</div>
                        <div className="mr-5">Video Consult</div>
                        <div className="mr-5">Surgeries</div>
                    </div>
                </div>
                <div className=" text-base font-light hidden md:flex">
                    <div className="mr-5">For Corporates</div>
                    <div className="mr-5">For Providers</div>
                    <div className="mr-5">Security & help</div>
                    <button className="mr-5 cursor-pointer border px-2 border-blue-400" onClick={() => { navigate("/login") }}>Login/Signup</button>
                </div>
                
            </div>

          
        
        </>
    )
}

export default Navbar