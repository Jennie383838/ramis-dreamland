import "./CartItem.css";

export default function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.card_image} alt={item.card_name} />

      <div className="cart-details">
        <h3>{item.card_name}</h3>
        <p>${item.card_price.toFixed(2)}</p>
        <span>{item.card_status}</span>
      </div>

      <button onClick={() => onRemove(item.id)}>✕</button>
    </div>
  );
}
