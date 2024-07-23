import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../components/Product'
import Home from '../components/Home'
import Addproduct from '../components/Addproduct'
import Login from '../components/Login'
import Privatepage from '../components/Privatepage'
import Singlepage from '../components/Singlepage'
import Editpage from '../components/Editpage'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={
          <Privatepage>
          <Product />
          </Privatepage>
          }></Route>
        <Route path='/addproduct' element={<Addproduct />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/edit/:id' element={<Editpage />}></Route>
        <Route path='/singlepage/:id' element={<Singlepage />}></Route>
        <Route path='*' element={<h1>Not Found</h1>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
