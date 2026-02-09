import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.card_image} alt={product.card_name} />

      <h3>{product.card_name}</h3>
      <p className="price">${product.card_price.toFixed(2)}</p>
      <span className="status">{product.card_status}</span>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
