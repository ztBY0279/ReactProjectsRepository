//import React from 'react'
//import ResponsiveAppBar from "../Navigation/MaterialUinavbar"
import Hero from "./Hero"
import Blog from "./Blog"
import { MyContext } from "../../MyContext"
import { useContext } from "react"
function Home() {
  const {text}=useContext(MyContext)
  console.log("the value of context is ",text)
  return (
   <div>
   <h1 className="text-center bg-orange-500 text-white font-bold text-4xl">hello {text}  </h1>
     <Hero/>
     <Blog/>
    {/* <ResponsiveAppBar/> */}
   </div>
  )
}

export default Home