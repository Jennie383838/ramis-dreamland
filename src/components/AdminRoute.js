import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/* ===== ADMIN USER LIST ===== */
const ADMIN_USERS = [
  "@Ruka_Forever",
  "@gabbysyj",
  "@xavierkoh1",
  "@Rin_yujinsbangs",
  "@lexlovesrosie"
];

/**
 * Protects routes that only admins can access.
 * Non-admins are redirected to the Access Denied page.
 */

export default function AdminRoute({ children }) {
  const { user } = useAuth();

  // Not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Check if username is in admin list
  if (!ADMIN_USERS.includes(user.username)) {
    return <Navigate to="/access-denied" replace />;
  }

  // Allow admin access
  return children;
}