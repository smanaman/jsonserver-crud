import React, { useEffect ,useState} from 'react'
import "./Add.css"
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
function Adit() {
  const loc=useLocation()
  console.log(loc.state);
const navigator=useNavigate()
  const [input, setinput] = useState({
    url:'',
    title:'',
    description:'',
    price:''
})
  
useEffect(()=>{
setinput(loc.state)
},[])
const handlechange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setinput({ ...input, [name]: value })
}
const handlesubmit = async(e) => {
    e.preventDefault()

    await axios.put(`http://localhost:3000/posts/${loc.state.id}`,input)
setinput({
url:'',
title:'',
description:'',
price:''
})
navigator('/show')
}


  return (
    <div>
        <div className="body">
        <div className="form-container">
  <h2>Edit Product</h2>
  <form onSubmit={handlesubmit}>
    <div className="form-group">
      <label htmlFor="url">Product URL</label>
      <input
        type="url"
        id="url"
        name="url"
        placeholder="https://example.com"
        required=""
        onChange={handlechange}
        value={input.url}
      />
    </div>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter product title"
        required=""
        onChange={handlechange}
        value={input.title}


      />
    </div>
    <div className="form-group">
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        placeholder="Enter product description"
        required=""
        onChange={handlechange}
        value={input.description}

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
        required=""
        onChange={handlechange}
        value={input.price}

      />
    </div>
    <button type="submit">Submit</button>
  </form>
</div>

        </div>
    </div>
  )
}

export default Adit