import React, { useEffect, useState } from 'react'
import "./Add.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Add() {
    const naviget=useNavigate()
    const [input, setinput] = useState({
        url:'',
        title:'',
        description:'',
        price:''
    })
    

    const handlechange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setinput({ ...input, [name]: value })
    }
    const handlesubmit = async(e) => {
        e.preventDefault()
      await axios.post('http://localhost:3000/posts',input)
setinput({
    url:'',
    title:'',
    description:'',
    price:''
})


    naviget('/show')

    }

    const checkLogin = async () => {
        try {
          const res = await axios.get('http://localhost:3000/login');
      console.log(res.data);
      if (res.data.length === 0) {
        naviget('/login');
      } else {
        naviget('/add');
      }
        } catch (error) {
          console.error('Error checking login:', error);
          naviget('/login'); 
        }
      };
      useEffect(()=>{
        checkLogin();
      
      },[navigator])
    return (
        <div>
            <div className="body">
                <div className="form-container">
                    <h2>Submit Product</h2>
                    <form onSubmit={handlesubmit}>
                        <div className="form-group">
                            <label htmlFor="url">Product URL</label>
                            <input
                                type="url"
                                id="url"
                                name="url"
                                placeholder="https://example.com"
                                required
                                value={input.url}
                                onChange={handlechange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Enter product title"
                                required
                                value={input.title}
                                onChange={handlechange}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Enter product description"
                                required
                                // defaultValue={""}
                                value={input.description}
                                onChange={handlechange}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price ($)</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder={0.0}
                                step="0.01"
                                required
                                value={input.price}
                                onChange={handlechange}

                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Add