import React, { useState } from "react";
import "../Styling/AdminPanel.css";
import Inventory from "./Inventory";

export default function AdminPanel() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminEmail = "usmarif24@gmail.com";
  const adminPassword = "USA123*";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      setIsLoggedIn(true);
      setShowLogin(false);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="admin-panel">
      {!isLoggedIn ? (
        <>
          <h1>Admin Panel</h1>
          <p>
            "Welcome to the Admin Panel, your central hub for managing and
            monitoring all aspects of the system. Here, you can effortlessly
            track user activity, manage content, and maintain smooth
            operations."
          </p>

          <div className="admin-buttons">
            <button onClick={() => setShowLogin(true)}>Login</button>
          </div>

          {showLogin && (
            <div className="modal">
              <div className="modal-content">
                <button className="close" onClick={() => setShowLogin(false)}>
                  ×
                </button>
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <br />
                  <br />
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          )}
        </>
      ) : (
        <Inventory />
      )}
    </div>
  );
}
