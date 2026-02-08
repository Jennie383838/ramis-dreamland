function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      width: "200px"
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%" }}
      />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>Status: {product.status}</p>

      <a
        href="https://t.me/YOUR_USERNAME"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: "10px",
          color: "#0088cc"
        }}
      >
        Contact on Telegram
      </a>
    </div>
  );
}

export default ProductCard;
