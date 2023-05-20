import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/Login.jsx'

const Main_Routes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Main_Routes