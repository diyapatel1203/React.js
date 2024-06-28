import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Components/Post'


function App() {  
  const [toggle,settoggle]=useState(false)

  return (
    <>
      <button style={{backgroundColor:"rgb(25, 161, 161)",color:"black",padding:"10px 20px"}} onClick={()=>settoggle(!toggle)}>GET POSTS</button>
      {toggle? <Post /> : ""}
    </>
  )
}

export default App
