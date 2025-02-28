import React from "react";
import { PRODUCT } from "../../dummy";
import { useNavigate } from "react-router";

function Product() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {PRODUCT.map((product) => {
        return (
          <div
            className="Card"
            key={product.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h1>{product.price}</h1>
            <h2>{product.category}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
