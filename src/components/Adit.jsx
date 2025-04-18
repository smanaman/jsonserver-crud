import React, { useEffect, useState } from 'react';
import './Add.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Adit() {
  const location = useLocation();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    url: '',
    title: '',
    description: '',
    price: ''
  });

  // Populate form with existing data on mount
  useEffect(() => {
    if (location.state) {
      setInput(location.state);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/posts/${location.state.id}`, input);
      navigate('/show');
    } catch (error) {
      console.error('Failed to update product:', error);
      alert('Failed to update product. Please try again.');
    }
  };
  const checkLogin = async () => {
    try {
      const res = await axios.get('http://localhost:3000/login');
  console.log(res.data);
  if (res.data.length === 0) {
    naviget('/login');
  } else {
    naviget('/edit');
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
    <div className="body">
      <div className="form-container">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="url">Product URL</label>
            <input
              type="url"
              id="url"
              name="url"
              placeholder="https://example.com"
              required
              onChange={handleChange}
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
              required
              onChange={handleChange}
              value={input.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter product description"
              required
              onChange={handleChange}
              value={input.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price ($)</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="0.00"
              step="0.01"
              required
              onChange={handleChange}
              value={input.price}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Adit;
