import Navbar from "./components/Navbar";
import { Box } from "@mui/material";
import CardComponent from "./components/Card";
import BottomNavigationMUI from "./components/BottomNavigationMUI";
import BasicTabs from "./components/BasicTabs";
import EnhancedTable from "./components/EnhancedTable";
import AccordionUsage from "./components/AccordianUsage";
import CalendarComponent from "./components/Calendar";
import ColorPickerComponent from "./components/ColorPicker";
import DatePickerComponent from "./components/DatePicker";
import FormComponent from "./components/Form";
import MyContext from "./context/MyContext";
import { useState,useEffect } from "react";
import SwitchComponent from "./components/Switch";
import { Switch } from "@mui/material";
function App() {
  const [them,setThem] = useState("light");
  //const [theme,setTheme] = useState("light");
  useEffect(()=>{
        document.querySelector("html").classList.remove("light","dark");
        document.querySelector("html").classList.add(them);
  },[them])
 
 

  return (
   <>
   {/* <Switch onChange={handleChange}/> */}
     <MyContext.Provider value={{them,setThem}}>
     <div className="bg-white dark:bg-gray-800">
   
    <Navbar/>
    <div className="mt-2"/>
  
   <SwitchComponent/><br/>
   

   
    <Box sx={{ display: 'flex',justifyContent:'center',flexWrap:'wrap',gap:'20px' }}>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
    </Box>
  
      <BottomNavigationMUI/>
      <BasicTabs/>
      <EnhancedTable/>
      <AccordionUsage/>
      <CalendarComponent/>
      <ColorPickerComponent/>
      <DatePickerComponent/>
      <FormComponent/>
     </div>
  </MyContext.Provider>


   </>
  )
}

export default App
