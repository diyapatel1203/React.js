import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const initialdata={
  title:"",
  price:0,
  image:"",
  category:"",
  description:""
}
const Editpage = () => {
    const {id}=useParams()
    const [formdata,setformdata]=useState(initialdata)

    const handlechange=(e)=>{ 
      setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const handlesubmit=(e)=>{
      e.preventDefault()
      
      axios.put(`http://localhost:8000/product/${id}`,formdata)
      .then((res)=>{
        console.log(res)
        alert("Updated")
      })
      .catch((err)=>console.log(err))
    }

    const {title,price,image,category,description}=formdata
    
    const getdata=()=>{
        axios.get(`http://localhost:8000/product/${id}`)
        .then((res)=>{
            console.log(res.data)
            setformdata(res.data)
        })
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getdata()
    },[])

  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>
      <div>
      <h1>Edit Product Page</h1>
      <form action="" onClick={(e)=>handlesubmit(e)}>
        <input name='image' value={image} onChange={(e)=>handlechange(e)} type="text" placeholder='Image' /><br />
        <input name='title' value={title} onChange={(e)=>handlechange(e)} type="text" placeholder='Title' /><br />
        <select name='category' value={category} onChange={(e)=>handlechange(e)}  id="">
          <option value="">Select Your Category</option>
          <option value={"Men's Cloths"}>Men's Clothing</option>
          <option value={"Women's Cloths"}>Women's Clothing</option>
          <option value={"Jwelery"}>Jwelery</option>
          <option value={"Electronics"}>Electronics</option>
        </select><br />
        <input name='price' value={price} onChange={(e)=>handlechange(e)} type="text" placeholder='Price' /><br />
        <input name='description' value={description} onChange={(e)=>handlechange(e)} type="text" placeholder='Description' /><br />
        <input type="submit" />      </form>
      </div>
    </div>
      </>
  )
}

export default Editpage
