import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./cart.css";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.card_price) * item.qty,
    0
  );

  function handleCheckout() {
    if (cart.length === 0) return;

    setLoading(true);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      navigate("/checkout");
    }, 1200);
  }

  return (
    <>
      <div
        className="cart-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Your Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty 💗</p>
        ) : (
          <>
            {cart.map((item) => {
              const price = Number(item.card_price);
              const subtotal = price * item.qty;

              return (
                <div
                  key={item.card_name}
                  style={{
                    display: "flex",
                    gap: "28px",
                    width: "100%",
                    maxWidth: "800px",
                    padding: "20px 0",
                    borderBottom: "1px solid #eee",
                    alignItems: "flex-start",
                  }}
                >
                  {/* IMAGE COLUMN */}
                  <img
                    src={item.card_image}
                    alt={item.card_name}
                    style={{
                      width: "160px",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "14px",
                      backgroundColor: "#f5f5f5",
                      flexShrink: 0,
                    }}
                  />

                  {/* DETAILS COLUMN */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {item.card_name}
                    </div>

                    <div style={{ fontSize: "16px" }}>
                      ${price.toFixed(2)}
                    </div>

                    {/* QTY */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        marginTop: "6px",
                      }}
                    >
                      <button
                        onClick={() => decreaseQty(item.card_name)}
                        style={{
                          width: "40px",
                          height: "40px",
                          fontSize: "22px",
                          borderRadius: "10px",
                        }}
                      >
                        −
                      </button>

                      <span
                        style={{
                          minWidth: "32px",
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "500",
                        }}
                      >
                        {item.qty}
                      </span>

                      <button
                        onClick={() => addToCart(item)}
                        style={{
                          width: "40px",
                          height: "40px",
                          fontSize: "22px",
                          borderRadius: "10px",
                        }}
                      >
                        +
                      </button>
                    </div>

                    <div style={{ fontSize: "16px" }}>
                      Subtotal: ${subtotal.toFixed(2)}
                    </div>

                    <button
                      className="delete"
                      onClick={() => removeFromCart(item.card_name)}
                      style={{ alignSelf: "flex-start" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}

            <h2 style={{ marginTop: "30px" }}>
              Total: ${total.toFixed(2)}
            </h2>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={loading}
              style={{
                marginTop: "20px",
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              {loading ? "Preparing Stage ✨" : "Checkout"}
            </button>
          </>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <p>🎉 Ready for checkout! Your idols are waiting 💖</p>
          </div>
        </div>
      )}
    </>
  );
}
