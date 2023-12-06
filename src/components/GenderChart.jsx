
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,Tooltip } from "chart.js";


import MyContext from "../context/user.context.js"


import { useContext, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);
function GenderChart ()  {
    
    const {userData ,setUserData} = useContext(MyContext);

    
    async function getData ( ) { 
        const response = await axios.get("https://json-data-red.vercel.app");

        

        const data = await response.data;
        const noOfEmployees = data.length;
        const noOfMales = data.filter( (e) => e.GenderID ==1  ).length ;

        const noOfFemales = noOfEmployees - noOfMales; 
        const marriedEmployees = data.filter((e) => e.MaritalDesc === "Married").length;
        


        
        setUserData({
            ...userData, 
            genderData : { 
                noOfEmployees, 
                noOfFemales, 
                noOfMales,
            }, 
            martialStatus : {
                marriedEmployees,
                noOfEmployees,
                unmarriedEmployees : noOfEmployees  - marriedEmployees
            }, 


        })

    } 

    // Data for gender Data 

    const genderData = {
        labels:["Male" , "Female"] ,
        fontColor : "white" ,
        datasets : [
            {
                label: "Gender Details", 
                data : [userData?.genderData?.noOfMales , userData?.genderData?.noOfFemales], 
                backgroundColor :["blue", "pink"],
                borderWidth : 2, 
            }
        ]
    }

    // Martial Status Data 

    const martialStatus = {
        labels:["Married" , "UnMarried"] ,
        fontColor : "white" ,
        datasets : [
            {
                label: "Martial  Status", 
                data : [userData?.martialStatus?.marriedEmployees, userData?.martialStatus?.unmarriedEmployees], 
                backgroundColor :["purple", "red"],
                borderWidth : 1, 
            }
        ]
    }

    useEffect(()=>{
        getData(); 

    },[]);


    return (
        
        <div className="text-black flex flex-col items-center justify-center gap-4 w-full  ">

            <div className="font-extrabold text-3xl ">
                <h1>
                    Key Performance Indicator
                </h1>
            </div>
            <div className="flex flex-col gap-7">

                <div className="flex flex-col  lg:flex-row items-center justify-center shadow-2xl p-3">
                    <div className="text-3xl"><h2>Gender</h2></div>

                    <div className="w-[300px]">
                        <Pie className="" data={genderData} />
                    </div>
                    <div>
                        <div>Total Number of Employees : {userData?.genderData?.noOfEmployees}</div>
                        <div> Total Number of Males : {userData?.genderData?.noOfMales} </div>
                        <div> Total Number of Females :   {userData?.genderData?.noOfFemales} </div>
                    </div>
                </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center shadow-2xl p-3">
                        <div className="text-3xl "><h2>Martial Status </h2></div>
                        <div className="w-[300px]">
                            <Pie className="" data={martialStatus} />
                        </div>
                        <div>
                            <div>Total Number of Employees : {userData?.genderData?.noOfEmployees}</div>
                            <div> Total Number of Married Employees : {userData?.martialStatus?.marriedEmployees} </div>
                            <div> Total Number of Females :   {userData?.martialStatus?.unmarriedEmployees} </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default GenderChart;
