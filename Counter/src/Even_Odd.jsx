import React from "react";
import { useState } from "react";

const Even_Odd = () => {
  const [value, setValue] = useState(0);

// PRIME 
  const Prime = (value) => {
    let count = 0;
    for (let i = 1; i <= value; i++) {
      if (value % i == 0) {
        count++;
      }
    }
    if (count == 2) {
      return "true";
    } else {
      return "false";
    }
  };

//   EVEN ODD
  const Even_Odd = (value) => {
    for (let i = 1; i <= value; i++) {
      if (value % 2 == 0) {
        return "even";
      } else {
        return "Odd";
      }
    }
  };


  return (
    <div style={{ textAlign: "center" }} className="card">
      <h1 style={{ fontSize: "50px" }}>welcom to counter 2.0</h1>
      <h1>counter: {value}</h1>
      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={() => setValue(value + 1)}
      >
        +1
      </button>
      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        disabled={value === 0}
        onClick={() => setValue(value - 1)}
      >
        -1
      </button>{" "}
      <br /> <br />
      <button
        style={{ margin: "10px", padding: "10px 20px" }}
        onClick={() => setValue(0)}
      >
        Reset
      </button>
      <p style={{ fontSize: "25px" }}>This number is : {Even_Odd(value)} </p>
      <p style={{ fontSize: "25px" }}>Prime number : {Prime(value)}</p>
    </div>
  );
};

export default Even_Odd;
