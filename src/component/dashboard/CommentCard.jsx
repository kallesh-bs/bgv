import React from "react";
import { DiDart } from "react-icons/di";
import { useTranslation } from "react-i18next";
import { awsURL } from "utils/Constants";

export default function CommentCard() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className=" h-fit flex flex-col space-y-2">
          <div className="w-full flex items-center justify-start">
            <h3 className="text-xl lg:text-2xl font-semibold text-[#031B59]">
              {t("review")}
            </h3>
          </div>
          <div
            className="w-full h-fit p-5 shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)]
          rounded-[20px] flex-col items-center space-y-2 text-[#686868]"
          >
            <div className="w-full flex justify-beetween items-center">
              <div className="w-full h-full flex items-center justify-start space-x-4">
                <div className="h-[3rem] w-[3rem] flex">
                  <img className="h-full w-full" src={`${awsURL}/images/profile_logo.png`} alt="profile" />
                </div>
                <div className="flex flex-col items-center justify-start">
                  <h5 className="text-[#031B59] text-sm font-semibold lg:text-base">
                    EmilyMusic
                  </h5>
                  <h6 className="w-full text-xs lg:text-sm text-[#A1A1A1] text-left">
                    2 Days Ago
                  </h6>
                </div>
              </div>
              <div className="h-full w-full flex items-center justify-end">
                <DiDart
                  className="h-[3rem] w-[3rem] p-1 fill-black
                 stroke-black shadow-[0_0px_20px_0px_rgba(3,27,89,0.2)] rounded-full"
                />
              </div>
            </div>
            <div className="w-full h-full flex items-start justify-start">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                quas impedit placeat nemo, sint assumenda adipisci rerum qui
                voluptas labore blanditiis incidunt fugiat quaerat veritatis non
                eligendi ad id ipsam culpa porro quasi voluptates? Asperiores in
                animi illum dolore aut, sit, velit voluptas quod dolores eum,
                neque quaerat amet ipsam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
