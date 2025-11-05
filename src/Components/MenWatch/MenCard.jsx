import React from "react";
import "./MenCard.css";

export default function MenCard({
  id,
  Name,
  Image,
  Description,
  Price,
  Stock,
}) {
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const newItem = { id: id + "-" + Date.now(), Name, Image, Price, Stock };
    localStorage.setItem(
      "cartItems",
      JSON.stringify([...existingCart, newItem])
    );
    alert(`${Name} added to cart!`);
  };

  return (
    <>
      <div className="men-card">
        <img src={Image} alt={Name} />
        <h2>{Name}</h2>
        <p>{Description}</p>
        <p>Available Stock: {Stock}</p>
        <h3>{Price}</h3>

        <div className="button-group">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
