import { useState} from "react"
//import TodoList from "./components/TodoList";
import TodoWithApi from "./TodoWithApi";
import axios from "axios";
import { useEffect } from "react";
import PropTypes from "prop-types";
function Advance() {
  const [todoInput,setTodoInput] = useState("");
  const [items,setItems] = useState([]);
 
 useEffect(()=>{
    axios.get("http://localhost:3000/todo")
    .then((Response)=>{
      console.log('the value of response is ',Response);
      return Response.data;
    })
    .then((data)=>{
         console.log('the data is ',data);
         setItems(data.arr);
    })
    .catch((err)=>{
      console.log('the value of error is ',err);
    })
 },[])

 


  const handleClick = ()=>{
    console.log('the value of items array si ',items);
      axios.put("http://localhost:3000/todo",{
   
      "arr": [todoInput,...items]
    })
    .then((Response)=>{
    console.log('the value of response is ',Response);
    //return Response.data;
    if(Response.status){
        setItems([todoInput,...items]);
        setTodoInput("");
    }
    
  })
  .catch((error)=>{
    console.log('the value of error is ',error);
    alert("Server Error whilte creating the todo list");
  })
   
    
  }

  
  return (
  <>
    <div className="bg-blue-500 text-white text-center p-2">To do List With Api</div>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-20">
          <div className="flex items-center border-b border-gray-200">
            <input
             type="text"
             className="w-full py-2 px-4 outline-none bg-gray-200"
             placeholder="Enter your text here"
             value={todoInput}
             onChange={(e)=>setTodoInput(e.target.value)}
             />
            <button onClick={handleClick} className="py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">Add</button>
           
          </div>
          
     </div>
     {
      items.length>0 && (
        <div className="mt-2 p-2  max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-auto ">
       <ul className="divide-y divide-gray-300">
          {
            items.map((item,index)=><TodoWithApi key = {index} index = {index} item = {item} items = {items} setItems = {setItems} />)
          }
          
          
       </ul>
    </div>
      )
     }
      

  </>
  )
}
// apply the props validation

Advance.defaultProps = {
  items:[]
}

Advance.propTypes = {
  items:PropTypes.arrayOf(PropTypes.object)
}

export default Advance