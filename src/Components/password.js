import React, {useRef} from 'react'

const Password1 = () => {
 
const name = useRef(null)
const password = useRef(null)

const inpSubmit = (e) =>{
e.preventDefault();
console.log( password.current.value , name.current.value);

}

  return (
    <div>
      <form onSubmit={inpSubmit}>
      <input type='text' ref={name}/>
      <input type='password' ref={password}/>
      <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Password1

