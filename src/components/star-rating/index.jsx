import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
const StarRating = ({ noOfStars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentId) {
    setRating(getCurrentId);
  }
  function handleMouseHover(getCurrentId) {
    setHover(getCurrentId);
  }
  function handleMouseLeave(getCurrentId) {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <div>
            <div>{index}</div>
            <FaStar
              key={index}
              className={index <= hover ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseHover(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
