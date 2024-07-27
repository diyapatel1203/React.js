import React, { useContext } from "react";
import "/src/App.css";
import { ThemeContext } from "../context/ThemeContext";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { theme, ThemeContextFunction } = useContext(ThemeContext);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          width: "90%",
          margin: "auto",
        }}
      >
        <div className="menu">
          <a style={{ color: theme == "light" ? "black" : "white" }} href="">
            Home
          </a>
          <a style={{ color: theme == "light" ? "black" : "white" }} href="">
            About
          </a>
          <a style={{ color: theme == "light" ? "black" : "white" }} href="">
            Contact
          </a>
          <a style={{ color: theme == "light" ? "black" : "white" }} href="">
            Service
          </a>
        </div>
        <div>
          <h2 onClick={ThemeContextFunction}>
            {theme == "light" ? <FaMoon /> : <IoSunnySharp />}
          </h2>
        </div>
      </div>

      <div
        style={{
          width: "90%",
          margin: "auto",
          paddingLeft: "50px",
          display: "flex",
        }}
      >
        <div>
          <h2>The Theme is {theme}</h2>
          <p style={{ width: "80%", textAlign: "justify" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            ipsam dolore quod quo laboriosam non numquam, soluta, labore
            doloremque voluptatibus earum voluptas, suscipit nisi nemo autem
            nulla officia laudantium tenetur. Recusandae delectus voluptatum,
            iusto laudantium earum nesciunt iure minima labore cumque doloremque
            maxime ducimus consectetur tenetur dolore excepturi voluptatem
            explicabo.
          </p>
          <p style={{ width: "80%", textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui
            suscipit consequatur atque, ducimus placeat nobis sint modi rem
            fugiat itaque, sunt quas totam incidunt. Recusandae esse iusto a
            asperiores?
          </p>
          <br></br>
          <br></br>
          <br></br>

          <p style={{ width: "80%", textAlign: "justify" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            ipsam dolore quod quo laboriosam non numquam, soluta, labore
            doloremque voluptatibus earum voluptas, suscipit nisi nemo autem
            nulla officia laudantium tenetur. Recusandae delectus voluptatum,
            iusto laudantium earum nesciunt iure minima labore cumque doloremque
            maxime ducimus consectetur tenetur dolore excepturi voluptatem
            explicabo.
          </p>
          <p style={{ width: "80%", textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab qui
            suscipit consequatur atque, ducimus placeat nobis sint modi rem
            fugiat itaque, sunt quas totam incidunt. Recusandae esse iusto a
            asperiores?
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolor
            doloribus. Officiis, omnis nihil reprehenderit quam labore repellat
            corporis minus? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Rem ratione fugiat minima possimus quas expedita magni
            consequuntur, iste consequatur voluptatum praesentium necessitatibus
            deserunt unde nemo inventore quidem veritatis quae earum.
          </p>
        </div>
        <div style={{ marginTop: "80px" }}>
          <img
            height={300}
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
