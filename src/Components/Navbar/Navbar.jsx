import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/Men">Men</Link>
          <Link to="/Women">Women</Link>
          <Link to="/SmartWatches">SmartWatches</Link>
          <Link to="/AddToCart">Add To Cart</Link>
        </div>
        <div className="nav-right">
          <button onClick={() => setShowLogin(true)}>Login</button>
          <button onClick={() => setShowSignUp(true)}>Sign Up</button>
        </div>
      </nav>

      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setShowLogin(false)}>×</button>
            <Login />
          </div>
        </div>
      )}

      {showSignUp && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setShowSignUp(false)}>×</button>
            <SignUp />
          </div>
        </div>
      )}
    </>
  );
}
