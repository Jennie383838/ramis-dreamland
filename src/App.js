import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";

// pages
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgetpassword";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./pages/admindashboard";
import AccessDenied from "./pages/AccessDenied";

// route protection
import ProtectedRoute from "./components/ProtectedRoutes";
import AdminRoute from "./components/AdminRoute";

import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />

        <Routes>

          {/* default redirect */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* protected member routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shop"
            element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order"
            element={
              <ProtectedRoute>
                <OrderPage />
              </ProtectedRoute>
            }
          />

          {/* admin-only route */}
          <Route
            path="/admin-dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          {/* access denied page for unauthorized users */}
          <Route path="/access-denied" element={<AccessDenied />} />

          {/* fallback for undefined routes */}
          <Route path="*" element={<Navigate to="/home" replace />} />

        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}