import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '/src/App.css'
import { IoCartSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='menu' >
      <NavLink style={({ isActive }) => {
            return isActive ? {color:"red"} : {color:"black"};
          }} to='/'>Home</NavLink>
      <NavLink style={({ isActive }) => {
            return isActive ? {color:"red"} : {color:"black"};
          }} to='/product'>Product</NavLink>
      <NavLink style={({ isActive }) => {
            return isActive ? {color:"red"} : {color:"black"};
          }} to='/addproduct'>AddProduct</NavLink>
      <NavLink style={({ isActive }) => {
            return isActive ? {color:"red"} : {color:"black"};
          }} to='/login'>Login</NavLink>
    </div>
  )
}

export default Navbar
