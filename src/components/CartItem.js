import "./CartItem.css";

export default function CartItem({ item, onRemove }) {
  const price = Number(item.card_price || 0);
  const total = price * item.qty;

  return (
    <div className="cart-item">
      <img src={item.card_image} alt={item.card_name} />

      <div className="cart-info">
        <h3>{item.card_name}</h3>

        <p>Price: ${price.toFixed(2)}</p>
        <p>Quantity: {item.qty}</p>
        <p>Subtotal: ${total.toFixed(2)}</p>

        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
}
