import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
export default function HomeId() {
    const {id}=useParams();
    const history=useNavigate();
    const token=localStorage.getItem('token');
    const [paymentMessage,setPaymentMessage]=useState("")
   useEffect(()=>{
    if(!localStorage.getItem('token'))
    {
      history('/')
    }
    else
    {
        fetch(`http://localhost:8080/api/tutorial/${id}`,{
        method:"GET",
        headers: {
          'Content-Type': 'application/json',
          'x-access-token':token
        },
        
      }).then(res=>res.json()).then(data=>{
        console.log(data.message);
        setPaymentMessage(data.message[0].title);
      })
    }
   })
    
    
  return (
    <div className='container mt-5'>
        <h1>Thank you for showing interest in {paymentMessage}. Our team is currently building the payment gateway. As soon as it comes live, you will be notified!</h1>
    </div>
  )
}
