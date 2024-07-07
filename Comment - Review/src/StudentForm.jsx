import React, { useState } from 'react'

const StudentForm = () => {
  const [data,setdata]=useState(
    {
      name:"",
      email:"",
      password:"",
      grade:""
    }
  )

  const {name,email,password,grade}=data

  const handlechange=(e)=>{
    setdata({...data, [e.target.name]:e.target.value})
  }

  const handleclick = (e) => {
    e.preventDefault()
    console.log(data);
  };

  return (
    <div>
      <h1>Student Form</h1>

      <form action="" onSubmit={(e)=>handleclick(e)}>
        <input type="text" name='name'  value={name} onChange={(e)=>handlechange(e)} placeholder='Enter Your Name' style={{padding:"5px 10px",margin:"5px 0px"}}/><br></br>
        <input type="email" name='email' value={email} onChange={(e)=>handlechange(e)} placeholder='Enter Your Email' style={{padding:"5px 10px",margin:"5px 0px"}}/><br></br>
        <input type="password" name='password' value={password} onChange={(e)=>handlechange(e)} placeholder='Enter Your Password' style={{padding:"5px 10px",margin:"5px 0px"}}/><br></br><br></br>
        <select name="grade" value={grade} id="" onChange={(e)=>handlechange(e)}  style={{padding:"10px 10px"}}>
            <option value="Select Your Grade">Select Your Grade</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
        </select><br></br><br></br>
        Male : <input type="radio" name='gender' value={"Male"} onChange={(e)=>handlechange(e)}/>
        Female : <input type="radio" name='gender' value={"Female"} onChange={(e)=>handlechange(e)}/><br></br><br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default StudentForm
