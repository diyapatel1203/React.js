import { useContext, useEffect, useState } from "react";
import ProductsTable from "../Components/ProductsTable";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/Loader";

function Dashboard() {

  const [data,setdata]=useState([])
  const {auth,logoutUser}=useContext(AuthContext)
  const [loading,setloading]=useState(false)

  useEffect(()=>{
    setloading(true)
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    .then((res)=>{
      setloading(false)
      console.log(res.data.data)
      setdata(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return loading ? <Loader /> : (
    <div>
      <div style={{display:"flex",width:"50%",margin:"auto",justifyContent:"space-between",alignItems:"center"}}>
      <div>
        <h3>Dashboard</h3>
      </div>
      <div> 
        <p>
          Token:{auth.token}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div>
      <button data-testid="logout-btn" onClick={logoutUser} style={{backgroundColor:"darkgreen",border:"none",borderRadius:"5px",padding:"10px 15px",color:"white"}}>Logout</button>
      </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductsTable data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
  