import { useContext } from "react"
import { MyContext } from "./MyContext.js";

export default function MyComponent1() {
    const {text,setText} = useContext(MyContext);

    console.log('the value of text in Mycomponent is ',text);
    console.log('the value of props', setText);
  return (
   <div>
     <div>MyComponent and passed props vlaue is {text}</div>
    <button onClick={()=>{setText("Bharat yadav")}}>click me</button>
   </div>
  )
}