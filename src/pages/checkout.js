import "./checkout.css";

export default function Checkout() {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <form className="checkout-form">
        <label>
          Full Name
          <input type="text" placeholder="Your name" required />
        </label>

        <label>
          Email
          <input type="email" placeholder="you@email.com" required />
        </label>

        <label>
          Shipping Address
          <textarea placeholder="Delivery address" required />
        </label>

        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>

      <p className="note">
        Thank you for supporting Rami’s Dreamland 💖
      </p>
    </div>
  );
}
