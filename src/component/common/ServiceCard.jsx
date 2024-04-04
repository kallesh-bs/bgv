import { t } from "i18next";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({ imageUrl, link, title, description }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <div className="w-full flex flex-col gap-[25px]">
      <div className="service_icon_container p-[20px]">
        {imageUrl}
      </div>
      <Link className="font-[jost] text-xl" rel="canonical" to={link}>
        {title}
      </Link>
      <p className="w-full text-[#646978]">
        {isReadMore ? `${description.slice(0, 150)}... ` : `${description}  `}
        <span className="text-[#031B59]">
          <button onClick={() => setIsReadMore(!isReadMore)}>
            {!isReadMore ? t("read_less") : t("readMore")}
          </button>
        </span>
      </p>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
