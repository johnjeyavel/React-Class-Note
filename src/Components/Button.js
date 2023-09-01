import React from 'react'
import Parent from './Parent'
import  Child from './Child'

const Button = (props) => {


return(
    <>
<button>
{props.value === 'login' ? <Parent/> : <Child/>}

</button>
   

    </>
)
}

export default Button
