import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Login() {
  const history=useNavigate();
  const [emailLogin,setEmailLogin]=useState("");
  const [passwordLogin,setPasswordLogin]=useState("");
  const onFormSubmit=(e)=>{
    e.preventDefault();
    if(!emailLogin || !passwordLogin)
    {
      alert('Fields cannot be empty');
      return;
    }
    const data={
      email:emailLogin,
      password:passwordLogin
    }
    fetch("http://localhost:8080/api/login",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    }).then(res=>res.json()).then(data=>{
      console.log(data)
     if(data.message.token)
     {
      localStorage.setItem('id',data.message._id);
      localStorage.setItem('token',data.message.token);
      history('home')
     }
     else
     {
      alert(data.message)
     }
    });

  }
  return (
    <div>
         <div className='container mt-3 bg-dark text-light ' style={{maxWidth:'300px',padding:'30px'}}>
    <form onSubmit={onFormSubmit} method='POST'>
 
  <div className="form-outline mb-4">
    <input type="email" id="emailLogin" name='emailLogin' className="form-control" onInput={(e)=>setEmailLogin(e.target.value)} />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

 
  <div className="form-outline mb-4">
    <input type="password" id="passwordLogin" name='passwordLogin' className="form-control" onInput={(e)=>{setPasswordLogin(e.target.value)}} />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>


 
  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>


  <div className="text-center">
    <p>Not a member? <Link to='/register'>Register</Link></p>
   
    
  </div>
</form>
     
    </div>
    </div>
  )
}
