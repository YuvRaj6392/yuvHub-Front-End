import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import Home from './components/Home'
export default function App() {
  return (
    
    
    
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Index />}   />
        <Route path='/login' element={<Login />}   />
        <Route path='/register' element={<Register />}   />
        <Route path='/login/home' element={<Home />}   />
      </Routes>
    </Router>
  
    
  )
}
