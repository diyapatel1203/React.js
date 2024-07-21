import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '/src/App.css'
import { AuthContext } from '../Context/Authcontext'

const Navbar = () => {

  const {Logout}=useContext(AuthContext)
  return (
    <div className='menu'>
      <NavLink style={({ isActive }) => {
            return isActive ? {color:"red"} : {color:"black"};
          }} to={"/"}>Home</NavLink>
      <NavLink style={({ isActive }) => {
            return isActive ? {color:"red"} : {color:"black"};
          }} to={"/about"}>About</NavLink>
      <NavLink style={({ isActive }) => {
            return isActive ? {color:"red"} : {color:"black"};
          }} to={"/product"}>Product</NavLink>
      <NavLink style={({ isActive }) => {
            return isActive ? {color:"red"} : {color:"black"};
          }} to={"/login"}>Login</NavLink>
          <button onClick={Logout}>Logout</button>
    </div>
  )
}

export default Navbar
