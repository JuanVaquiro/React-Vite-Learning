import React from 'react'
import ReactDOM from 'react-dom/client'
import GitExpertApp from './GitExperApp'
import App from './tools/TechnicalInterview'

import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Example from './example';

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
