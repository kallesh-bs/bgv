import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeadings from "./SectionHeadings";
import { awsURL } from "utils/Constants";

export default function ChooseUsMobile() {
  const { t } = useTranslation();
  const data = [
    {
      id: "1",
      head: "passionDevelopment",
      content: "passionDevelopmentContent",
    },
    {
      id: "2",
      head: "performanceCentric",
      content: "performanceCentricContent",
    },
    {
      id: "3",
      head: "successOriented",
      content: "successOrientedContent",
    },
    {
      id: "4",
      head: "fasterTime",
      content: "fasterTimeContent",
    },
    {
      id: "5",
      head: "talentExpertise",
      content: "talentExpertiseContent",
    },
  ];

  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-[46px] lg:py-[85px] lg:px-[135px]
     px-[35px] py-[100px] bg-[#F3F6FD]"
    >
      {/* Headings */}
      <SectionHeadings
        headingPart1={t("why")}
        headingPart2={t("chooseUS")}
        subHeading={t("digitalDevelopment")}
      />
      {/* Cardss Component */}
      <div className="w-full h-fit flex justify-evenly flex-wrap gap-4">
        {data.map((obj) => (
          <div
            key={obj.id}
            className="w-fit h-fit m-0 border-b-[2px] border-[#031B59] rounded-[18px]"
          >
            <div
              className="relative h-[15rem] w-full max-w-[20.25rem] rounded-[18px]
            shadow-[4px_10px_30px_0px_rgba(0,0,0,0.06)]"
            >
              <img
                className="w-full h-full object-cover rounded-[18px]"
                src={`${awsURL}/images/BackImageChooseUs.png`}
                alt="avatar"
              />
              <div
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-full
              max-w-[18rem] h-fit p-2 flex flex-col gap-5 items-center justify-center "
              >
                <p className="text-[19px] font-bold text-[#031B59]">
                  {t(obj.head)}
                </p>
                <p className="text-[#646978]">{t(obj.content)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
