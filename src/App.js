import React, { useState } from 'react';

import { Route, Routes,Navigate} from 'react-router-dom';

import Login from './EPM/Firebase/Login1';
import Home from './EPM/Firebase/Home';
import Register from './EPM/Firebase/Register1';



function App() {
const[user,setUser]=useState("User")

  return (  
<> 


<Routes>
<Route path="/" element={<Home user={user} setUser={setUser}/>}/>
<Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="*" element={<Navigate to="/"/>}/>
</Routes>


</> 
  );
}

export default App; 























// import React, {useRef} from 'react'

// const App = () => {
 
// const name = useRef(null)
// const password = useRef(null)

// const inpSubmit = (e) =>{
// e.preventDefault();
// console.log( password.current.value , name.current.value);

// }

//   return (
//     <div>
//       <form onSubmit={inpSubmit}>
//       <input type='text' ref={name}/>
//       <input type='password' ref={password}/>
//       <button type='submit'>submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
