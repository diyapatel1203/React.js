import React from 'react'
import { useSelector } from 'react-redux'
import CounterValue from './CounterValue'
import CounterButtons from './CounterButtons'

const Counter = () => {
  const {theme}=useSelector((store)=>store.themeReducer)
  return (
    <div>
      
      <div style={{border:"2px solid black",backgroundColor:theme=="light" ?"white":"black",color:theme=="light" ?"black":"white",padding:"100px 150px"}}>
      <h1>Counter</h1>
      <CounterValue />
      <CounterButtons />
    </div>
    </div>
  )
}

export default Counter
