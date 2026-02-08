function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", width: "200px" }}>
      <img src={product.card_image} alt={product.card_name} style={{ width: "100%" }} />
      <h3>{product.card_name}</h3>
      <p>{product.card_price}</p>
      <p>Status: {product.card_status}</p>
      <a
        href="https://t.me/Ruka1111"
        target="_blank"
        rel="noreferrer"
        style={{ display: "inline-block", marginTop: "10px", color: "#0088cc" }}
      >
        Contact on Telegram
      </a>
    </div>
  );
}
export default ProductCard;
