import React, { useState,useEffect } from "react";
import "../App.css";
import { Link,useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  // data transfer in a database
  const data = async () => {
    let result = await fetch("http://localhost:8080/register", {
      method: "POST",
      body: JSON.stringify({ name, password, email }),
      headers: { "content-type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <input
        clasName="input-box"
        value={name}
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        clasName="input-box"
        value={password}
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        clasName="input-box"
        value={email}
        type="text"
        placeholder="Enter Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={data}>Signup</button>
      <h3>I have already account   <span><Link to='/login'>login</Link></span></h3>
    </div>
  );
}
