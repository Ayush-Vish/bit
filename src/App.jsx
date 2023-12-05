import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import MyContext from "./context/user.context.js"
import HomePage from "./pages/HomePage.jsx"
import { useState } from "react"



function App() { 
  const [userData , setUserData] = useState({
    name: "", 
    email :"",
    isLoggedIn :"", 
    data :  {}
  })

  return (
    <MyContext.Provider value={{userData ,setUserData} } >
      <Routes>
        <Route path="/login" element={<Login/>} /> 
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </MyContext.Provider>
  )
}

export default App
