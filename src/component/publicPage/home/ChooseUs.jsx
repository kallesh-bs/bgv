import React from "react";
import Svg10 from "../../../svgComponents/Svg10";
import Svg11 from "../../../svgComponents/Svg11";
import Svg12 from "../../../svgComponents/Svg12";
import Svg20 from "../../../svgComponents/Svg20";
import Svg21 from "../../../svgComponents/Svg21";
import { useTranslation } from "react-i18next";
import SectionHeadings from "./SectionHeadings";

const ChooseUs = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: "1",
      img: <Svg10 />,
      head: "passionDevelopment",
      content: "passionDevelopmentContent",
    },
    {
      id: "2",
      img: <Svg11 />,
      head: "performanceCentric",
      content: "performanceCentricContent",
    },
    {
      id: "3",
      img: <Svg12 />,
      head: "successOriented",
      content: "successOrientedContent",
    },
    {
      id: "4",
      img: <Svg20 />,
      head: "fasterTime",
      content: "fasterTimeContent",
    },
    {
      id: "5",
      img: <Svg21 />,
      head: "talentExpertise",
      content: "talentExpertiseContent",
    },
  ];

  return (
    <div
      className="bg-[#F3F6FD] w-full lg:flex h-fit lg:py-[85px] lg:px-[135px] px-[35px] py-[100px]
     flex-col items-center justify-center gap-[46px]
     home-choose-mob-container"
    >
      {/* Headings */}
      <SectionHeadings
        headingPart1={t("why")}
        headingPart2={t("chooseUS")}
        subHeading={t("digitalDevelopment")}
      />
      {/* Cardss Component */}
      <div className="w-full h-fit flex justify-center flex-wrap gap-[46px]">
        {data.map((contentData, index) => (
          <div
            key={index}
            className="flex items-center flex-col justify-center w-[340px]
              h-[320px] rounded-[30px] main_div home-choose-mob-boxes"
            style={{ boxShadow: "4px 10px 30px 0px rgba(0, 0, 0, 0.06)" }}
          >
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="icon_container">{contentData.img}</div>
                <div className="text-center ">
                  <p className="content_head my-3">{t(contentData.head)}</p>
                  <p
                    className="text-[#646978] font-normal w-[290px] leading-7
                    `font-[jost] content_text home-chooseUs-contentdata"
                    style={{ textAlignLast: "center" }}
                  >
                    {t(contentData.content)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
