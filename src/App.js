import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";

// pages
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import OrderPage from "./pages/OrderPage"; // 👈 NEW

import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<OrderPage />} /> {/* 👈 NEW */}
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}
