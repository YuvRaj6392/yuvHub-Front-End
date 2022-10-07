import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const [data1,setData1]=useState("")
  const history=useNavigate();
  const token=localStorage.getItem('token');
  
  
  
  useEffect(()=>{
    
    
    if(!localStorage.getItem('token'))
    {
      history('/')
    }
    else
    {
      fetch("http://localhost:8080/api/tutorial/show",{
        method:"GET",
        headers: {
          'Content-Type': 'application/json',
          'x-access-token':token
        },
        
      }).then(res=>res.json()).then(data=>{
     
      setData1(data)
      //  console.log(data1)
        
      })
  
}
   
  },[data1])

  
  return (
    <div style={{display:'flex'}}>
    
      {
        data1 && data1.map(ele=>{
          return <div key={ele._id}>
            <span>{ele.category}</span>
          </div>
        })
      }
    </div>
  )
}
