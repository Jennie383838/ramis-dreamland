import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome to Rami’s Dreamland ✨</h1>
      <p style={{ maxWidth: 600 }}>
        Browse photocards and merch from your favourite idols. Click “Shop” to start.
      </p>

      <Link
        to="/shop"
        style={{
          display: "inline-block",
          marginTop: 12,
          background: "#111",
          color: "#fff",
          padding: "10px 14px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 700
        }}
      >
        Go to Shop
      </Link>
    </div>
  );
}

export default Home;