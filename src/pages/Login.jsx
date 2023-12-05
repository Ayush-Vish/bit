
import { Link, useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';



import MyContext from "../context/user.context.js"

function Login() { 


  const navigate = useNavigate();

  const { userData , setUserData} = useContext(MyContext)
  const [data, setData] = useState({
    email: "",
    password: "",
    name:""
  });
  function handleUserInput(e) {
    
    const { name, value } = e.target;
    
    setData({
      ...data,
      [name]: value,
    });
  }
  async function loginAccount(e) {
    e.preventDefault();
    if (  !data.email || !data.password  || !data.name) {
      return;
    }
    setUserData({
      ...data, 
      isLoggedIn : true
    })
    console.log(userData);
    

    
   navigate("/");
    setData({
      email: "",
      password: "",
    });
  }










  return (
    <div className=" text-white flex w-[full]  items-center  justify-center gap-3 h-[100vh]   bg-primary-black bg-black ">
      
      <div className= ' sm:flex  flex justify-center items-center xx_small:w-[90%] md:w-[50%]     '>
        <form onSubmit={loginAccount} className="border  xx_small:w-[90%] md:w-[80%]    shadow-primary-pink rounded-lg h-[70vh] flex flex-col justify-center items-center p-6 gap-4   "  >
            <div className='flex flex-col w-full items-center'>
                <h2 className='text-2xl text-yellow-400 font-semibold '>SignIn</h2> 
                <p>
                    Just Some details to get you in ....
                </p>
            </div> 
            <div className='flex flex-col  '>
              <label htmlFor="name"> Name</label>
              <input className='p-2 rounded-md bg-transparent border-b-2 outline-none '  type="text" id='name'  name='name' onChange={handleUserInput}  value={data.name}  placeholder='Enter your Name'  />  
            </div> 
            <div className='flex flex-col  '>
              <label htmlFor="email"> Email</label>
              <input className='p-2 rounded-md bg-transparent border-b-2 outline-none '  type="email" id='email'  name='email' onChange={handleUserInput}  value={data.email}  placeholder='Enter your Email'  />  
            </div>  
            <div className='flex flex-col '>
              <label htmlFor="password"> Password</label>
              <input className='p-2 rounded-md bg-transparent border-b-2 outline-none '  type="password" id='password' name='password' onChange={handleUserInput}  value={data.password}  placeholder='Enter your Password'/>  
            </div> 
            <div>
              <button type="submit" className='bg-primary-grey py-2 px-3 rounded-lg hover:bg-primary-blue transition-all ease-in-out duration-300'>SignIn</button>
            </div>
            <div>
              <p>Dont have a Account ? {" "}  <Link className='text-green-500'  to="/signup" > SignUp </Link></p>
            </div>



        </form> 
      </div>
    </div>
  );
}

export default Login;