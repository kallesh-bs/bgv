import React, { useState } from "react";
import PropTypes from "prop-types";
import { awsURL } from "utils/Constants";
import StarRating from "component/common/StarRating";
import UserAvatar from "component/common/UserAvatar";
import { t } from "i18next";

const ClientFeedbackCard = ({
  name,
  designation,
  profileImg,
  rating,
  review,
}) => {
  const [isReadMore, setIsReadMore] = useState(true);

  return (
    <div className="carousel-item">
      <div className="feedback-mob-slash">
        <img src={`${awsURL}/images/slash.png`} alt="slash" className="my-3" />
      </div>
      <div className="carousel-caption  md:block">
        <h2
          className="text-xl  w-[380px] font-normal
                      leading-7 font-[jost] feedback-carousel-content"
        >
          {isReadMore ? `${review.slice(0, 160)}... ` : `${review}  `}
          <span className="text-[#031B59]">
            <button
              className="underline"
              onClick={() => setIsReadMore(!isReadMore)}
            >
              {!isReadMore ? t("read_less") : t("readMore")}
            </button>
          </span>
        </h2>
      </div>
      <div className="border-b-2 border-gray-200 mt-10 feedback-mt"></div>
      {/* Client Avatar, Name,Company */}
      <div className="flex justify-evenly items-center mt-3">
        <UserAvatar imageUrl={profileImg} name={name} />
        <div>
          <span className="ml-[15px] font-[jost] text-xl  font-semibold">
            {name}
          </span>
          <p className="ml-[15px] font-[jost] text-[#646978]">{designation}</p>
        </div>
        <div>
          <StarRating rating={rating} starWidth={18} />
        </div>
      </div>
    </div>
  );
};

export default ClientFeedbackCard;

ClientFeedbackCard.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  profileImg: PropTypes.string,
  designation: PropTypes.string,
  review: PropTypes.string,
};
