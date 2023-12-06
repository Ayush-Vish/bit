import { useContext } from "react";

import MyContext from "../context/user.context.js"
import { useNavigate } from "react-router-dom";


function HomePage ( )  {
    const navigate = useNavigate();

    const  {userData , setUserData} = useContext(MyContext);
    const  {name , isLoggedIn} = userData;

    console.log(name , isLoggedIn);
    return ( 
        <div className="" >
            <nav className="w-[100%] flex justify-between items-center p-7 bg-black text-white ">
                <div className="text-[30px] font-bold"> Some logo </div>
                <div className="flex justify-center items-center gap-3  ">
                    {
                        isLoggedIn && (
                            <div className="text-[22px]  font-bold  ">
                                {name}
                            </div>
                        )
                    }
                    
                    {
                        isLoggedIn  ? (
                            <button className="p-2 font-bold rounded-md text-black bg-yellow-400 transition-all ease-in-out duration-300 hover:bg-yellow-300">
                                LOGOUT
                            </button>
                        ):  ( 
                            <button  onClick={() => navigate("/login")} className="p-2 font-bold rounded-md text-black bg-yellow-400 transition-all ease-in-out duration-300 hover:bg-yellow-300">
                                LOGIN
                            </button>
                        )
                    }
                    
                </div>
            </nav>
            <main className="w-[100%] p-4 bg-blue-300  flex justify-between items-center " >
                <div className="w-[200px] bg-yellow-300 rounded-md h-[86vh]  p-3 "  >
                    <div className="[font-size:_clamp(1em,1vw,10em)]"  >DASHBOARD</div>
                    
                </div>
                {
                    !isLoggedIn ? (
                        <div className="w-[70%] bg-gray-500  rounded-md p-10  " >
                            <h1>
                                Login to  See Statistics ! 
                            </h1>
                        </div>
                    ) : ( 

                        <div className="w-[70%] bg-gray-500  rounded-md p-10  " >

                        </div>
                    )
                }
            </main>
        </div>
    )




}




export default HomePage;
