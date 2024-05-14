import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import axios from "axios"
import PropTypes from "prop-types";
//import axios from 'axios';
function TodoWithApi(props) {
    const [isEdit,setIsEdit] = useState(false);
    const [editValue,setEditValue] = useState(props.item);
   
    
    function handleClickDelete(items,index,setItems){
        const deleteIndex = items.findIndex((item,id)=>{
            console.log('the valeu of id is ',id);
            return id === index;
        });
        console.log("the value of index is ",index);
        items.splice(deleteIndex, 1);
        console.log('the value of deleteIndex is ',deleteIndex);

        axios.put("http://localhost:3000/todo",{
            "arr":[...items]
        })
        .then((response)=>{
            console.log('the response is ',response);
            return response.data;
        })
        .then((data)=>{
            console.log('the data is ',data);
        })
        .catch((error)=>{
            console.log('the error is ',error);
        })

        setItems([...items]);
    }

    function handleClickEdit(){
       setIsEdit(true);
     
    }

    function handleChange(event){
        console.log('the value of event is ',event.target.value);
        setEditValue(event.target.value);
    }

    function handleClickSubmit(){
        setIsEdit(false);
        console.log('the value of props.index is ',props.items[props.index]);
        props.items[props.index] = editValue;
        console.log('the value of props.index is after edit ',props.items[props.index]);
        axios.put("http://localhost:3000/todo",{
            "arr":[...props.items]
        })
        .then((response)=>{
            console.log('the response is ',response);
            return response.data;
        })
        .then((data)=>{
            console.log('the data is ',data);
        })
        .catch((error)=>{
            console.log('the error is ',error);
        })
        props.setItems([...props.items]);
    }
  
  return (
   <>
    {
       isEdit ?  <><input 
                 type='text'
                 className="w-full py-2 px-4 outline-none bg-gray-200"
                 placeholder='edit the todoItem'
                 value={editValue}
                 onChange={handleChange}
                //  ref={inputRef}
                 /> 
                 <CheckIcon className="cursor-pointer text-blue-500" onClick={()=>{handleClickSubmit()}} /> 
                 </>
       : <li className="py-2 px-2 flex items-center justify-between" key={props.index}>  {props.item}</li>
    }
    {/* <li className="py-2 px-2 flex items-center justify-between" key={props.index}>  {props.item}</li> */}
    {
        (!isEdit && 
            <AddIcon onClick = {()=>{handleClickEdit()}} className="cursor-pointer" />
        )
    }
    <DeleteIcon  className="cursor-pointer" onClick={()=>{handleClickDelete(props.items,props.index,props.setItems)}} />
   </> 
  )
}
// apply prop validation using PropTypes

TodoWithApi.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
};
export default TodoWithApi