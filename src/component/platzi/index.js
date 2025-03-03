import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Platzi = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?limit=10&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "0 80px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Products</h1>
        <button
          style={{
            height: "40px",
            padding: "0 20px",
            backgroundColor: "tomato",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={() => {
            navigate("/product/add");
          }}
        >
          Add Product
        </button>
      </div>

      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <div
                className="card"
                key={product.id}
                style={{
                  width: "300px",
                  border: "1px solid #ccc",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <img
                  src={product.images[0]}
                  alt="title"
                  width={300}
                  height={290}
                />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <h1>$ {product.price}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Platzi;
