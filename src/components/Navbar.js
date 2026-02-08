import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const linkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">Rami’s Dreamland</Link>
        <div className="nav-links">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/shop" className={linkClass}>Shop</NavLink>
          <NavLink to="/preview/1" className={linkClass}>Preview</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;