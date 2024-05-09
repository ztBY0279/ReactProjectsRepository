//import {MyContext} from "./MyContext"
//import MyComponent1 from "./MyComponent1"
//import MyComponent121 from "./components/MyComponet121"
import { useState } from "react"
import UserContextProvider from "./components/context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"
//import Home from "./components/Home/Home"
function App() {
  //const name = "Bharat";

  const [text,setText] = useState("Bharat")
  return (
   <div>
     <h1 className="bg-blue-500 text-white">Hello World {text}</h1>
     {/* <MyContext.Provider value={{text,setText}}>
       <MyComponent121/>
       <Home/>
     </MyContext.Provider> */}
    
     {/* <MyComponent state = {{text,setText}}/> */}
     <UserContextProvider>
       <Login/>
       <Profile/>
     </UserContextProvider>
   </div>
  )
}

export default App
