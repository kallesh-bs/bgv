import React from "react";
import SectionHeadings from "./SectionHeadings";
import { useTranslation } from "react-i18next";
import { awsURL } from "utils/Constants";

const ChallengesAndSolutions = () => {
  const { t } = useTranslation();

  const challengesAndSolutions = [
    {
      item: 1,
      img: `${awsURL}/images/unqualifiedApplicants.png`,
      mainHeading: "ScreeningThrough",
      spanHeading: "unqualifiedApplicants",
      thirdHeading: "",
      bgColor: "bg-[#031B59]",
    },
    {
      item: 2,
      img: `${awsURL}/images/skilledProfessionals.png`,
      mainHeading: "Get",
      spanHeading: "skilledProfessionals",
      thirdHeading: "withinHours",
      bgColor: "bg-[#2A5DE9]",
    },
    {
      item: 3,
      img: `${awsURL}/images/multipleInterviews.png`,
      mainHeading: "Conducting",
      spanHeading: "multipleInterviews",
      thirdHeading: "canBe",
      bgColor: "bg-[#031B59]",
    },
    {
      item: 4,
      img: `${awsURL}/images/preScreenedProfessionals.png`,
      mainHeading: "Conduct",
      spanHeading: "oneTwo",
      thirdHeading: "interviewsProfessionals",
      bgColor: "bg-[#2A5DE9]",
    },
    {
      item: 5,
      img: `${awsURL}/images/highCosts.png`,
      mainHeading: "RecruitingProficient",
      spanHeading: "highCosts",
      thirdHeading: "",
      bgColor: "bg-[#031B59]",
    },
    {
      item: 6,
      img: `${awsURL}/images/budgetFriendlySolutions.png`,
      mainHeading: "Get",
      spanHeading: "budgetFriendly",
      thirdHeading: "byEnabling",
      bgColor: "bg-[#2A5DE9]",
    },
    {
      item: 7,
      img: `${awsURL}/images/delayedDelivery.png`,
      mainHeading: "ConcernedAbout",
      spanHeading: "qualityDelayed",
      thirdHeading: "",
      bgColor: "bg-[#031B59]",
    },
    {
      item: 8,
      img: `${awsURL}/images/highQualityDelivery.png`,
      mainHeading: "OurExperts",
      spanHeading: "timelyHigh",
      thirdHeading: "",
      bgColor: "bg-[#2A5DE9]",
    },
  ];
  const renderChallengesAndSolutions = (challenges, index) => {
    const isEven = index % 2 === 0;
    const alignmentClass = isEven ? "text-left" : "text-right";
    const textColor = isEven ? "#646978" : "#2A5DE9";
    const fleDirectionClass = isEven ? "flex-row" : "flex-row-reverse";

    return (
      <div className="w-full py-[5px]" key={index}>
        <div
          className={`w-full flex items-center justify-${
            isEven ? "start" : "end"
          }`}
        >
          <div
            className={`w-fit h-fit flex items-center gap-[0.75rem] ${fleDirectionClass}`}
          >
            <div
              className={`w-[3.125rem] h-[3.125rem] rounded-[3.125rem]
              flex items-center justify-center ${challenges.bgColor}`}
            >
              <img src={challenges.img} alt="" />
            </div>
            <h2
              className={`max-w-[14.625rem] text-base ${alignmentClass} ${textColor}`}
            >
              {`${t(challenges.mainHeading)}`}{" "}
              <span className="font-bold">{`${t(challenges.spanHeading)}`}</span>{" "}
              {`${t(challenges.thirdHeading)}`}
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-[1.5rem] py-[5.12rem] lg:hidden flex flex-col  gap-[2.875rem] ">
      <div className="flex justify-center ">
        <SectionHeadings
          headingPart1={t("challenges")}
          headingPart2={t("challengesSecond")}
          subHeading={t("challengesSub")}
        />
      </div>
      <div className="w-full h-fit flex flex-col gap-[22px] justify-center items-center">
        {challengesAndSolutions.map((challenges, index) =>
          renderChallengesAndSolutions(challenges, index)
        )}
      </div>
    </div>
  );
};

export default ChallengesAndSolutions;
