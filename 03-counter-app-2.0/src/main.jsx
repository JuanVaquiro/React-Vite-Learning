import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CounterApp from './CounterApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App title='Hola, soy Juan' /> 
   <CounterApp value={5} /> 
  </React.StrictMode>
)
 