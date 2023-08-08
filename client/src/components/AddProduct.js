import React,{useState} from "react";
import '../App.css'
import {useNavigate} from 'react-router-dom'


export default function AddProduct(){
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [company,setCompany] = useState('')
    const navigate = useNavigate();


    const AddHandler = async()=>{
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:8080/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "content-type":"application/json"
            }
        });
        result = await result.json();
        if(result){
            navigate('/')
        }else{
            alert('Try Again')
        }
    }


    return(
        <div className="container">
        <input type='text' placeholder='Enter Product Name' value={name} 
        onChange={(e)=>setName(e.target.value)} />
        <input type='text' placeholder='Enter Product Price' value={price}
         onChange={(e)=>setPrice(e.target.value)} />
        <input type='text' placeholder='Enter Product Category' value={category}
         onChange={(e)=>setCategory(e.target.value)} />
        <input type='text' placeholder='Enter Product Company' value={company}
         onChange={(e)=>setCompany(e.target.value)
        } />
        <button onClick={AddHandler}>Add Product</button>
        </div>
    )
}