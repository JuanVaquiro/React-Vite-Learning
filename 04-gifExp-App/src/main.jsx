import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GitExpertApp from './GitExperApp'
import Example from './example';
import App from './tools/technicalTest/TechnicalInterview'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes path='/'>
        <Route path=''  element = {<GitExpertApp />} />
        <Route path='example'  element = {<Example />} />
        <Route path='test'  element = {<App />} />
      </Routes>  
    </BrowserRouter>
  </React.StrictMode>
  
)
