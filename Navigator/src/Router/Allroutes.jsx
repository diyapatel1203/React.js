import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Product from '../Components/Product'
import Login from '../Components/Login'
import Privatepage from '../Components/Privatepage'
import Descriptionpage from '../Components/Descriptionpage'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product' element={
          <Privatepage>
          <Product />
          </Privatepage>
          }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/descriptionpage/:id' element={<Descriptionpage />}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
