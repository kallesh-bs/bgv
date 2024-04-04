import React from "react";
import { awsURL } from "utils/Constants";
import SectionHeadings from "../home/SectionHeadings";
import { useTranslation } from "react-i18next";

const Philosophy = () => {
  const { t } = useTranslation();

  const data = [
    {
      img: `${awsURL}/images/exp01.png`,
      head: "Reliable",
      alt: "reliable",
      content:
        "We prefer long term relationship rather then short term profits ",
    },
    {
      img: `${awsURL}/images/exp03.png`,
      head: "Affordable ",
      alt: "affordable",
      content: "We provide very affordable and competitive pricing",
    },
    {
      img: `${awsURL}/images/exp02.png`,
      head: "Availability",
      alt: "availability",
      content: "We respond to client queries as quickly as possible",
    },
    {
      img: `${awsURL}/images/exp04.png`,
      head: "Standards",
      alt: "standards",
      content: "We strive to maintain quality and standard in our work",
    },
  ];

  return (
    <div
      className="w-full h-fit p-[20px] md:p-[80px] flex flex-col gap-[50px]
     items-center justify-evenly bg-[#F3F6FD]"
    >
      <SectionHeadings
        headingPart1={t("philosophyHeading1")}
        headingPart2={t("philosophyHeading2")}
      />
      <div className="w-full flex items-center justify-center">
        <div
          className="w-fit items-center justify-center grid grid-cols-1 md:grid
         md:grid-cols-2 xl:grid xl:grid-cols-4 gap-16 xl:gap-8"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[274px] h-[205px]
                gap-4 bg-white rounded-2xl about-phil-boxes shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)]"
            >
              <div>
                <img src={item.img} alt={item.alt} />
              </div>
              <div>
                <span className="text-[#031B59] font-semibold leading-[0.16px]">
                  {item.head}
                </span>
              </div>
              <div>
                <p
                  className="w-56
                  text-[#646978]"
                  style={{
                    textAlignLast: "center",
                  }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
