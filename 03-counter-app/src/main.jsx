import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import PrimeraApp from './App'
import './main.css';



ReactDOM.render(
  <React.StrictMode>
    <PrimeraApp saludo='hola, juan' /> 
    <CounterApp value={ 0 } />
  </React.StrictMode>,
  document.getElementById('root')
)



// import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// )


// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )