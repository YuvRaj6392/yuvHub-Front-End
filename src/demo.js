import React, { useState } from 'react'

export default function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const data={
    email:email,
    password:password
  }
  const onFormSubmit=(e)=>{
    e.preventDefault();
    fetch('http://localhost:8080/api/login',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    }).then(res=>res.json()).then(data=>{
    if(data.message.token)
    {
      console.log(data.message)
      
      console.log('you will be successfully logged in and see the course from here!')
    }
    else
    {
      console.log('you will not be able to login!')
    }
    })
  }
  return (
    <div>
    <form  onSubmit={onFormSubmit} method='post'>
    <input type="text" name="email" onInput={e=>setEmail(e.target.value)} />
    <input type="text" name='password' onInput={e=>setPassword(e.target.value)} />
    <input type="submit" />
    </form>
    </div>
  )
}
