//import React from 'react'

import { useEffect } from "react"
import { useState } from 'react'

export default function UseEffectHook() {
    const [click,setClick] = useState(false);
    console.log('the value of useState hook is ',useState(true));
    useEffect(()=>{
      console.log('the useEffect is executed',Math.random());
    },[click])
    console.log('the value of useEffect is ',useEffect(()=>{console.log('the effect callback')}));

    const useEffecting = useEffect(()=>{
      console.log('the useEffect is assigned to a varialbe', Math.random());
    })
    console.log('the value of useEffecting is ',useEffecting);

  return (
    <div>
      <h1>hello useEffect hook</h1>
      <button className="bg-blue-500 rounded p-2" onClick={()=>{setClick(!click)}}>click me to Effect useEffect</button>
    </div>
  )
}
