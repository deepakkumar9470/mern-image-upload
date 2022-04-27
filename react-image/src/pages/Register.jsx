import React,{useState,useEffect} from 'react'

const Register = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleSignup = (e) =>{
          e.preventDefault()
         
    }

  return (
    <div className=' p-5'>
 
          <div className="row justify-content-center mt-4">
             <div className="col-md-5">
                <h1 className='mb-2'>Register</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="name" class="form-control"
                    required
                    value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" class="form-control"
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control"
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}/>
                </div>
              
                <button type="submit" class="btn btn-primary" onClick={handleSignup}>Submit</button>
               
              </div>

              

             
          </div>

    </div>
  )
}

export default Register