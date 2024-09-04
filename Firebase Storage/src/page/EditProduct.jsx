import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../services/firebase'

const initialdata={
  title:"",
  price:0,
  image:"",
  category:"",
  description:""
}

const EditProduct = () => {

  const [formdata,setformdata]=useState(initialdata)
  const {id}=useParams()

  const {title,price,description,image,category}=formdata

  const handlechange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
  
  const handlesubmit=(e)=>{

    e.preventDefault()
    // console.log(formdata)

    updateDoc(doc(db,"products",id),formdata)
    .then((res)=>{
      console.log(res)
      alert("Data Updated...")
    })
    .catch((err)=>{
      console.log(err)
    })
}

  const GetSingleData=(id)=>{
    getDoc(doc(db,"products",id))
    .then((res)=>{
      console.log(res.data())
      setformdata(res.data())
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  useEffect(()=>{
    GetSingleData(id)
  },[])
  
  return (
    <div style={{marginLeft:"33%"}}>
      <h1 style={{marginLeft:"10%",fontFamily:"sans-serif"}}>Edit Product Here</h1>
      <div>
      <form action="" style={{border:"1px solid grey",borderRadius:"10px",width:"40%",padding:"20px"}} onSubmit={(e)=>handlesubmit(e)}>
        <input style={{width:"94%",padding:"10px"}} name='image' value={image} onChange={(e)=>handlechange(e)} type="text" placeholder='Image' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='title' value={title} onChange={(e)=>handlechange(e)} type="text" placeholder='Title' /><br /><br></br>
        <select style={{width:"99%",padding:"10px"}} name='category' value={category} onChange={(e)=>handlechange(e)}  id="">
          <option value="">Select Your Category</option>
          <option value={"Men's Cloths"}>Men's Clothing</option>
          <option value={"Women's Cloths"}>Women's Clothing</option>
          <option value={"Jwelery"}>Jwelery</option>
          <option value={"Electronics"}>Electronics</option>
        </select><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='price' value={price} onChange={(e)=>handlechange(e)} type="text" placeholder='Price' /><br /><br></br>
        <input style={{width:"94%",padding:"10px"}} name='description' value={description} onChange={(e)=>handlechange(e)} type="text" placeholder='Description' /><br /><br></br>

        <input style={{marginLeft:"0%",border:"none",backgroundColor:"black",color:"white",padding:"10px 180px 10px 185px"}} type="submit" />
      </form>
      </div>
    </div>
  )
}

export default EditProduct
