import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container home">
      <div className="hero">
        <h1>Rami’s Dreamland ✨</h1>
        <p>
          Your trusted K-pop marketplace for authentic merch, trades,
          and exclusive concert updates.
        </p>

        <div className="hero-buttons">
          <Link to="/shop" className="btn primary">
            Shop Now
          </Link>

          <a
            href="https://t.me/Ruka1111"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            Join Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
