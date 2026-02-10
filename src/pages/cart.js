import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./cart.css";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.card_price) * item.qty,
    0
  );

  function handleCheckout() {
    if (cart.length === 0) return;

    setLoading(true);

    // K-pop style popup
    setTimeout(() => {
      alert("🎉 Ready for checkout! Your idols are waiting 💖");
      navigate("/checkout");
    }, 900);
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 💗</p>
      ) : (
        <>
          {cart.map((item) => {
            const price = Number(item.card_price);
            const subtotal = price * item.qty;

            return (
              <div className="cart-row" key={item.card_name}>
                <img src={item.card_image} alt={item.card_name} />

                <div className="cart-name">
                  {item.card_name}
                </div>

                <div>${price.toFixed(2)}</div>

                <div className="qty">
                  <button onClick={() => decreaseQty(item.card_name)}>
                    −
                  </button>

                  <span>{item.qty}</span>

                  <button onClick={() => addToCart(item)}>
                    +
                  </button>
                </div>

                <div>${subtotal.toFixed(2)}</div>

                <button
                  className="delete"
                  onClick={() => removeFromCart(item.card_name)}
                >
                  Delete
                </button>
              </div>
            );
          })}

          <h2>Total: ${total.toFixed(2)}</h2>

          <button
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={loading}
            style={{
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Preparing Stage ✨" : "Checkout"}
          </button>
        </>
      )}
    </div>
  );
}
