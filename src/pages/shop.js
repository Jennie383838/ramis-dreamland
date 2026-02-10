import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import "./shop.css";

export default function Shop() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://personalwebsite-1-ngee.onrender.com/products"
        );

        if (!res.ok) {
          throw new Error("Failed to load products");
        }

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // IMPORTANT: do NOT generate cartId here
    addToCart(product);
  };

  if (loading) {
    return <p className="shop-status">Loading products…</p>;
  }

  if (error) {
    return <p className="shop-status error">{error}</p>;
  }

  return (
    <div className="container">
      <h1>Shop</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.card_name}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
