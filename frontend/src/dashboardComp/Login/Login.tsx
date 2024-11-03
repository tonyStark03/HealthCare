import { useState } from "react"


function Login() {
    const [activeTab, setActiveTab] = useState("login")
  return (
    <>
    <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center m-[10px] w-2/5">
            <div className="flex text-sm">
                <div className="px-5">
                    <div
                        onClick={() => setActiveTab("login")}
                        className={`pb-2 cursor-pointer ${
                            activeTab === "login"
                                ? "text-blue-500 border-b-2 font-semibold border-blue-500 -mb-0.5"
                                : "text-gray-500"
                        }`}
                    >
                        Login
                    </div>
                </div>
                <div className="px-5">
                    <div
                        onClick={() => setActiveTab("register")}
                        className={`pb-2 cursor-pointer ${
                            activeTab === "register"
                                ? "text-blue-500 border-b-2 font-semibold border-blue-500 "
                                : "text-gray-500"
                        }`}
                    >
                        Register
                    </div>
                </div>
            </div>
        </div>
        {/* Gray border */}
        <div className="border w-2/5 "></div>
    </div>
</>

  )
}

export default Login