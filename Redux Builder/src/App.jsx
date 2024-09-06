import React from 'react'
import Counter from './components/Counter'
import './App.css'
import Theme from './components/Theme'
import { useSelector } from 'react-redux'

const App = () => {

  return (
    <div>
      <Theme />
      <Counter />
    </div>
  )
}

export default App
