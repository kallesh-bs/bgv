/* eslint-disable no-unreachable */
import React, { useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import { resetPasswordSchema } from "redux/validator/login";
import { IoChevronBackOutline } from "react-icons/io5";
import { BiSolidCheckCircle } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { conditionalFunctions } from "utils/CommonFunctions";
import { awsURL } from "utils/Constants";
import { PasswordConditions } from "utils/constant/Content";
import apiUrl from "api/apiUrl";
import swalService from "utils/SwalServices";
import Helper from "api/Helper";
import { useNavigate } from "react-router-dom";

const initialValue = {
  newPassword: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const Formik = useFormik({
    initialValues: initialValue,
    validationSchema: resetPasswordSchema,
    // eslint-disable-next-line no-unused-vars
    onSubmit: async (value) => {
      const pathToken = window.location.pathname.split("/")[2];
      const jsonObj = {
        user: {
          reset_password_token: pathToken,
          password: value.newPassword,
          password_confirmation: value.confirmPassword,
        },
      };
      const path = apiUrl?.resetPassword;
      const { status, response } = await Helper.put(jsonObj, path);
      if (status === 201) {
        swalService.showSuccess({
          icon: "success",
          title: "Updated!",
          text: response.message,
          showConfirmButton: false,
          timer: 3000,
        });
      }
      navigate("/login");
    },
  });
  const [passwordVisible, setPasswordVisible] = useState([false, false]);
  const togglePasswordVisibility = (index) => {
    const updatedVisibility = [...passwordVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setPasswordVisible(updatedVisibility);
  };
  const { values } = Formik;

  return (
    <>
      <div className="h-screen lg:w-full w-full items-center px-2 flex xl:gap-8 justify-center font-Roboto">
        <div
          className="lg:basis-2/6 w-full h-full px-4 py-24 space-y-12 flex flex-col md:items-start
          items-center lg:justify-start justify-center"
        >
          <button
            type="submit"
            className="h-[3.063rem] w-[3.063rem] flex items-center group hover:bg-[#031B59]
              hover:scale-110 justify-center border-[1.5px] border-[#E2E8F0] rounded-full bg-white"
          >
            <IoChevronBackOutline className="h-6 w-6 group-hover:text-white" />
          </button>
          <div className="w-full flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <h2 className="text-3xl font-semibold text-[#23275E] tracking-wide">
                {t("newPassword")}
              </h2>
              <h4>{t("newPasswordMessage")}</h4>
            </div>
            <div className="w-full h-fit flex flex-col space-y-3">
              <div className="w-full relative flex flex-col space-y-1">
                <label htmlFor="newPassword">{t("newPassword")}</label>
                <input
                  className="h-12 border rounded-full w-full p-4"
                  type={passwordVisible[0] ? "text" : "password"}
                  id="newPassword"
                  value={Formik.values.newPassword}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {passwordVisible[0] ? (
                  <BsEyeFill
                    data-testid="toggle-new-password-visibility"
                    className="h-5 w-5 fill-[#64748B] absolute right-4 bottom-[0.9rem] cursor-pointer"
                    onClick={() => togglePasswordVisibility(0)}
                  />
                ) : (
                  <BsEyeSlashFill
                    className="h-5 w-5 fill-[#64748B] absolute right-4 bottom-[0.9rem] cursor-pointer"
                    onClick={() => togglePasswordVisibility(0)}
                  />
                )}
              </div>
              {Formik.errors.newPassword && Formik.touched.newPassword ? (
                <p className="text-[red]">{Formik.errors.newPassword}</p>
              ) : null}
              <div className="h-fit w-full relative flex flex-col space-y-2">
                <label htmlFor="confirmPassword">{t("confirmPassword")}</label>
                <input
                  className="h-12 border rounded-full w-full p-4"
                  type={passwordVisible[1] ? "text" : "password"}
                  id="confirmPassword"
                  value={Formik.values.confirmPassword}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                  disabled={values.newPassword.length <= 0}
                />
                {passwordVisible[1] ? (
                  <BsEyeFill
                    data-testid="toggle-confirm-password-visibility"
                    className="h-5 w-5 fill-[#64748B] absolute right-4 bottom-[0.9rem] cursor-pointer"
                    onClick={() => togglePasswordVisibility(1)}
                  />
                ) : (
                  <BsEyeSlashFill
                    className="h-5 w-5 fill-[#64748B] absolute right-4 bottom-[0.9rem] cursor-pointer"
                    onClick={() => togglePasswordVisibility(1)}
                  />
                )}
              </div>
              {Formik.errors.confirmPassword &&
                Formik.touched.confirmPassword ? (
                  <p className="text-[red]">{Formik.errors.confirmPassword}</p>
                ) : null}
            </div>
            <div className="w-full flex flex-col space-y-2 text-[#191919]">
              <h4>{t("yourPasswordContain")}</h4>
              <ul className="w-full flex flex-col justify-start">
                {PasswordConditions.conditions.map((condition, _id) => {
                  return (
                    <li key={_id} className="flex gap-2 w-full">
                      {" "}
                      <BiSolidCheckCircle
                        className={`h-5 w-5 fill-[${conditionalFunctions(_id, values.newPassword)
                          ? "#2db611"
                          : "#64748B"
                        }]`}
                      />
                      {condition}
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              className="h-12 rounded-full disabled:bg-[#9aa4bd] w-full text-white
                disabled:text-[#4d4d4d] text-lg bg-[#23275E]"
              type="submit"
              onClick={Formik.handleSubmit}
            >
              {t("setNewPassword")}
            </button>
          </div>
        </div>
        <div className="w-fit py-24 hidden lg:flex items-center">
          <img src={`${awsURL}/images/forget.png`} alt="side_image" />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
