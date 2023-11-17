// import React, { useState } from 'react';
// import { auth } from './Firebase';
// import {useNavigate} from 'react-router-dom';

// const Login = ({user,setUser}) => {

//   const[email,setEmail] = useState("");
//   const[password,setPassword] = useState("");
//   const navigate = useNavigate();


// const handlesubmit = async(e)=>{
// e.preventDefault();

// try{
// await auth.signInWithEmailAndPassword(email,password);
// console.log(email+" "+password);
// navigate("/");
// setUser(email);
// }

// catch(error){
// alert(error);
// console.log(error);
// }
// }


//   return (
//     <div>
//       <h1>Login Now</h1>
//       <form onSubmit={handlesubmit}> 

// <input type='email' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
// <input type='password' placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

// <button type='submit'>Login</button>
// </form>  
      
//     </div>
//   )
// }

// export default Login
