import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  function requireLogin(e, path) {
    e.preventDefault();
    if (!user) {
      navigate("/login");
    } else {
      navigate(path);
    }
  }

  function handleCheckoutClick(e) {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      setShowModal(true);
      return;
    }

    navigate("/checkout");
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="brand">
            Rami’s Dreamland
          </Link>

          <div className="nav-links">
            <a
              href="/home"
              className="nav-link"
              onClick={(e) => requireLogin(e, "/home")}
            >
              Home
            </a>

            <a
              href="/about"
              className="nav-link"
              onClick={(e) => requireLogin(e, "/about")}
            >
              About
            </a>

            <a
              href="/shop"
              className="nav-link"
              onClick={(e) => requireLogin(e, "/shop")}
            >
              Shop
            </a>

            <a
              href="/cart"
              className="nav-link"
              onClick={(e) => requireLogin(e, "/cart")}
            >
              Cart
              {itemCount > 0 && (
                <span className="cart-badge">{itemCount}</span>
              )}
            </a>

            <a
              href="/checkout"
              className="nav-link"
              onClick={handleCheckoutClick}
            >
              Checkout
            </a>

            {user && (
              <button className="nav-link logout" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>Checkout is only available after adding products</p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
