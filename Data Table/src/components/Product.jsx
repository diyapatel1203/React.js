import axios from "axios";
import React, { useEffect, useState } from "react";
import "/src/App.css";
import { Link } from "react-router-dom";

const Product = () => {
  const [product, setproduct] = useState([]);
  const [page, setpage] = useState(1);
  const [category, setcategory] = useState(null);
  const [order, setorder] = useState(null);
  const [search,setsearch]=useState("")

  const FetchData = () => {
    axios
      .get(`http://localhost:8000/product`, {
        params: {
          _page: page,
          _limit: 6,
          category: category,
          _sort: "price",
          _order: order,
          q:search
        },
      })
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    FetchData();
  }, [page, category, order,search]);

  // Logout
  function handleckick() {
    const isAuth = localStorage.removeItem("token");

    if (!isAuth) {
      window.location.href = "/login";
    } else {
      window.location.href = "/product";
    }
  }
// Delete
  const handledelete = (id) => {
    axios
      .delete(`http://localhost:8000/product/${id}`)
      .then((res) => {
        console.log(res);
        FetchData();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-around",padding:"20px" }}>
        <div >
          <select  name="" id="" onChange={(e) => setcategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="jewelery">Jwelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Search Here" onChange={(e)=>setsearch(e.target.value)}/>
        </div>
        <div>
          <button className="btn" onClick={() => setorder("desc")}>HightToLow</button>
          <button className="btn" onClick={() => setorder("asc")}>LowToHigh</button>
        </div>
      </div>
    <hr></hr>
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <div>
        <h1 style={{ textAlign: "center" }}>Product Page</h1>
        </div>

        <div>
        <button
        className="btn"
          onClick={handleckick}
        >
          Log Out
        </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
        }}
      >
        {product.map((el) => (
          <div
            style={{
              textAlign: "center",
              boxShadow: "5px 5px 20px grey",
              padding: "10px",
            }}
            key={el.id}
          >
            <Link
              to={`/singlepage/${el.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img height={200} src={el.image} alt="" />
            </Link>
            <h2>{el.id}</h2>
            <h3>{el.title}</h3>
            <h3>{el.price}</h3>
            <h3>{el.category}</h3>
            <p>{el.description}</p>
            <button className="btn">
              <Link
                to={`/edit/${el.id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                Edit
              </Link>
            </button>
            <button className="btn" onClick={() => handledelete(el.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button className="btn" disabled={page == 1} onClick={() => setpage(page - 1)}>
          Previous
        </button>
        <span style={{ marginTop: "20px" }}>{page}</span>
        <button className="btn" disabled={page == 4} onClick={() => setpage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Product;
