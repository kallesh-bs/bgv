/* eslint-disable max-len */
import React from "react";
import { useTranslation } from "react-i18next";
import CircleTick from "svgComponents/CircleTick";
import VectorBtn from "svgComponents/VectorBtn";
import { awsURL } from "utils/Constants";

import { servicesCardData } from "utils/constant/ServicesCardsData";

const HireCard = () => {
  const { t } = useTranslation();

  return (
    <>
      {servicesCardData?.map(
        (obj, index) =>
          window.location.pathname.includes(obj.path) && (
            <div key={index} className="w-full flex items-center justify-center">
              {/* main section */}
              <div
                className="flex flex-col lg:flex-row justify-center items-center px-6 md:px-8
                  xl:px-[135px] py-[82px] gap-[30px] bg-[#F9FAFB] "
              >
                {/* //left image section */}
                <div className="flex rounded-[4px] overflow-hidden">
                  <img
                    className="h-[100%] w-[600px] transition-transform transform hover:scale-110  duration-500 cursor-pointer object-cover"
                    src={obj.image}
                    alt="sample"
                  />
                </div>

                {/* //right content section */}
                <div className="h-fit max-w-[37.75rem] flex flex-col justify-center text-left gap-[20px]">
                  <img className="w-fit h-fit" src={`${awsURL}/images/Frame+260.png`} alt="services" />
                  <h4
                    className="font-Raleway text-2xl
                  lg:text-[36px] font-bold leading-[44px] -tracking-[0.36px] text-[#031B59]"
                  >
                    {`${t(obj.heading1)}`}
                    <span className="text-[#ED6E0F]">{`${t(
                      obj.heading2
                    )}`}</span>
                  </h4>
                  <p className="text-[#646978] leading-[22px]">
                    {`${t(obj.description1)}`}
                  </p>
                  <p className="text-[#646978]">{`${t(obj.description2)}`}</p>
                  <div className="flex flex-col w-full h-full gap-[40px]">
                    {/* services data points */}
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-5">
                        {obj.data?.map((item) => (
                          <div key={item.id} className="flex gap-2 items-start">
                            <div>
                              <CircleTick />
                            </div>
                            <div>{`${t(item.desc)}`}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center lg:flex lg:justify-start">
                      <button
                        className="flex justify-center items-center lg:flex lg:items-center w-auto  h-[54px] rounded-lg
                          border-[1.5px] px-4 py-7 gap-3
                        bg-[#031B59] text-white border-[#031B59] text-lg"
                      >
                        {`${t(obj.hire)}`}
                        <i>{<VectorBtn />}</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default HireCard;
