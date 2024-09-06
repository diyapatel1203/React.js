import { DECREMENT, INCREMENT, THEME } from "./actiontype"

export function Incrementfunction(){
    return {type:INCREMENT,payload:1}
  }
  
  export function Decrementfunction(){
    return {type:DECREMENT,payload:1}
  }
  
  export function handleTheme(theme){
    return {type:THEME,payload:theme}
  }