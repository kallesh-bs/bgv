import React from "react";
import { awsURL } from "utils/Constants";
import SectionHeadings from "./SectionHeadings";
import { useTranslation } from "react-i18next";

// Array of image URL
const imageUrls = [
  `${awsURL}/images/home_tech_01.webp`,
  `${awsURL}/images/home_tech_02.webp`,
  `${awsURL}/images/home_tech_03.webp`,
  `${awsURL}/images/home_tech_04.webp`,
  `${awsURL}/images/home_tech_05.webp`,
  `${awsURL}/images/home_tech_06.webp`,
  `${awsURL}/images/home_tech_07.webp`,
  `${awsURL}/images/home_tech_08.webp`,
  `${awsURL}/images/home_tech_01.webp`,
  `${awsURL}/images/home_tech_02.webp`,
  `${awsURL}/images/home_tech_03.webp`,
  `${awsURL}/images/home_tech_04.webp`,
  `${awsURL}/images/home_tech_05.webp`,
  `${awsURL}/images/home_tech_06.webp`,
  `${awsURL}/images/home_tech_07.webp`,
  `${awsURL}/images/home_tech_08.webp`,
];

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <div
      className="bg-[#F3F6FD] h-fit py-[85px]  px-5 flex flex-col justify-center items-center
     gap-[46px]"
    >
      {/* Headings */}
      <SectionHeadings
        headingPart1={t("webTechnologies")}
        headingPart2={t("weWorkWith")}
        subHeading={t("curentTechnology")}
      />
      {/* Slider Component */}
      <section id="marquee__container p-0">
        <div className="marquee">
          <ul className="marquee__content gap-[6.3rem]">
            {/* Image Url map */}
            {imageUrls.map((imageUrl, index) => (
              <li key={index}>
                <img
                  className="marquee__img"
                  src={imageUrl}
                  alt={`Logo ${index}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
