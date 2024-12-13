import React from "react";
import "./Rating.css";

function Rating({ note }) {
    const fullStars = note >= 4.5 ? 5 : Math.floor(note); 
    const emptyStars = 5 - fullStars; 
  

  return (
    <div className="rating">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span key={`full-${index}`} className="star full">★</span>
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={`empty-${index}`} className="star empty">☆</span>
        ))}
    </div>
  );
}

export default Rating;
