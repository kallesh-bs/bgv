import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { IoChevronBackOutline } from "react-icons/io5";

import { forgotSchema } from "redux/validator/login";
import apiUrl from "api/apiUrl";
import { awsURL } from "utils/Constants";
import Helper from "api/Helper";

const initialValue = {
  email: "",
};

const Forgot = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const userRole = useSelector((state) => state.userRoleReducer.userRole);

  const Formik = useFormik({
    initialValues: initialValue,
    validationSchema: forgotSchema,
    onSubmit: (value) => {
      handleSubmit(value);
    },
  });

  const handleSubmit = async (value) => {
    const jsonObj = {
      user: {
        email: value.email,
        role: userRole,
      },
    };
    const path = apiUrl.forgotPassword;
    const { status } = await Helper.post(jsonObj, path);
    if (status === 200) {
      navigate("/checkYourMail");
    }
  };

  return (
    <>
      <div className="h-screen lg:w-full w-full items-center px-2 flex xl:gap-8 justify-center font-Roboto">
        <div
          className="lg:basis-2/6 w-full h-full px-4 py-32 space-y-40 flex flex-col md:items-start
           items-center lg:justify-start justify-center"
        >
          <button
            type="submit"
            className="h-[3.063rem] w-[3.063rem] flex items-center group transition-all delay-200 ease-in-out
              hover:bg-[#031B59] hover:scale-110 justify-center border-[1.5px] border-[#E2E8F0] rounded-full bg-white"
            onClick={() => navigate("/login")}
          >
            <IoChevronBackOutline
              className="h-6 w-6 transition-all duration-300 delay-200
              group-hover:scale-125 group-hover:text-white"
            />
          </button>
          <div className="flex flex-col space-y-10 h-fit w-full md:w-4/5 lg:w-full">
            <div className="flex flex-col space-y-4">
              <h2 className="text-4xl font-semibold text-[#23275E] tracking-wide">
                {t("forgotPassword")}
              </h2>
              <div className="flex flex-row justify-between w-full text-[#333]">
                <h4>{t("recoverMessage")}</h4>
              </div>
            </div>
            <form
              className="flex flex-col w-full h-fit space-y-8"
              onSubmit={Formik.handleSubmit}
            >
              <div className="flex flex-col space-y-2">
                <label htmlFor="email">{t("email")}</label>
                <input
                  className="h-12 border rounded-full w-full p-4"
                  type="email"
                  id="email"
                  value={Formik.values.email}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.errors.email && Formik.touched.email ? (
                  <p className="text-[red]">{Formik.errors.email}</p>
                ) : null}
              </div>
              <button
                className="h-12 rounded-full w-full text-white text-lg bg-[#23275E] "
                type="submit"
              >
                {t("sendRecoveryLink")}
              </button>
            </form>
          </div>
        </div>
        <div className="w-fit h-full py-24 hidden lg:flex items-center text-[#031B59]">
          <img src={`${awsURL}/images/login_forgetPassword.webp`} alt="background_image" />
        </div>
      </div>
    </>
  );
};

export default Forgot;
