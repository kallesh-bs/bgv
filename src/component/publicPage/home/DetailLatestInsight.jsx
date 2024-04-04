import React, { useEffect, useState } from "react";
import { insightData } from "../Constants";
import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

function DetailLatestInsight() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const filteredData = insightData.filter((obj) => obj.id === id);
      setData(filteredData[0]);
    }
  }, [id]);

  return (
    <div className="w-full">
      <div className="detail_insight_bg bg-left-bottom w-full flex items-end justify-start">
        <div
          className="h-full w-full flex flex-col items-start justify-end
        [transform:rotateY(180deg)] pl-[8.56rem] pb-[4.62rem]"
        >
          <div
            className="flex items-center justify-center text-white
          text-[1.25rem] gap-[0.4rem] font-semibold"
          >
            <p className="cursor-pointer" onClick={() => navigate(-1)}>
              {t("insightsTitle1")}
            </p>
            <MdKeyboardDoubleArrowRight />
            <span className="text-[#ED6E0F]">{t(`${data.title}Name`)}</span>
          </div>
          <h1
            className="font-raleway text-[#F9FAFB] w-[40rem] max-w-[68rem]
          text-[3rem] leading-[3.5rem] font-semibold"
          >
            {t(data.title)}
          </h1>
        </div>
      </div>
      <div className="w-full h-fit py-[5.13rem] px-[8.25rem]">
        <p className="text-[#ED6E0F] text-[1.5rem] font-bold">Introduction</p>
        <p>
          In the ever-evolving landscape of technology, where innovation is the
          only constant, a new dawn has emerged with the unveiling of Apples
          Vision Pro. This device is not merely an addition to the tech giants
          illustrious lineup; it represents a paradigm shift in how we perceive,
          interact with, and immerse ourselves in the digital world. The Vision
          Pro, with its groundbreaking features and design, is poised to
          redefine our digital experiences, blurring the lines between reality
          and virtuality and ushering in a new era of personal technology. From
          the drawing boards of Cupertino to the eager hands of consumers
          worldwide, the Vision Pro has been shrouded in speculation,
          anticipation, and awe. Its announcement was a momentous occasion that
          promised to shake the very foundations of entertainment, work, and
          social interaction. This blog post embarks on an extensive journey to
          uncover the magic behind the Vision Pro, delving into its design,
          features, technology, and the unparalleled user experience it offers.
          Join us as we explore every facet of this marvel, a testament to
          Apples relentless pursuit of innovation and excellence.
        </p>
      </div>
      {/* next component */}
    </div>
  );
}

export default DetailLatestInsight;
