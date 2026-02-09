import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./shop.css";

// Uses proxy → http://localhost:3001/products
const API_URL = "/products";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filterAvailable, setFilterAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch {
        setError("Could not load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 🔹 Add to cart (placeholder)
  const addToCart = (id) => {
    alert(`Product ${id} added to cart`);
  };

  // 🔹 Filter available products
  const filteredProducts = filterAvailable
    ? products.filter(
        (p) => p.card_status?.toLowerCase() === "available"
      )
    : products;

  // 🔹 Loading state
  if (loading) {
    return <div className="container">Loading products...</div>;
  }

  // 🔹 Error state
  if (error) {
    return <div className="container">{error}</div>;
  }

  return (
    <div className="container">
      <h1>Shop</h1>

      <label className="filter-checkbox">
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
              onAddToCart={() => addToCart(product.id)}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
