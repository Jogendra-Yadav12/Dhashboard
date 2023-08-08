import React,{useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import "../App.css";

export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()

  const loginHandler = async () =>{
    let result = await fetch('http://localhost:8080/login',{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    if(result.name){
      localStorage.setItem("user",JSON.stringify(result));
      navigate("/")
  }else{
    alert('User Not Found!!!!')}
  }

  return (
    <div className="container">
        <h1>Login</h1>
        <input type='text' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' value={email} />
        <input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' value={password} />
        <button onClick={loginHandler} >Login</button>
        <h3>Don't have account  <span><Link to='/signup'>register</Link></span></h3>
    </div>
  )
}
