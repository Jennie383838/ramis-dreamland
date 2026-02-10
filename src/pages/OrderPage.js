import { useLocation, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./Order.css";

export default function OrderPage() {
  const { state } = useLocation();
  const { clearCart } = useCart();

  useEffect(() => {
    if (state) {
      clearCart();
    }
  }, [clearCart, state]);

  // ⬇️ redirect AFTER hooks are declared
  if (!state) {
    return <Navigate to="/" />;
  }

  const { customer, cart, total } = state;

  return (
    <div className="order-wrap">
      <h1>Your Order Is Confirmed 🎉</h1>

      <section className="order-section">
        <h2>Customer Details 💌</h2>
        <p><strong>Name:</strong> {customer.name}</p>
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Phone:</strong> {customer.phone}</p>
        <p><strong>Address:</strong> {customer.address}</p>
      </section>

      <section className="order-section">
        <h2>Order Summary 🧾</h2>

        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <span>{item.card_name} x {item.qty}</span>
            <span>${(item.qty * item.card_price).toFixed(2)}</span>
          </div>
        ))}

        <div className="order-total">
          Total Paid: ${total}
        </div>
      </section>

      <Link to="/shop" className="back-to-shop-btn">
        Back to Shop 🛍️
      </Link>
    </div>
  );
}
