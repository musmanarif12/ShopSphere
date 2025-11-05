import React from "react";
import "./ReviewCard.css";

export default function ReviewsCard({ Name, Reviews, rating }) {
  return (
    <div className="review-card">
      <h3>{Name}</h3>
      <p>{Reviews}</p>
      <p>{"⭐".repeat(rating)}</p>
    </div>
  );
}
