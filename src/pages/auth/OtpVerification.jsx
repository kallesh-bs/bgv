import React from "react";
import { awsURL } from "utils/Constants";

const OtpVerification = () => {
  return (
    <div className="p-4 h-full w-full bg-white flex gap-4 xl:gap-8 justify-center">
      <div
        className="lg:basis-2/6 w-full px-4 py-8 space-y-10 flex flex-col
          items-start lg:justify-center justify-start"
      >
        <img
          className=""
          src={`${awsURL}/images/deeporion_logo.jpg`}
          alt="company_logo"
        />
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-[#23275E] tracking-wide">
            Enter Your OTP
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-4 otp-box">
          <input
            type="text"
            className="bg-white h-12 w-12 border-2"
            autoFocus={true}
            maxLength="1"
          ></input>
          <input
            type="text"
            className="bg-white h-12 w-12 border-2"
            maxLength="1"
          ></input>
          <input
            type="text"
            className="bg-white h-12 w-12 border-2"
            maxLength="1"
          ></input>
          <input
            type="text"
            className="bg-white h-12 w-12 border-2"
            maxLength="1"
          ></input>
        </div>
        <button
          className="h-12 rounded-full w-full text-white text-lg bg-[#23275E]"
          type="submit"
        >
          Submit
        </button>
      </div>
      <div className="w-fit py-24 hidden lg:flex items-center">
        <img src={`${awsURL}/images/login-bg.jpg`} alt="background_image" />
      </div>
    </div>
  );
};

export default OtpVerification;
