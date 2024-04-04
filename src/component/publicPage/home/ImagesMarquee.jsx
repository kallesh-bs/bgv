import React from "react";
import PropTypes from "prop-types";

export default function ImagesMarquee ({ imageUrls }) {
  return (
    <div className="container_for">
      <div className="relative w-[100vw] h-[10vh] md:h-[18vh] py-[2rem]">
        <div className="scroll-element primary mr-10">
          {imageUrls.map((item) => {
            return (
              <img
                key={item}
                src={item}
                alt={item}
                className={`${
                  !item.includes("logo+png+1+(1).png") ? "w-[5vw]" : "w-[8vw]"
                }`}
              />
            );
          })}
        </div>
        <div className="scroll-element secondary">
          {imageUrls.map((item) => {
            return (
              <img
                key={item}
                src={item}
                alt={item}
                className={`${
                  !item.includes("logo+png+1+(1).png") ? "w-[5vw]" : "w-[8vw]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

ImagesMarquee.propTypes = {
  imageUrls: PropTypes.any,
};
