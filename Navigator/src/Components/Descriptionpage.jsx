import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Descriptionpage = () => {
    const [singledata,setsingledata]=useState({})
    const {id}=useParams()

    const GetSingleData=()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>setsingledata(res.data))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        GetSingleData()
    },[])
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Description Page</h1>

     <div style={{display:"flex",justifyContent:"center"}}>
     <div style={{textAlign:"center",width:"50%"}}>
     <h1>{singledata.id}</h1>
      <img height={300} src={singledata.image} alt="" />
      <h2>{singledata.title}</h2>
      <h2>{singledata.price}</h2>
      <h2>{singledata.category}</h2>
      <p>{singledata.description}</p>
     </div>
     </div>
    </div>
  )
}

export default Descriptionpage
