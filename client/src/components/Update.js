import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(params.id);
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:8080/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const updateHandler = async () => {
    let result = await fetch(`http://localhost:8080/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    if(result){
    navigate("/");
    }else{
        alert('Somthing went wrong!!!')
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button onClick={updateHandler}>Update Product</button>
    </div>
  );
}
