import React,{useState,useEffect} from 'react'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    const handleLogin = (e) =>{
          e.preventDefault()
         
    };

  return (
    <div className=' p-5'>
 
          <div className="row justify-content-center mt-4">
             <div className="col-md-5">
                <h1 className='mb-2'>Login</h1>
              
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
              
                <button type="submit" class="btn btn-primary" onClick={handleLogin}>Login</button>
               
              </div>

              

             
          </div>

    </div>
  )
}

export default Login