import { useEffect, useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import "./shop.css";

export default function Shop() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredProducts = useMemo(() => {
    let updated = [...products];

    if (searchTerm.trim() !== "") {
      updated = updated.filter((product) =>
        product.card_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    return updated;
  }, [products, searchTerm]);

  if (loading) {
    return <div className="state-box">Loading products…</div>;
  }

  if (error) {
    return <div className="state-box">{error}</div>;
  }

  return (
    <div className="shop-wrap">
      <h1>Shop</h1>

      <div className="shop-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={selectedCategory} disabled>
          <option value="All">All</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.card_name}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))
        ) : (
          <div className="state-box">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}
