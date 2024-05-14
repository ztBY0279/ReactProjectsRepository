//import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
function TodoList(props) {
    const [isEdit,setIsEdit] = useState(false);
    const [editValue,setEditValue] = useState(props.item);
    //const inputRef = useRef(null);
    function handleClickDelete(items,index,setItems){
        const deleteIndex = items.findIndex((item,id)=>{
            console.log('the valeu of id is ',id);
            return id === index;
        });
        console.log("the value of index is ",index);
        items.splice(deleteIndex, 1);
        console.log('the value of deleteIndex is ',deleteIndex);
        setItems([...items]);
    }

    function handleClickEdit(){
       setIsEdit(true);
       //inputRef.current.focus();
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
export default TodoList