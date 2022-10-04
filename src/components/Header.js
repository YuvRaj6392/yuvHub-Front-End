import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
    
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">yuvHub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About Us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/">Contact Us</Link>
        </li>
       
       
      </ul>
      <form className="d-flex">
        <Link className="btn btn-success"  id='login' to='/login' >Login</Link>

        <Link className=" ms-2 btn btn-success"  id='register' to='/register'>Register</Link>

      </form>
  
    </div>
  </div>
</nav></div>
  )
}