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
    <div style={{display:'flex', margin:'30px',justifyContent:'space-evenly'}}>
    
      {
        data1 && data1.map(ele=>{
          return <div key={ele._id}>
          <div class="card" style={{width:'400px'}}>
  <img class="card-img-top" style={{height:'250px'}} src={ele.imageUrl} alt="" />
  <div class="card-body">
    <h5 class="card-title">{ele.title}</h5>
    <p class="card-text">{ele.description}</p>
    
    <p><span style={{fontWeight:'bold'}}>Skills:</span> {ele.skills[0]} {ele.skills[1]} {ele.skills[2]} {ele.skills[3]} {ele.skills[4]} {ele.skills[5]} {ele.skills[6]} {ele.skills[7]}</p>

    <p><span style={{fontWeight:'bold'}}>Chapters:</span> {ele.chapters[0]}  {ele.chapters[1]}  {ele.chapters[2]}  {ele.chapters[3]}  {ele.chapters[4]}</p>

    <p><span style={{fontWeight:'bold'}}>Price in Rupees:</span> {ele.priceInRupees}</p>
    <p><span style={{fontWeight:'bold'}}>Price after Discount:</span> {ele.priceAfterDiscount}</p>
    <p><span style={{fontWeight:'bold'}}>Category:</span> {ele.category}</p>
    <p><span style={{fontWeight:'bold'}}>Video url:</span> <a target='_blank' rel="noreferrer" href={ele.videoUrl} alt=''>{ele.videoUrl}</a> </p>
    <p><span style={{fontWeight:'bold'}}>Notes url:</span> <a target='_blank' rel="noreferrer" href={ele.notesUrl} alt=''>{ele.notesUrl}</a> </p>
    <p><span style={{fontWeight:'bold'}}>Popularity:</span> {ele.popularity}</p>
   
  </div>
</div>
          </div>
        })
      }
    </div>
  )
}
