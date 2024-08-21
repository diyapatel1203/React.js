import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{margin:"auto",justifyContent:"space-around",display:"flex",padding:"10px"}}>
      <div>
        <NavLink to="/home" style={{textDecoration:"none",fontSize:"20px"}}>Home</NavLink>
      </div>
      <div>
      <NavLink style={{textDecoration:"none",fontSize:"20px"}} to={"/dashboard"}>Dashboard</NavLink>
      </div>
      <div>
      <NavLink style={{textDecoration:"none",fontSize:"20px"}} to={"/login"}>Login</NavLink>
      </div>
    </div>
  )
}

export default Navbar
