import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "./shop.css";

const API_URL = "/products"; // use proxy

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filterAvailable, setFilterAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not load products");
        setLoading(false);
      });
  }, []);

  const addToCart = (id) => alert(`Product ${id} added to cart!`);

  const filteredProducts = filterAvailable
    ? products.filter((p) => p.card_status?.toLowerCase() === "available")
    : products;

  if (loading) return <div className="container">Loading products...</div>;
  if (error) return <div className="container">{error}</div>;

  return (
    <div className="container">
      <h1>Shop</h1>
      <label>
        <input
          type="checkbox"
          checked={filterAvailable}
          onChange={(e) => setFilterAvailable(e.target.checked)}
        />
        Show only available products
      </label>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
