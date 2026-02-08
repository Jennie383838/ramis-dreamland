import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img
        src={product.card_image}
        alt={product.card_name}
        className="product-image"
        onClick={() => navigate(`/preview/${product.id}`)}
        style={{ cursor: "pointer" }}
      />
      <h3>{product.card_name}</h3>
      <p>Price: ${product.card_price}</p>
      <p>Status: {product.card_status}</p>
      <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
}
