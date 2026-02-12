import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./Order.css";

export default function OrderPage() {
  const { state } = useLocation();
  const { clearCart } = useCart();
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (!state) return;
    clearCart();
  }, [state, clearCart]);

  if (!state) {
    return <Navigate to="/home" replace />;
  }

  const { customer, cart, total, orderId } = state;

  return (
    <div className="order-wrap">
      <div className="confetti"></div>

      {/* ===== CENTER POPUP ===== */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Order Completed 🎉</h3>
            <p>
              Please screenshot your order and send it to
              <strong> Ruka_Forever </strong> on Telegram.
            </p>
            <p className="logout-highlight">
              Then click the <strong>Logout</strong> button in the navbar to logout.
            </p>
            <button onClick={() => setShowPopup(false)}>
              Okay
            </button>
          </div>
        </div>
      )}

      <h1>Your Order Is Confirmed 🎉</h1>

      <section className="order-section">
        <h2>Customer Details 💌</h2>
        <p><strong>Name:</strong> {customer?.name}</p>
        <p><strong>Email:</strong> {customer?.email}</p>
        <p><strong>Phone:</strong> {customer?.phone}</p>
      </section>

      <section className="order-section">
        <h2>Order Summary 🧾</h2>

        {cart?.map((item) => (
          <div key={item.id} className="order-item">
            <span>{item.card_name} × {item.qty}</span>
            <span>
              ${(item.qty * Number(item.card_price)).toFixed(2)}
            </span>
          </div>
        ))}

        <div className="order-total">
          Total Paid: ${Number(total).toFixed(2)}
        </div>

        <div className="order-id">
          Order ID: #{orderId}
        </div>
      </section>

      <div className="telegram-notice">
        📸 Screenshot this page and send it to  
        <strong> Ruka_Forever </strong> on Telegram.
      </div>
    </div>
  );
}
