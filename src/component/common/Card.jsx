import React from "react";
import PropTypes from "prop-types";

const Card = ({ id, cardClass, children }) => {
  return (
    <div
      id={`customcard_${id}`}
      className={`p-5 rounded-[20px]
    shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)] ${cardClass}`}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  cardClass: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
