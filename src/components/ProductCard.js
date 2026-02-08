import "./ProductCard.css";

function ProductCard({ product }) {
  const statusClass = `product-status ${product.card_status === "Available" ? "available" : ""}`;

  return (
    <div className="product-card">
      <img
        className="product-img"
        src={product.card_image}
        alt={product.card_name}
      />
      <h3 className="product-title">{product.card_name}</h3>
      <p className="product-price">{product.card_price}</p>
      <p className={statusClass}>Status: {product.card_status}</p>

      <div className="product-actions">
        <a
          className="contact-link"
          href="https://t.me/Ruka1111"
          target="_blank"
          rel="noreferrer"
        >
          Contact on Telegram
        </a>
      </div>
    </div>
  );
}
export default ProductCard;