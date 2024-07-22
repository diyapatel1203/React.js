import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Theme = () => {
  const {theme,ThemeContextFunction}=useContext(ThemeContext)
  return (
    <div>
      <h1>NAVBAR</h1>
      
      <h3>Theme Is {theme}</h3>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit natus ut, dignissimos laudantium voluptatum delectus sapiente ducimus nam blanditiis eius at, quisquam quidem voluptatem molestias fugit illum doloremque ab itaque harum facere animi. Vel recusandae quis voluptatum nemo quas dignissimos natus ullam sint, ut blanditiis saepe doloribus soluta voluptatibus iusto nisi pariatur? Blanditiis eaque deleniti architecto reprehenderit. Optio reprehenderit magni voluptates quo architecto eum natus ipsum atque eaque illo, non minus facilis accusamus deserunt pariatur dolores ea, et corrupti aut error. Incidunt voluptatibus, explicabo vero eligendi et rem porro aperiam eaque at amet rerum dolores perspiciatis temporibus ab saepe!</p>
      
      <button style={{backgroundColor:theme=="light"?"black":"white",color:theme=="light"?"white":"black"}} onClick={ThemeContextFunction}>
        {theme=="light" ? "dark":"light"}
      </button>
    </div>
  )
}

export default Theme