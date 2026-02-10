import { NavLink, Link, useNavigate } from "react-router-dom";
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
    if (!user) navigate("/login");
    else navigate(path);
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
        {/* LOGO */}
        <Link to="/" className="nav-title">
          Rami’s Dreamland
        </Link>

        {/* LINKS */}
        <div className="nav-links">
          <NavLink
            to="/home"
            className="nav-link"
            onClick={(e) => requireLogin(e, "/home")}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="nav-link"
            onClick={(e) => requireLogin(e, "/about")}
          >
            About
          </NavLink>

          <NavLink
            to="/shop"
            className="nav-link"
            onClick={(e) => requireLogin(e, "/shop")}
          >
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            className="nav-link"
            onClick={(e) => requireLogin(e, "/cart")}
          >
            Cart
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </NavLink>

          <NavLink
            to="/checkout"
            className="nav-link"
            onClick={handleCheckoutClick}
          >
            Checkout
          </NavLink>

          {user && (
            <button className="nav-logout" onClick={logout}>
              Logout
            </button>
          )}
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
