import { useState } from "react"

export default function Register() {
  const [emailRegister,setEmailRegister]=useState("");
  const [firstNameRegister,setFirstNameRegister]=useState("");
  const [lastNameRegister,setLastNameRegister]=useState("");
  const [passwordRegister,setPasswordRegister]=useState("");
  const onFormSubmit=(e)=>{
    e.preventDefault();
   
    if(!emailRegister || !firstNameRegister ||!lastNameRegister || !passwordRegister)
    {
      alert('All fields are mandatory');
      return;
    }
    const data={
      email:emailRegister,
      firstName:firstNameRegister,
      lastName:lastNameRegister,
      password:passwordRegister
    }
    fetch('http://localhost:8080/api/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then(res=>res.json()).then(data=>{
      console.log(data.message)
      if(data.message.email)
      {
       
        alert('Successfully Registered! Now login to visit the home page!')
      
      }
      else
      {
        alert(data.message)
      }
    })
    

    
  }
  return (
   <>
     <div className='container mt-3  bg-dark text-light ' style={{maxWidth:'300px',padding:'30px'}}>
    <form onSubmit={onFormSubmit} method='POST'>
 
  <div className="form-outline mb-4">
    <input type="email" id="emailRegister" name="emailRegister" className="form-control" onInput={e=>setEmailRegister(e.target.value)} />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

  <div className="form-outline mb-4">
    <input type="text" id="firstNameRegister" name="firstNameRegister" className="form-control" onInput={e=>setFirstNameRegister(e.target.value)} />
    <label className="form-label" htmlFor="form2Example2">First Name</label>
  </div>

  <div className="form-outline mb-4">
    <input type="text" id="lastNameRegister" name="lastNameRegister" className="form-control" onInput={e=>setLastNameRegister(e.target.value)} />
    <label className="form-label" htmlFor="form2Example2">Last Name</label>
  </div>
 
  <div className="form-outline mb-4">
    <input type="password" id="passwordRegister" name="passwordRegister" className="form-control" onInput={e=>setPasswordRegister(e.target.value)} />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>




 
  <button type="submit" className="btn btn-primary btn-block mb-4">Register</button>



</form>
     
    </div>
   </>
  )
}
