import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Theme from './Components/Theme'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const {theme}=useContext(ThemeContext)

  return (
    <>
    <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white",padding:"30px"}}>
      <Theme />
    </div>
    </>
  )
}

export default App
