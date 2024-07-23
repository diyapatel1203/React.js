import React from 'react'

const Addproduct = () => {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div>
      <h1 style={{textAlign:"center"}}>Add Product Page</h1>
      <form action="">
        <input type="text" placeholder='Image' /><br />
        <input type="text" placeholder='Title' /><br />
        <select name="" id="">
          <option value="">Select Your Category</option>
          <option value={"Men's Cloths"}>Men's Clothing</option>
          <option value={"Women's Cloths"}>Women's Clothing</option>
          <option value={"Jwelery"}>Jwelery</option>
          <option value={"Electronics"}>Electronics</option>
        </select><br />
        <input type="text" placeholder='Price' /><br />
        <input type="text" placeholder='Description' /><br />
        <input type="submit" />
      </form>
      </div>
    </div>
  )
}

export default Addproduct
