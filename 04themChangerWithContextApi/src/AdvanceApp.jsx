import { useEffect, useState } from 'react'
import './App.css'
// import { ThemeProvider } from './contexts/theme'
// import ThemeBtn from './components/ThemeBtn'
// import Card from './components/Card'
import { ThemeProvider } from './context/Theme';
import ThemeBtn from './components/ThemeBtn';
import AdvaceCard from './components/AdvanceCard';
import { Switch } from '@mui/material';
function AdvanceApp() {
  const [themeMode, setThemeMode] = useState("light");
  //const [theme,setTheme] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  const handleChange = () => {
    setThemeMode(themeMode==="light"?"dark":"light");
  }

  return (
    <div>
      <Switch onChange={handleChange}/>
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <AdvaceCard />
              </div>
          </div>
      </div>
    </ThemeProvider>
    </div>
  )
}

export default AdvanceApp