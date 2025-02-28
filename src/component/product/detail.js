import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./details.css";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="container">
      <img src={product.images[0]} alt="image" />
      <h3>{product.title}</h3>
      <h1>${product.price}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
