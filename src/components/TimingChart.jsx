
import { useContext, useEffect } from "react";

import MyContext from "../context/user.context.js"
import { Pie } from "react-chartjs-2";
import axios from "axios";

function TimingChart ( )  {
    const {userData ,setUserData} = useContext(MyContext);

    async function getData( ) {
        const response = await axios.get("https://json-data-red.vercel.app");
        

        const csvjson = await response.data;
       

        const absentZeroDays = csvjson.filter((e)=> e.Absences == 0).length ;
        const absentOneToFive= csvjson.filter((e)=> e.Absences>=1 && e.Absences <=5).length;
        const absentSixToTen= csvjson.filter((e)=> e.Absences>=6 && e.Absences <=10).length;
        const absent11To15= csvjson.filter((e)=> e.Absences>=11 && e.Absences <=15).length;
        const absentMoreThan16= csvjson.filter((e)=> e.Absences>=16 ).length;


        const DaysLateZero = csvjson.filter((e)=> e.DaysLateLast30 == 0 ).length;
        const DaysLateOne = csvjson.filter((e)=> e.DaysLateLast30 == 1 ).length;
        const DaysLateTwo= csvjson.filter((e)=> e.DaysLateLast30 == 2).length;
        const DaysLateMoreThan2 = csvjson.filter((e)=> e.DaysLateLast30 >2 ).length;

        setUserData({
            ...userData, 
            timingData :{
                absentZeroDays, 
                absentOneToFive, 
                absent11To15,
                absentMoreThan16,
                absentSixToTen, 
                DaysLateZero, 
                DaysLateTwo, 
                DaysLateOne,
                DaysLateMoreThan2
            }
        })
    }  
    useEffect(()=> {
        getData() ;

    }, []);
    const absentData = {
        labels:["Zero Days" , "Between 1 to 5" , "Between 6 to 10" , "Between 11 to 15" ,"More than 16"] ,
        fontColor : "white" ,
        datasets : [
            {
                label: "Absent  Details", 
                data : [userData?.timingData?.absentZeroDays , userData?.timingData?.absentOneToFive , userData?.timingData?.absentSixToTen , userData?.timingData?.absent11To15 , userData?.timingData?.absentMoreThan16], 
                backgroundColor :["blue", "pink" , "red" , "yellow", "wheat" ],
                borderWidth : 1, 
            }
        ]
    }
    const lateData = {
        labels:["Zero" , "One" , "Two" , "More than two" ] ,
        fontColor : "white" ,
        datasets : [
            {
                label: "Absent  Details", 
                data : [userData?.timingData?.DaysLateZero , userData?.timingData?.DaysLateOne , userData?.timingData?.DaysLateTwo , userData?.timingData?.DaysLateMoreThan2], 
                backgroundColor :["blue", "pink" , "red" , "yellow"  ],
                borderWidth : 1, 
            }
        ]
    }
    
    





    return ( 
        <div className="text-black flex flex-col items-center justify-center gap-5 w-full  ">

            <div className="font-extrabold text-3xl ">
                <h1>
                    Timing Chart 
                </h1>
            </div>
            <div className="gap-7 flex flex-col ">

                <div className="flex flex-col lg:flex-row items-center justify-center shadow-2xl p-3">
                    <div className="text-3xl "><h2>No. of Days Absent  </h2></div>

                    <div className="w-[300px]">
                        <Pie className="" data={absentData} />

                    </div>
                    <div>
                        <div> Zero days : {userData?.timingData?.absentZeroDays}</div>
                        <div> One - Five days   : {userData?.timingData?.absentOneToFive} </div>
                        <div> Six - Ten Days  :  {userData?.timingData?.absentSixToTen} </div>
                        <div> Eleven -  Fifteen Days  :  {userData?.timingData?.absent11To15} </div>
                        <div> More than 15 days :  {userData?.timingData?.absentMoreThan16} </div>


                    </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center shadow-2xl p-3" >
                        <div className="text-3xl "><h2> Comes late in last 30 days </h2></div>
                        <div className="w-[300px]">
                            <Pie className="" data={lateData} />
                        </div>
                        <div>
                            <div> Zero Day :  {userData?.timingData?.DaysLateZero}</div>
                            <div> One Days : {userData?.timingData?.DaysLateOne} </div>
                            <div> Two Days :   {userData?.timingData?.DaysLateTwo} </div>
                            <div> More than two Days :   {userData?.timingData?.DaysLateMoreThan2} </div>

                        </div>
                    </div>
            </div>
        </div>
    )
}


export default TimingChart;
