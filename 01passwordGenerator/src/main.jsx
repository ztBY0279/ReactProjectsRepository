//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 import './index.css'
// import UseEffectHook from './UseEffectHook.jsx'
// import ParentComponent from './ParentComponents.jsx'
import {UseEffectHook,ParentComponent} from "./index.js"



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <div>
    <App />
    <UseEffectHook/>
    <ParentComponent/>
    </div>
  // </React.StrictMode>,
)
