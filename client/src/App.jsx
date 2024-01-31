import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Signup from './Component/signup';
import Login from './Component/login';
import {BrowserRouter, Routes, Route}  from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Login />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
