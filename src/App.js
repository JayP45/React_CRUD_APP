import React from 'react'
import './App.css';
import UserTabel from './Components/UserTabel'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'

const App = () =>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/user" element={<UserTabel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;