import React from "react";
import { awsURL } from "utils/Constants";
import PropTypes from "prop-types";

const HeroCard = ({ heroClass }) => {
  return (

    <div
      className={`h-[10.563rem] w-full p-0 m-0 col-span-2 rounded-[20px] bg-[#9FB6F9] ${heroClass}`}
    >
      <img
        className="h-full w-full p-0 rounded-[20px] object-cover"
        src={`${awsURL}/images/heroImage.png`}
        alt="heroImage"
      />
    </div>
  );
};
HeroCard.propTypes = {
  heroClass: PropTypes.string,
};

export default HeroCard;

