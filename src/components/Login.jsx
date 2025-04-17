import React, {useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const nav=useNavigate()
    const [input,setinput]=useState('')
    const handlechange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setinput({ ...input, [name]: value })
    }

    const handlesubmit=async(e)=>{
        e.preventDefault()
   const res=await axios.get('http://localhost:3000/comments')
   console.log(res.data);
      if(res.data.email==input.username && res.data.password==input.password){
nav('/show')
      }
      else{
        alert('please enter right infor mation')
      }
    console.log(input);
    
       
    }
    return (
        <div>
            <div className="bodydiv">
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handlesubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="email" id="username" placeholder="example@gmail.com" required name='username' value={input.username} 
                            onChange={handlechange}/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password"  name='password' value={input.password} required 
                              onChange={handlechange}
                            />
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    <div className="footer">
                        <p>Don't have an account?
                            <Link to="/singin">
                            Sign up
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
