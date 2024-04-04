/* eslint-disable camelcase */
/* eslint-disable no-unreachable */
import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { resetPasswordSchema } from "redux/validator/login";
import { IoChevronBackOutline } from "react-icons/io5";
import { BiSolidCheckCircle } from "react-icons/bi";
import { conditionalFunctions } from "utils/CommonFunctions";
import { awsURL } from "utils/Constants";
import { PasswordConditions } from "utils/constant/Content";
import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import swalService from "utils/SwalServices";
import Swal from "sweetalert2";
import PasswordField from "component/common/PasswordField";
import LoadingButton from "component/common/LoadingButton";

const initialValue = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const UpdatePassword = ({ currentUser, loginBack }) => {
  const { t } = useTranslation();
  const Formik = useFormik({
    initialValues: initialValue,
    validationSchema: resetPasswordSchema,
    onSubmit: async (value, { resetForm, setSubmitting, setFieldError }) => {
      try {
        setSubmitting(true);
        const payloadData = {
          email: currentUser,
          current_password: value.currentPassword,
          new_password: value.newPassword,
          confirm_password: value.confirmPassword,
        };
        const path = apiUrl.updatePassword;
        const response = await Helper.post(payloadData, path);
        const updatedResponse = await response.json();
        if (response.status === 422) {
          setFieldError("currentPassword", updatedResponse?.error);
          Swal.fire({
            icon: "warning",
            text: "Updation failed!",
          });
        }
        if (response.status === 200) {
          swalService.showSuccess({
            title: "Updated Successfully!",
          });
          loginBack();
          resetForm();
        }
        setSubmitting(false);
      } catch (error) {
        setSubmitting(false);
        Swal.fire({
          icon: "error",
          text: "Internal Server error!",
        });
      }
    },
  });

  const { values, isSubmitting, handleSubmit } = Formik;

  return (
    <div className="h-screen w-full px-2 flex justify-center items-center xl:gap-[5.08rem] font-Roboto">
      <FormikProvider value={values}>
        <Form
          autoComplete="off"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="w-full flex items-center justify-end"
        >
          <div
            className="w-full max-w-[33rem] h-fit px-4 py-24 space-y-12 flex flex-col
          items-start justify-center"
          >
            <button
              type="submit"
              className="h-[3.063rem] w-[3.063rem] flex items-center group hover:bg-[#031B59]
              hover:scale-110 justify-center border-[1.5px] border-[#E2E8F0] rounded-full bg-white"
              onClick={loginBack}
            >
              <IoChevronBackOutline className="h-6 w-6 group-hover:text-white" />
            </button>
            <div className="w-full flex flex-col space-y-8">
              <div className="flex flex-col space-y-2">
                <h2 className="text-3xl font-semibold text-[#23275E] tracking-wide">
                  {t("updateYourPass")}
                </h2>
                <h4>
                  {" "}
                  {t("updateYourPassFor")}
                  {currentUser}
                </h4>
              </div>
              <div className="w-full h-fit flex flex-col space-y-3">
                <div className="w-full relative flex flex-col space-y-1">
                  <label htmlFor="currentPassword">
                    {t("currentPassword")}
                  </label>
                  <PasswordField
                    key={"currentPassword"}
                    id="currentPassword"
                    name="currentPassword"
                    value={Formik.values.currentPassword}
                    onBlur={Formik.handleBlur}
                    onChange={Formik.handleChange}
                  />
                </div>
                {Formik.errors.currentPassword &&
                Formik.touched.currentPassword ? (
                    <p className="text-[red]">{Formik.errors.currentPassword}</p>
                  ) : null}
                <div className="h-fit w-full relative flex flex-col space-y-2">
                  <label htmlFor="newPassword">{t("newPassword")}</label>
                  <PasswordField
                    key={"newPassword"}
                    id="newPassword"
                    name="newPassword"
                    value={Formik.values.newPassword}
                    onBlur={Formik.handleBlur}
                    onChange={Formik.handleChange}
                  />
                </div>
                {Formik.errors.newPassword && Formik.touched.newPassword ? (
                  <p className="text-[red]">{Formik.errors.newPassword}</p>
                ) : null}
              </div>
              <div className="h-fit w-full relative flex flex-col space-y-2">
                <label htmlFor="confirmPassword">{t("confirmPassword")}</label>
                <PasswordField
                  key={"confirmPassword"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={Formik.values.confirmPassword}
                  onBlur={Formik.handleBlur}
                  onChange={Formik.handleChange}
                />
              </div>
              {Formik.errors.confirmPassword &&
              Formik.touched.confirmPassword ? (
                  <p className="text-[red]">{Formik.errors.confirmPassword}</p>
                ) : null}
              <div className="w-full flex flex-col space-y-2 text-[#191919]">
                <h4>{t("yourPasswordContain")}</h4>
                <ul className="w-full flex flex-col justify-start">
                  {PasswordConditions.conditions.map((condition, _id) => {
                    return (
                      <li key={_id} className="flex gap-2 w-full">
                        {" "}
                        <BiSolidCheckCircle
                          fill={
                            conditionalFunctions(_id, values.newPassword)
                              ? "#51e71c"
                              : "#64748B"
                          }
                          className={`h-5 w-5 fill-[${
                            conditionalFunctions(_id, values.newPassword)
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
              <LoadingButton
                title={t("submit")}
                isSubmitting={isSubmitting}
                disable={Object.keys(Formik.errors).length > 0}
                key={"updateClone"}
              />
            </div>
          </div>
        </Form>
      </FormikProvider>
      <div className="w-full py-24 hidden lg:flex items-center">
        <img src={`${awsURL}/images/forget.png`} alt="side_image" />
      </div>
    </div>
  );
};

UpdatePassword.propTypes = {
  currentUser: PropTypes.string,
  loginBack: PropTypes.func,
};

export default UpdatePassword;
