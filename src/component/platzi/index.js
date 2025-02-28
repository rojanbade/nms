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

  console.log({ products });
  return (
    <div>
      <h1>Products</h1>
      <button
        onClick={() => {
          navigate("/product/add");
        }}
      >
        Add Product
      </button>

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
                <h1>{product.price}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Platzi;
