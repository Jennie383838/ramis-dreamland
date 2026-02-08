import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./preview.css";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:3000";

function Preview() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [state, setState] = useState({ loading: true, error: "" });

  useEffect(() => {
    async function load() {
      try {
        // If your backend doesn't have GET /products/:id, fetch all and find by ID
        const res = await fetch(`${API_BASE}/products`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const found = Array.isArray(data) ? data.find(p => String(p.ID) === String(id)) : null;
        if (!found) throw new Error("Product not found");
        setProduct(found);
        setState({ loading: false, error: "" });
      } catch (e) {
        setState({ loading: false, error: e.message || "Failed to load" });
      }
    }
    load();
  }, [id]);

  if (state.loading) return <div className="state-box">Loading…</div>;
  if (state.error) return <div className="state-box">Error: {state.error}</div>;
  if (!product) return <div className="state-box">Product not found.</div>;

  return (
    <div className="preview-wrap">
      <img className="preview-img" src={product.card_image} alt={product.card_name} />
      <div>
        <h1 className="preview-title">{product.card_name}</h1>
        <div className="preview-meta">
          <p><b>Price:</b> {product.card_price}</p>
          <p><b>Status:</b> {product.card_status}</p>
        </div>
        <div className="preview-actions">
          <a
            className="btn btn-telegram"
            href="https://t.me/Ruka1111"
            target="_blank"
            rel="noreferrer"
          >
            Contact on Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
export default Preview;