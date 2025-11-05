import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2025 TimeVerse. All rights reserved.</p>

      <div className="subscribe-box">
        <input
          type="email"
          placeholder="Enter your email"
          className="subscribe-input"
        />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </footer>
  );
}
