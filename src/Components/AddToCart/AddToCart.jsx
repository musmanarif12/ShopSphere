import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import BuyNow from "../BuyNow/BuyNow";

export default function AddToCart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showBuyForm, setShowBuyForm] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);

    const sum = items.reduce((acc, item) => {
      const priceNumber = Number(item.Price.replace("Rs. ", "").replace(",", ""));
      return acc + priceNumber;
    }, 0);
    setTotal(sum);
  }, []);

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    const sum = updatedCart.reduce((acc, item) => {
      const priceNumber = Number(item.Price.replace("Rs. ", "").replace(",", ""));
      return acc + priceNumber;
    }, 0);
    setTotal(sum);

    alert("Item removed from cart!");
  };

  const handleBuyClick = () => {
    setShowBuyForm(true);
  };

  const handleConfirmOrder = () => {
    alert(`Total bill is Rs. ${total}. Thank you for your purchase!`);
    localStorage.removeItem("cartItems");
    setCartItems([]);
    setTotal(0);
    setShowBuyForm(false);
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <Navbar />
        <p style={{ textAlign: "center", marginTop: "50px" }}>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Your Cart</h1>
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#e3e3e3" }}>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.Image} alt={item.Name} width="70" style={{ borderRadius: "5px" }} />
                </td>
                <td>{item.Name}</td>
                <td>{item.Price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <h2>Total: Rs. {total}</h2>
          <button
            onClick={handleBuyClick}
            style={{
              padding: "10px 20px",
              backgroundColor: "#95c6e5",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Buy
          </button>
        </div>

        {showBuyForm && (
          <div style={{
            position: "fixed",
            top: 0, left: 0, width: "100%", height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center",
            zIndex: 1000
          }}>
            <div style={{ background: "white", padding: "20px", borderRadius: "10px", width: "400px" }}>
              <BuyNow total={total} onConfirm={handleConfirmOrder} />
              <button
                onClick={() => setShowBuyForm(false)}
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
