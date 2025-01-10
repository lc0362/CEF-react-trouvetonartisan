import React from "react";
import '../styles/components/Rating.scss';

function Rating({ note }) {
    const fullStars = Math.round(note); 
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