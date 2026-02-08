import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./shop.css";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:3000";

function Shop() {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({ loading: true, error: "" });

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/products`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
        setState({ loading: false, error: "" });
      } catch (e) {
        setState({ loading: false, error: e.message || "Failed to load" });
      }
    }
    load();
  }, []);

  if (state.loading) return <div className="state-box">Loading…</div>;
  if (state.error) return <div className="state-box">Error: {state.error}</div>;
  if (products.length === 0) return <div className="state-box">No products yet.</div>;

  return (
    <div className="shop-wrap">
      <h1 className="section-title">Merch for Sale 🛒</h1>
      <div className="products-grid">
        {products.map((item) => (
          <ProductCard key={item.ID} product={item} />
        ))}
      </div>
    </div>
  );
}
export default Shop;