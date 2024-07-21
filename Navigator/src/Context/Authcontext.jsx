// CPC

import { createContext, useState } from "react";

export const AuthContext=createContext()

export function AuthContextProvider({children}){
const [token,settoken]=useState("")

const Login=(value)=>{
    settoken(value)
}

const Logout=()=>{
    settoken("")
}

    return(
        <AuthContext.Provider value={{token,Login,Logout}}>{children}</AuthContext.Provider>
    )
}