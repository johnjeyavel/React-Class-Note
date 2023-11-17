import React, { useState } from 'react';
import { auth } from './Firebase';
import { Link, Outlet } from 'react-router-dom';
import "./home.css"

const Home = ({user,setUser}) => {

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");


  // Home.....

   const logout = async()=>{

        try{
await auth.signOut()
setUser("User!!")
   }
catch(error){
 alert(error);
   
 }
    }

// login.......

  const handlesubmit = async(e)=>{
      e.preventDefault();
      
      try{
      await auth.signInWithEmailAndPassword(email,password);
      console.log(email+" "+password);
  setEmail("");
  setPassword("");
      setUser(email);
      }
      
      catch(error){
      alert(error);
      console.log(error);
      }
      }


  return (
  <>
    {/* <Link to="/" class="d-flex justify-content-end text-white home  btn-primary ">Home</Link><br/> */}

<div class="text-center mt-5 card card1 body1">

<h2 class="mt-3 textshadow">hello <span class="blue">{user}</span></h2>

{/* <Link to="/login"  class="home text-white ">Login</Link><br/> */}

<form onSubmit={handlesubmit}>  
<label for="email" class="mt-3 fw-bold textshadow rounded">Email:</label><br/>
<input type='email' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} class="mt-3 boxshadow rounded"/><br/>
<label for="email" class="mt-3 fw-bold textshadow rounded">password:</label><br/>
<input type='password' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} class="mt-3 boxshadow rounded"/><br/>
<button type='submit' class="mt-3 boxshadow btn-primary rounded ">Login</button>
 </form> <br/>

<Link to="/register"  class="text-dark text-decoration-none fw-bold textshadow">Register now</Link>
<Outlet/>
<p onClick={logout} class="mt-3 fw-bold textshadow">logout now?</p>
 
      </div>  
  
      </>
  )
}

export default Home
   {/* &nbsp;  */}