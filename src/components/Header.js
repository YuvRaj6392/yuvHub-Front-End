import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Header() {
  useEffect(()=>{
    if(!localStorage.getItem('token'))
    {
      document.getElementById('home').style.display='none';
      document.getElementById('logout').style.display='none';
      document.getElementById('login').style.display='block';
      document.getElementById('register').style.display='block';


    }
    else
    {
      document.getElementById('home').style.display='block';
      document.getElementById('logout').style.display='block';
      document.getElementById('login').style.display='none';
      document.getElementById('register').style.display='none';
    }

  },[localStorage.getItem('token')])
  const history=useNavigate();
  const logoutHandler=(e)=>{
    e.preventDefault();
    
     const id=localStorage.getItem('id');
     const data={
      id:id
     }
     fetch("http://localhost:8080/api/logout",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    }).then(res=>res.json()).then(data=>{
      console.log(data);
      localStorage.clear();
      history('/')
    })

  }
  return (
    <div>
    
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">yuvHub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-warning"  id='home' to='/login/home' >Home</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About Us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/">Contact Us</Link>
        </li>
        */}
       
      </ul>
      <form className="d-flex">
      
        <Link className="btn btn-success"  id='login' to='/login' >Login</Link>

        <Link className=" ms-2 btn btn-success"  id='register' to='/register'>Register</Link>

        <Link className=" ms-2 btn btn-success"  id='logout' onClick={logoutHandler} >Logout</Link>

      </form>
  
    </div>
  </div>
</nav></div>
  )
}
