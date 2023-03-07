
import React from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Signup from './Signup';
import Home from './Home';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
    </Routes>
   </BrowserRouter>

  </React.StrictMode>
);
