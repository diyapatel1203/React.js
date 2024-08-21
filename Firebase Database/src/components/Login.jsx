import React from "react";
import GoogleButton from "react-google-button";

import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../services/firebase";


const Login = () => {

    const handleLogin=()=>{
        signInWithPopup(auth,provider)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleLogout=()=>{
        signOut(auth)
        .then((res)=>{
            console.log(res)
            alert("Logout...")
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div style={{marginTop:"10%"}}>
        <h1 style={{textAlign:"center"}}>Login page</h1>
      <GoogleButton
      onClick={handleLogin}
        style={{margin:"auto"}}
      />
      <button onClick={handleLogout} style={{margin:"auto",display:"block",marginTop:"20px",border:"none",backgroundColor:"black",color:"white",padding:"15px 100px"}}>Logout</button>
    </div>
  );
};

export default Login;
