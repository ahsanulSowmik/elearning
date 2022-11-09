import React, {Fragment}from 'react';

import {BrowserRouter} from 'react-router-dom'

import AppRouter from './router/AppRouter';
// import { Routes , Route} from 'react-router-dom'
// import Navs from '../Component/StudentProfile/Navs';




function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <AppRouter/>
      
     
      
      
      </BrowserRouter>

      

    </Fragment>
    
  
  )
}
export default App