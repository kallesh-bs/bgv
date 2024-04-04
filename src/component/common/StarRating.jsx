import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const StarRating = ({
  rating,
  handleRating,
  isEditable,
  containerClass,
  starWidth = 25,
}) => {
  const [hover, setHover] = useState(0);

  const onChangeRating = (ratingValue) => {
    if (isEditable) handleRating(ratingValue);
  };

  return (
    <div className={`flex ${containerClass}`}>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        const filled = ratingValue <= (hover || rating);

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              style={{ display: "none" }}
              value={ratingValue}
              onClick={() => onChangeRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={filled ? "#ffc107" : "#e4e5e9"}
              size={starWidth}
              onMouseEnter={() => (isEditable ? setHover(ratingValue) : null)}
              onMouseLeave={() => (isEditable ? setHover(0) : null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

StarRating.propTypes = {
  rating: PropTypes.number,
  handleRating: PropTypes.func,
  isEditable: PropTypes.bool,
  containerClass: PropTypes.string,
  starWidth: PropTypes.number,
};
