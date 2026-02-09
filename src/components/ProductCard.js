import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="product-card">
      <img
        src={product.card_image}
        alt={product.card_name}
      />

      <h3>{product.card_name}</h3>

      <p className="price">
        ${parseFloat(product.card_price || 0).toFixed(2)}
      </p>

      <span className="status">{product.card_status}</span>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

