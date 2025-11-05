import React from "react";
import "./Card.css";

export default function Card({ Image, Name, Description }) {
  return (
    <div className="card">
      <img src={Image} alt={Name} height="200px" width="200px" />
      <h3>{Name}</h3>
      <p>{Description}</p>
    </div>
  );
}
