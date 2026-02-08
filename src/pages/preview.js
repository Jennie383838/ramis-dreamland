import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = "/products";

export default function Preview() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(API_URL + "/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div className="container">Loading item...</div>;
  }

  return (
    <div className="container preview-page">
      <h1>{product.title}</h1>

      <div className="preview-card">
        <p><strong>Group:</strong> {product.group}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Status:</strong> {product.card_status}</p>
        <p>{product.description}</p>

        <a
          href="https://t.me/Ruka1111"
          target="_blank"
          rel="noopener noreferrer"
          className="btn primary"
        >
          Buy via Telegram
        </a>
      </div>
    </div>
  );
}
