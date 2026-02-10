import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import "./Navbar.css";

const linkClass = ({ isActive }) =>
  `nav-link${isActive ? " active" : ""}`;

function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const itemCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  function handleCheckoutClick(e) {
    e.preventDefault();

    if (cart.length === 0) {
      setShowModal(true);
    } else {
      navigate("/checkout");
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="brand">
            Rami’s Dreamland
          </Link>

          <div className="nav-links">
            <NavLink to="/home" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <NavLink to="/shop" className={linkClass}>
              Shop
            </NavLink>

            <NavLink to="/cart" className={linkClass}>
              Cart
              {itemCount > 0 && (
                <span className="cart-badge">{itemCount}</span>
              )}
            </NavLink>

            {/* 👇 Checkout control */}
            <a href="/checkout" className="nav-link" onClick={handleCheckoutClick}>
              Checkout
            </a>
          </div>
        </div>
      </nav>

      {/* 👇 MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>Checkout is only available after adding products</p>
            <button onClick={() => setShowModal(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
