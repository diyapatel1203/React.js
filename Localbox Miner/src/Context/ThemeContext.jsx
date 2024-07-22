import { createContext, useState } from "react";

export const ThemeContext=createContext()

export function ThemeContextProvider({children}){

    const [theme,settheme]=useState("light")

    const ThemeContextFunction=()=>{
        settheme(theme=="light"? "dark" : "light")
    }
    return(
        <ThemeContext.Provider value={{theme,ThemeContextFunction}}>{children}</ThemeContext.Provider>
    )
}