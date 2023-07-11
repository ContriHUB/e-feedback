import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const host ="http://localhost:5000";
    const [ credentials,setcredentials ] = useState({email:"",password:""})
    const navigate = useNavigate();
    const onChange = (e)=>{
        setcredentials({...credentials,[e.target.name]: e.target.value})
    }

    const handleSubmit=async (e) =>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
            },
            body: JSON.stringify({email: credentials.email,password:credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success) {
          localStorage.setItem('token',json.authtoken);
          props.showAlert("Account successfully logged in","success");
          navigate("/");
         
        } else {
            props.showAlert("Invalid credentials","danger");
        }
    }
  return (
    <div className='mt-3'>
<h2>Login to give your feedback</h2>
    
    <form onSubmit={handleSubmit}>
  <div className="htmlform-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="htmlform-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="htmlform-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="htmlform-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="htmlform-control" value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary"  >Submit</button>
</form>
</div>
  )
}

export default Login