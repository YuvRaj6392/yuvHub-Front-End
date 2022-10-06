import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Home() {
  const history=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token'))
    {
      history('/')
    }
  },)
  return (
    <div>welcome to the home page</div>
  )
}
