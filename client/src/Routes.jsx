import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login.jsx'
import Register from './pages/Register'

const Main_Routes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Main_Routes