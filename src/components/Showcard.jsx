import React, { useEffect, useState } from 'react'
import "./showcard.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Showcard() {
const [data,setData]=useState([])
const navigator=useNavigate()
const getData = async () => {
    try {
      const result = await axios.get('http://localhost:3000/posts');
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const checkLogin = async () => {
    try {
      const res = await axios.get('http://localhost:3000/login');
  console.log(res.data);
  if (res.data.length === 0) {
    navigator('/');
  } else {
    navigator('/show');
  }
    } catch (error) {
      console.error('Error checking login:', error);
      navigator('/login'); 
    }
  };
  

  useEffect(() => {
    getData();
  }, []);

useEffect(()=>{
  checkLogin();

},[navigator])
  const deleteDataInJson = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      getData();
    //   return response.data; 
    } catch (error) {
      console.error(`Error deleting post with ID ${id}:`, error);
    }
  };
  
  return (
    <div>
 <div className="container">
  <div className="cards-container">
    {/* Product Card */}
   {
    data.map((val,index)=>{
     return(
        <div className="card"  key={index}>
        <div className="card-header">
          <img src={val.url} />
          <span className="card-badge">New</span>
        </div>
        <div className="card-body">
          <h3 className="card-title">{val.title}</h3>
          <p className="card-description">{val.descriptionx}</p>
          <div className="card-price">${val.price}</div>
          <div className="card-actions">
            <button className="btn btn-edit" onClick={()=>navigator('/edit',{state:val})}>
              <i className="fas fa-pen" /> Edit
            </button>
            <button className="btn btn-delete" onClick={()=>deleteDataInJson(val.id)}>
              <i className="fas fa-trash" /> Delete
            </button>
          </div>
        </div>
      </div>
     )
    })
   }

    
    {/* Add more product cards here as needed */}
    {/* Add New Card */}
    <div className="card add-card" onClick= {()=>navigator('/add')}>
      <div className="add-icon">
        <i className="fas fa-plus" />
      </div>
      <div className="add-text">Add New Product
       
      </div>
    </div>
  </div>
</div>

    
    </div>
  )
}

export default Showcard