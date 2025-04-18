import React, { useEffect } from 'react'
import { useState } from 'react'
import './singin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Singin() {

    const navigator=useNavigate()


      const [input, setinput] = useState({
        fullname:'',
        email:'',
        username:'',
        password:'',

        })
    
        const handlechange = (e) => {
            const name = e.target.name
            const value = e.target.value
            setinput({ ...input, [name]: value })
        }

        const handlesubmit=async(e)=>{
            e.preventDefault()
            await axios.post('http://localhost:3000/comments',input)

            navigator('/login')
        }
    return (
        <div>
            <div className="bodydiv">
                <div className="signup-container">
                    <h2>Create Account</h2>
                    <form onSubmit={handlesubmit}>
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" placeholder="Enter your full name" required
                            name='fullname' value={input.fullname}
                            onChange={handlechange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="Enter your email" required 
                             name='email' value={input.email}
                             onChange={handlechange}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder="Choose a username" required
                            name='username' value={input.username}
                            onChange={handlechange}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Create a password" required 

                          name='password' value={input.password}
                          onChange={handlechange}

                            />
                        </div>
                        <button type="submit" className="signup-btn">Sign Up</button>
                    </form>
                    <div className="footer">
                        Already have an account? <a href="#">Login here</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Singin