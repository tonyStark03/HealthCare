import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const ActiveState=()=>{

    const [active, setActive] = useState(false);    

    return(
        
        <div className="flex flex-col items-center justify-center ">
            <div className="flex m-3 items-center justify-center h-min ">
                    <button onClick={() => setActive(true)} className={active ? "font-bold pr-8" : "pr-8"}>Login</button>
                    <button onClick={() => setActive(false)} className={!active ? "font-bold" : ""}>Register</button>
            </div>
                

            <div className="border w-2/6 border-t-2"></div>
            <div className="flex items-center mt-8 justify-center">
                {active ? <Login/> : <Register/>}
            </div>
        </div>
    )

}

export default ActiveState;