import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import Home from './components/Home'
import HomeId from './components/HomeId'
import PageNotFound from './components/PageNotFound'
export default function App() {
  return (
    
    
    
    <Router>
    <Header />
      <Routes>
        <Route exact  path='/' element={<Index />}   />
        <Route exact path='/login' element={<Login />}   />
        <Route exact path='/register' element={<Register />}   />
        <Route exact path='/login/home' element={<Home />}   />
        <Route exact path='/login/home/:id' element={<HomeId />}  />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/login/*" element={<PageNotFound />} />
        <Route path="/login/home/*" element={<PageNotFound />} />
        <Route path="/login/home/:id/*" element={<PageNotFound />} />
        <Route path="/register/*" element={<PageNotFound />} />

      </Routes>
    </Router>
  
    
  )
}
