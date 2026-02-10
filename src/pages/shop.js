import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./shop.css";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [filterAvailable, setFilterAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fetch products from backend
  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://personalwebsite-1-ngee.onrender.com/products"
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setProducts(Array.isArray(data) ? data : []);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Could not load products");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  // 🔹 Filter available products
  const filteredProducts = filterAvailable
    ? products.filter(
        (p) => String(p.card_status).toLowerCase() === "available"
      )
    : products;

  if (loading) {
    return <div className="container">Loading products...</div>;
  }

  if (error) {
    return <div className="container error">{error}</div>;
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
              onAddToCart={() => addToCart(product)}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
