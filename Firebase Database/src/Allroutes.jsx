import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Home from './components/Home'
import PrivateRoutes from './components/PrivateRoutes'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={
          <PrivateRoutes>
          <Dashboard  />
          </PrivateRoutes>
          }></Route>
    </Routes>
  )
}

export default Allroutes
