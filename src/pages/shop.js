import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Merch for Sale 🛒</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
