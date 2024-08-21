import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [data,setdata]=useState([])

  const  getDatabase=()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>setdata(res.data))
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getDatabase()
  },[])
  return (
    <div>
      <h1 style={{textAlign:"center"}}>PRODUCTS</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px",textAlign:"center"}}>
        {data.map((el)=>(
          <div key={el.id} style={{boxShadow:"10px 10px 20px grey",padding:"10px",width:"80%",margin:"auto"}}>
            <img src={el.image} height={200} alt="" />
            <h3>{el.title}</h3>
                <h4>{el.category}</h4>
                <h3>{el.price}</h3>
                <p>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
