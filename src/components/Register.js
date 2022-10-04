

export default function Register() {
  return (
   <>
     <div className='container mt-3  bg-dark text-light ' style={{maxWidth:'300px',padding:'30px'}}>
    <form>
 
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">First Name</label>
  </div>

  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Last Name</label>
  </div>
 
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>




 
  <button type="button" className="btn btn-primary btn-block mb-4">Register</button>



</form>
     
    </div>
   </>
  )
}
