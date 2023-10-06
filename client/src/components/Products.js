import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

export default function Products() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  },[]);

  // Get all the product function
  const getProduct = async () => {
    let result = await fetch("http://localhost:8080/products");
    result = await result.json();
    setProducts(result);
  };

  // Delete Function in Database
  const DeleteProduct = async (id) => {
    console.log(id);
    let result = await fetch(`http://localhost:8080/product/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getProduct();
    }
  };

  // Searching Function to collect data
  const searchHandler = async(e)=>{
    let key = e.target.value;
    if(key){
      let result = await fetch(`http://localhost:8080/search/${key}`);
      result = await result.json();
      if(result){
        setProducts(result);
      }
    }else{
      getProduct();
    }
  }

  return (
    <div className="container">
      <input type='text' placeholder="Search" onChange={searchHandler} />
      <ul className="product heading">
        <li>S No.</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {products.length>0?products.map((item, index) => {
        return (
          <ul className="product">
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>Rs {item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button
                className="delete-button"
                onClick={() => DeleteProduct(item._id)}
              >
                Delete
              </button>
              <button className="delete-button">
              <Link to={'/update/'+item._id}>Update</Link>
              </button>
            </li>
          </ul>
        )
      })
      :<h1>No Result Found</h1>
    }
    </div>
  );
}
