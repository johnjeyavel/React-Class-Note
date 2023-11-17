import React, { useState } from 'react'
import { auth } from './Firebase';
import {useNavigate} from 'react-router-dom';
import "./register.css"

const Register = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate();
 

  const handleRegister = async(e)=>{
    e.preventDefault();
    
    try{
    await auth.createUserWithEmailAndPassword(email,password);
    console.log(email+" "+password);
    navigate("/home");
    alert("Email ID Registered sucessfully, please login");
    }
    catch(error){
    alert(error);
    console.log(error);
    }
    }

    return (

    <div class="text-center mt-5 card card1 body1">

  <form onSubmit={handleRegister} > 
  <label for="email" class="mt-3 fw-bold textshadow rounded">Email:</label><br/>
<input type='email' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}  class="mt-3 boxshadow rounded"/><br/>
<label for="email" class="mt-3 fw-bold textshadow rounded">password:</label><br/>
<input type='password' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}  class="mt-3 boxshadow rounded"/><br/>

<button type='submit' class="mt-3 boxshadow btn-primary rounded mb-4 ">Register</button>
</form>  
    </div>

  )
}

export default Register
