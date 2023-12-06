import { useContext, useState } from "react";

import MyContext from "../context/user.context.js"
import { useNavigate } from "react-router-dom";
import UserChart from "../components/GenderChart.jsx";
import GenderChart from "../components/GenderChart.jsx";
import TimingChart from "../components/TimingChart.jsx";


function HomePage ( )  {
    const navigate = useNavigate();
    let [ page, setPage] = useState(1);

    const  {userData , setUserData} = useContext(MyContext);
    let  {name , isLoggedIn} = userData;
    isLoggedIn = true;


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
                            <button onClick={(e) => {
                                setUserData({
                                    name : "", 
                                    isLoggedIn : false, 
                                    email : "", 
                                    genderData :{}, 
                                    martialStatus :{}

                                })
                                
                            }}  className="p-2 font-bold rounded-md text-black bg-yellow-400 transition-all ease-in-out duration-300 hover:bg-yellow-300">
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
            <main className="w-[100%] p-4 bg-blue-100  flex justify-between items-center " >
                <div className="w-[200px] h-[85vh] bg-yellow-200 text-black rounded-md     p-3 text-center  flex flex-col "  >
                    
                    

                        <div className="font-extrabold"  >DASHBOARD</div>
                        <  hr    />
                        <div className="flex  flex-col  gap-8 mt-6">

                            <div  > <   button   onClick={(e) => setPage(1)} >Gender and Martial Status </button> </div>
                            <div><button onClick={(e) => setPage(2)} > Professional Status </button></div>
                            <div><button onClick={(e) => setPage(3)} > Timing Status  </button></div>
                        
                        </div>
                </div>
                {
                    !isLoggedIn ? (
                        <div className="w-[70%] bg-gray-500  rounded-md p-10  " >
                            <h1>
                                Login to  See Statistics ! 
                            </h1>
                        </div>
                    ) :  page ==1 ?  ( 
                        <div className="w-[70%] bg-gray-100 rounded-md p-10  " >
                            <GenderChart/>
                        </div>  


                    ) : page==2 ? ( 
                        <div>
                            Page2 
                        </div>
                    ) : page==3 ? ( 
                        <div className="w-[70%] bg-gray-100  rounded-md p-10 " >
                            <TimingChart/>
                        </div>
                    ) :(
                        <div>
                            Unexpected PAge 
                        </div>
                    )
                }
            </main>
        </div>
    )




}




export default HomePage;
