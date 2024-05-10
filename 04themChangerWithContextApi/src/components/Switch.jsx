//import React from 'react'
import { Switch } from "@mui/material";
import { useContext } from 'react';
import MyContext from '../context/MyContext';
function SwitchComponent() {
    console.log('the switch component is called:');
     const {setThem} = useContext(MyContext);
    function handleChange(event){
        console.log('the event is changed',event.target.checked);
        setThem(event.target.checked ? "dark" : "light");
      }
  return (
    
    <Switch
      // checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
   />
  
  )
}

export default SwitchComponent;