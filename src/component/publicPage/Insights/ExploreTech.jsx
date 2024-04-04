import React, { useState } from "react";
import SectionHeadings from "../home/SectionHeadings";
import { insightData } from "../Constants";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import AnimatedButton from "component/common/AnimatedButton";

function ExploreTech() {
  const { t } = useTranslation();
  const [length, setLength] = useState(6);
  const [activeIndex, setActiveIndex] = useState();
  const navigate = useNavigate();

  return (
    <div
      className="w-full flex flex-col items-center justify-center
      lg:py-[85px] lg:px-[135px] px-[35px] py-[100px] gap-[2.88rem]"
    >
      <SectionHeadings
        headingPart1={`${t("exploreOur")}`}
        headingPart2={`${t("techInsights")}`}
        subHeading="Lorem ipsum dolor sit amet consectetur. At nibh turpis rhoncus nulla vitae."
      />
      <div className="w-full flex justify-center items-center gap-[1.81rem]">
        <div
          className="w-fit grid grid-cols-1 gap-[1.88rem] lg:grid lg:grid-cols-2
        xl:grid xl:grid-cols-3"
        >
          {insightData.map(
            (obj, index) =>
              index < length && (
                <React.Fragment key={index}>
                  <div
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex("")}
                    className="min-w-[23.125rem] h-[27.625rem] rounded-[1.25rem] p-[0.75rem]
shadow-[0px_0px_25px_0px_rgba(3,27,89,0.20)] cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center relative ">
                      <img
                        src={obj.img}
                        className="rounded-[1.125rem] w-full h-[12.125rem]"
                      />
                      <div
                        className="w-[20.125rem] h-[15.375rem] flex flex-col items-start justify-start
gap-[0.75rem] rounded-[1.125rem] absolute top-[10rem]
bg-white py-[0.75rem] px-[0.88rem]"
                      >
                        <div className="w-full h-[2.125rem] flex items-center justify-start gap-[0.62rem]">
                          <img
                            src={obj.profile_pic}
                            className="w-[2.125rem] h-[2.125rem] rounded-full"
                          />
                          <div className="flex items-center justify-start gap-[0.38rem]">
                            <p className="text-[0.875rem] text-[#646978]">
                              {obj.name}
                            </p>
                            <div className="w-[0.175rem] bg-[#DCDCDC] h-[1.5rem]"></div>
                            <p className="text-[0.875rem] text-[#646978]">
                              {obj.date}
                            </p>
                          </div>
                        </div>
                        <div className="w-full h-[8.875rem]">
                          <h2
                            className={`font-bold ${
                              activeIndex === index
                                ? "text-[#ED6E0F]"
                                : "text-[#031B59]"
                            } leading-6`}
                          >
                            {t(obj.title).length > 70
                              ? `${t(obj.title).slice(0, 70)}...`
                              : t(obj.title)}
                          </h2>
                          <p className="text-[0.875rem] leading-[1.375rem] text-[#646978]">
                            {t(obj.content).length > 160
                              ? `${t(obj.content).slice(0, 160)}...`
                              : t(obj.content)}
                          </p>
                        </div>
                        <div className="w-full h-[1.375rem] flex items-center justify-start gap-[0.38rem]">
                          <p
                            onClick={() => navigate(`${obj.id}`)}
                            className={` ${
                              activeIndex === index
                                ? "text-[#ED6E0F]"
                                : "text-[#031B59]"
                            } cursor-pointer`}
                          >
                            {t("readMore")}
                          </p>
                          <MdArrowForward
                            onClick={() => navigate(`${obj.id}`)}
                            className={`${
                              activeIndex === index
                                ? "text-[#ED6E0F]"
                                : "text-[#031B59]"
                            } w-[1.375rem] h-[1.375rem] cursor-pointer`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <AnimatedButton handleClick={() => setLength(length + 6)}>
          {t("loadMore")}
        </AnimatedButton>
      </div>
    </div>
  );
}

export default ExploreTech;
