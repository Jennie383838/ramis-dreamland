import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.card_name === product.card_name
      );

      if (existing) {
        return prev.map((item) =>
          item.card_name === product.card_name
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ➖ DECREASE QTY
  const decreaseQty = (card_name) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.card_name === card_name
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // ❌ REMOVE ITEM
  const removeFromCart = (card_name) => {
    setCart((prev) =>
      prev.filter((item) => item.card_name !== card_name)
    );
  };

  // 🧹 CLEAR CART (✅ THIS FIXES YOUR ERROR)
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearCart, // ✅ EXPORTED
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
