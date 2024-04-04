import React from "react";
import { useDispatch } from "react-redux";
import { setContactUsData } from "../../../redux/actions/action";
import apiUrl from "api/apiUrl";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import swalService from "utils/SwalServices";
import { contactUsSchema } from "redux/validator/contactUs";
import Helper from "api/Helper";
import SectionHeadings from "../home/SectionHeadings";

const ContactInfo = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const initialvalues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  };
  const Formik = useFormik({
    initialValues: initialvalues,
    validationSchema: contactUsSchema,
    onSubmit: async (values) => {
      const jsonObj = {
        contact_us: {
          name: values.name,
          email: values.email,
          phone_number: values.phone,
          subject: values.subject,
          description: values.description,
        },
      };
      const path = apiUrl.contactUs;
      const { response, status } = await Helper.post(jsonObj, path);
      if (status === 200) {
        dispatch(setContactUsData(response));
        swalService.showSuccess({
          icon: "success",
          title: "Added!",
          text: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
        resetForm();
      }
      if (status === 500) {
        swalService.showError({
          title: "Something went wrong!",
          timer: 1500,
        });
        resetForm();
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
  } = Formik;

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-full flex items-center justify-start lg:gap-[8rem]">
          <div className="basis-1/2 hidden lg:flex bg-[#031B59] rounded-r-[26px]">
            <div className="w-full bg-contact h-[20rem] py-[4.63rem] px-[6.25rem]
           flex flex-col items-start justify-center gap-[14px]">
              <span className="text-white font-raleway text-[40px] font-bold leading-[44px] -tracking-[0.36px]">
                {t("getInTouch")}
              </span>
              <p className="w-full leading-[22px] text-white">{t("contact_us_info")}</p>
            </div>
          </div>
          {/* Contact us Form  */}
          <div className="lg:basis-1/2 b w-full flex justify-center lg:justify-end
           lg:pr-[85px] xl:pr-[135px] py-[82px]">
            <div className="w-full max-w-[40.625rem] flex flex-col space-y-4">
              <div className="w-full flex lg:hidden">
                <SectionHeadings headingPart1={t("getIn")} headingPart2={t("touch")} subHeading={t("contact_us_info")}/>
              </div>
              <form className="w-full flex flex-col gap-4 p-4 lg:p-8">
                <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="w-full contact-mob-name-div">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values?.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full  border-gray-200 border-2 rounded-2xl shadow-sm
                        px-4 py-4 focus:border-transparent contact-mob-name"
                      placeholder="Name"
                    />
                    {errors?.name && touched?.name ? (
                      <p className="text-[red]">{errors.name}</p>
                    ) : null}
                  </div>
                  {/* \Last Name */}
                  <div className="w-full contact-mob-email-div">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values?.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full border-gray-200 border-2 rounded-2xl shadow-sm
                        px-4 py-4 focus:border-transparent"
                      placeholder="Email"
                    />
                    {errors?.email && touched?.email ? (
                      <p className="text-[red]">{errors.email}</p>
                    ) : null}
                  </div>
                </div>
                {/* Phone */}
                <div className="">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={values?.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border-gray-200 border-2 rounded-2xl shadow-sm px-4 py-4 focus:border-transparent"
                    placeholder="Phone"
                  />
                  {errors?.phone && touched?.phone ? (
                    <p className="text-[red]">{errors.phone}</p>
                  ) : null}
                </div>
                {/* Subject */}
                <div className="">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={values?.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border-gray-200 border-2 rounded-2xl shadow-sm
                      px-4 py-4 focus:border-transparent "
                    placeholder="Subject"
                  />
                  {errors?.subject && touched?.subject ? (
                    <p className="text-[red]">{errors.subject}</p>
                  ) : null}
                </div>
                {/* Message */}
                <div className="">
                  <textarea
                    id="description"
                    name="description"
                    value={values?.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="4"
                    className="w-full  rounded-2xl shadow-sm border-gray-200 border-2
                      px-4 py-4 focus:border-transparent "
                    placeholder="Write your message"
                  ></textarea>
                  {errors?.description && touched?.description ? (
                    <p className="text-[red]">{errors.description}</p>
                  ) : null}
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className=" bg-[#031B59] px-4 py-3 w-full text-white font-normal rounded-2xl "
                  >
                    {t("sendMessage")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
