import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <p>Layout</p>|
      <Link  to='counter'> Counter</Link>
      <Link  to='Todo' > Todo</Link>  
       <Link  to='BmiCal'>BmiCal</Link>
      <Outlet/>
    </div>  
  )
}

export default Layout
