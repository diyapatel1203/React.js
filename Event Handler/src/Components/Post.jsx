import React, { useEffect, useState } from "react";
import "./Post.css";

const Post = () => {

    const [data,setdata]=useState([])
    const [page,setpage]=useState(1)

  const FetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  };

  useEffect(()=>{
    FetchData()
  },[page])
  
  return <div>
    {data.map((el)=><div className="post" key={el.id}>
        <h1>{el.title}</h1>
        <h3>{el.body}</h3>
    </div>)}

    <button onClick={()=>setpage(page-1)} disabled={page==0} style={{marginRight:"10PX",backgroundColor:"rgb(25, 161, 161)",color:"black"}} >Previous</button>
    <span>{page}</span>
    <button onClick={()=>setpage(page+1)} style={{marginLeft:"10px",backgroundColor:"rgb(25, 161, 161)",color:"black"}}>Next</button>
  </div>;
};

export default Post;
