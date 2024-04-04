import React, { useEffect, useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

import { loginInSchema } from "redux/validator/login";
import { content } from "../../utils/constant/Content";
import swalService from "utils/SwalServices";
import { awsURL } from "utils/Constants";
import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import UpdatePassword from "./UpdatePassword";
import LoadingButton from "component/common/LoadingButton";
import PasswordField from "component/common/PasswordField";

const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [checkedRemeberMe, setCheckedRemeberMe] = useState(false);
  const [showUpdatePassword, setShowUpdatePassword] = useState(false);

  const setCookie = (name, value, expirationDate) => {
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/login`;
  };
  const getCookie = (name) => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginInSchema,
    onSubmit: async (user, { setSubmitting, setFieldError, resetForm }) => {
      try {
        setSubmitting(true);
        const jsonObj = {
          user: {
            email: user.email,
            password: user.password,
          },
        };
        const path = "api/" + apiUrl.login;
        const resp = await Helper.post(jsonObj, path);
        const response = await resp.json();
        if (resp.status === 401) {
          if (response?.error === "Incorrect password") {
            setFieldError("password", response.error);
          } else {
            setFieldError("email", response.error);
          }
        }
        if (resp.status === 422) {
          Swal.fire({
            icon: "warning",
            text: `Login failed: ${response.error}`,
          });
        }
        if (resp.status === 200) {
          if (
            response.hasOwnProperty("update_password") &&
            !response.update_password
          ) {
            setShowUpdatePassword(true);
          } else {
            if (checkedRemeberMe) {
              const { email, password } = jsonObj.user;
              const expirationDate = new Date();
              expirationDate.setDate(expirationDate.getDate() + 30);
              setCookie("email", email, expirationDate);
              setCookie("password", password, expirationDate);
            }
            swalService.showSuccess({
              title: "Login Successfully!",
            });
            setTimeout(() => {
              navigate("/verification");
            }, 800);
            const expiryTime = Date.now() + 24 * 60 * 60 * 1000;
            localStorage.setItem("userLoginToken", JSON.stringify(response));
            localStorage.setItem("tokenExpiryTime", expiryTime.toString());
            resetForm();
          }
        }
        setSubmitting(false);
      } catch (error) {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    const rememberMeEmail = getCookie("email");
    const rememberMePassword = getCookie("password");
    if (rememberMeEmail && rememberMePassword) {
      Formik.setValues((value) => ({
        ...value,
        ["email"]: rememberMeEmail,
        ["password"]: rememberMePassword,
      }));
    }
  }, []);

  const { values, isSubmitting, handleSubmit } = Formik;

  return (
    <>
      {showUpdatePassword ? (
        <UpdatePassword
          currentUser={Formik?.values?.email}
          loginBack={() => setShowUpdatePassword(false)}
        />
      ) : (
        <div className="w-full h-screen px-2 flex gap-8 justify-center items-center font-Roboto bg-[#fff]">
          <div
            className="xl:basis-2/6 lg:basis-3/6 w-full h-fit px-4 flex flex-col items-start
                justify-strat space-y-12"
          >
            {/* Logo and headings */}
            <FormikProvider value={values}>
              <Form
                autoComplete="off"
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="w-full"
              >
                <div className="w-full flex flex-col gap-12">
                  <div className="w-full h-fit md:w-full flex flex-col lg:items-start md:items-center gap-10 ">
                    <img
                      className="w-[12.688rem] h-[4.313rem]"
                      src={`${awsURL}/images/deeporion_logo.jpg`}
                      alt="Company_logo"
                    />
                    {/* Headings */}
                    <div className="w-fit h-fit flex flex-col gap-[9px] lg:w-full">
                      <h2 className="text-[40px] font-semibold text-[#23275E] leading-[45px]">
                        {t(`${content.welcomeBack}`)}
                      </h2>
                      <div className="flex justify-between w-full text-[#191919] leading-6">
                        <h3>{t(`${content.enterYourCreds}`)}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-8">
                    <div className="w-full lg:w-full h-fit flex flex-col gap-[14px]">
                      {/* E-mail Field */}
                      <div className="flex flex-col gap-1 ">
                        <label htmlFor="email">{t(`${content.email}`)}</label>
                        <input
                          autoComplete="off"
                          className="w-full p-4 h-12 active:outline-[#031B59] focus:outline-[#031B59] rounded-full
                          shadow-[0px_0px_10px_0px_rgba(3,27,89,0.30)] border border-[#031B59] active:ring-[#031B59]"
                          type="email"
                          name="email"
                          id="email"
                          value={values.email}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.errors.email && Formik.touched.email && (
                          <p className="text-[red]">{Formik.errors.email}</p>
                        )}
                      </div>
                      {/* Password Field */}
                      <div className="relative flex flex-col gap-1">
                        <label htmlFor="password">
                          {t(`${content.password}`)}
                        </label>
                        <PasswordField
                          key={"loginEye"}
                          id="password"
                          name="password"
                          value={values.password}
                          onBlur={Formik.handleBlur}
                          onChange={Formik.handleChange}
                        />
                      </div>
                      {Formik.errors.password && Formik.touched.password ? (
                        <p className="text-[red]">{Formik.errors.password}</p>
                      ) : null}
                      {/* Remember Me Checkbox */}
                      <div className="w-full h-fit flex flex-col md:flex-row md:justify-between items-center">
                        <div
                          className="w-full h-fit flex flex-col md:flex-row gap-2 items-center
                          justify-center xl:justify-between"
                        >
                          <div className="xl:basis-1/2 w-full flex gap-2">
                            <input
                              className="h-6 w-6 self-center appearance-none rounded-lg text-[#191919] border
                              accent-[#031B59!important] checked:bg-[#031B59!important]
                              checked:border-primary checked:bg-primary checked:before:opacity-[0.16]
                              checked:after:absolute checked:after:mt-[0.2rem] checked:after:ml-[0.5rem]
                              checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem]
                              checked:after:rotate-[45deg]
                              checked:after:border-[0.15rem] checked:after:border-l-0
                              checked:after:border-t-0 checked:after:border-solid checked:after:border-white
                              checked:after:bg-transparent checked:after:content-['']"
                              type="checkbox"
                              id="remember_me"
                              checked={checkedRemeberMe}
                              onChange={() =>
                                setCheckedRemeberMe(!checkedRemeberMe)
                              }
                            />
                            <label htmlFor="remember_me">
                              {t(`${content.rememberMe}`)}
                            </label>
                          </div>
                          <Link
                            rel="canonical"
                            className="w-full h-fit flex justify-start items-center md:justify-end text-[#23275E]
                            font-bold"
                            to="/forgot"
                          >
                            {t(`${content.forgotPassword}`)}
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Submit Button */}
                    <LoadingButton
                      isSubmitting={isSubmitting}
                      disable={Object.keys(Formik.errors).length > 0}
                      title={t(`${content.login}`)}
                    />
                  </div>
                </div>
              </Form>
            </FormikProvider>
          </div>
          {/* Right Side image */}
          <div className="w-fit h-full hidden lg:flex items-center">
            <img
              className="w-[34.125rem]"
              src={`${awsURL}/images/login_sideImage.webp`}
              alt="Background_image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;

