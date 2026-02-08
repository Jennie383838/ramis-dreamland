import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/shop" style={{ marginRight: "15px" }}>Shop</Link>
      <Link to="/about" style={{ marginRight: "15px" }}>About</Link>
      <Link to="/preview">Telegram</Link>
    </nav>
  );
}

export default Navbar;
