import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Merch for Sale 🛒</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.ID} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Shop;