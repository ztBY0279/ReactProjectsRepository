import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Advance from './components/Advance.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className="mt-5"/>
    <Advance/>
  </React.StrictMode>,
)
