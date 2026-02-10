import { useCart } from "../context/CartContext";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./checkout.css";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.card_price * item.qty,
    0
  );

  const orderText = cart
    .map(
      (item) =>
        `${item.card_name} x${item.qty} - $${(
          item.qty * item.card_price
        ).toFixed(2)}`
    )
    .join("\n");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.phone || !form.address) {
      alert("⚠️ Please fill in all required fields");
      return;
    }

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        ...form,
        order: orderText,
        total: total.toFixed(2),
      },
      "YOUR_PUBLIC_KEY"
    );

    alert("🎉 Order sent successfully!");
    clearCart();
  }

  return (
    <div className="checkout-wrap">
      <h1 className="checkout-title">
        Final Stage <span>✨</span>
      </h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 💔</p>
      ) : (
        <>
          <div className="checkout-grid">
            {/* ORDER SUMMARY */}
            <div className="order-summary">
              <h2>Your Order 💿</h2>

              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.card_image} alt={item.card_name} />
                  <div>
                    <h4>{item.card_name}</h4>
                    <p>Qty: {item.qty}</p>
                    <span>
                      ${(item.qty * item.card_price).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}

              <div className="summary-total">
                Total: ${total.toFixed(2)}
              </div>
            </div>

            {/* FORM */}
            <div className="checkout-form">
              <h2>Your Details 💖</h2>

              <input name="name" placeholder="Full Name *" onChange={handleChange} />
              <input name="email" placeholder="Email *" onChange={handleChange} />
              <input name="phone" placeholder="Phone *" onChange={handleChange} />
              <textarea
                name="address"
                placeholder="Shipping Address *"
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="place-order-btn" onClick={handleSubmit}>
            Confirm Order 💕
          </button>
        </>
      )}
    </div>
  );
}
