import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Singlepage = () => {
  const [singledata,setsingledata]=useState({})
  const param=useParams()

  const getsingledata=()=>{

    axios.get(`http://localhost:8000/product/${param.id}`)
    .then((res)=>setsingledata(res.data))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getsingledata()
  },[])

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Description page</h1>
    <div style={{display:"flex",justifyContent:"center"}}>
      <div style={{textAlign:"center",width:"50%"}}>
        <h1>{singledata.id}</h1>
        <img height={300} src={singledata.image} alt="" />
        <h3>{singledata.title}</h3>
        <h4>{singledata.price}</h4>
        <h4>{singledata.category}</h4>
        <p>{singledata.description}</p>
      </div>
    </div>
    </div>
  )
}

export default Singlepage
