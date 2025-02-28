import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./product.css";

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
    <>
      <div class="product-container">
        <h1>Products</h1>
        <button onClick={() => navigate("/product/add")}>Add more</button>
        <ul class="product-grid">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <li
                  key={product.id}
                  onClick={() =>
                    navigate(`/product/${product.id}`, { state: { product } })
                  }
                >
                  <img src={product.images[0]} alt="image" />
                  <h3>{product.title}</h3>
                  <h1>${product.price}</h1>
                  <p>{product.description}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Platzi;
