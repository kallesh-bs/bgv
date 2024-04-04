import React, { useEffect, useState } from "react";
import apiUrl from "api/apiUrl";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import swalService from "utils/SwalServices";
import Helper from "api/Helper";
import { useFormik } from "formik";
import { jobOpeningValidation } from "redux/validator/publicPage/jobOpening";

const ApplyNow = ({ closeModal, jobopeningId }) => {
  const [resume, setResume] = useState({});
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  useEffect(() => {}, [resume]);

  const handleFiles = (file) => {
    setResume(file);
  };
  const handleModalScroll = (e) => {
    e.stopPropagation();
  };

  const { t } = useTranslation();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    state: "",
    contactNumber: "",
    resume: [],
  };

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: jobOpeningValidation,
    onSubmit: async (values) => {
      try {
        const formdata = new FormData();
        formdata.append("job_application[first_name]", values.firstName);
        formdata.append("job_application[last_name]", values.lastName);
        formdata.append("job_application[email]", values.email);
        formdata.append("job_application[state]", values.state);
        formdata.append("job_application[country]", values.country);
        formdata.append("job_application[phone_number]", values.contactNumber);
        formdata.append("job_application[resume]", values.resume[0]);
        const url = apiUrl.applyJob;
        const path = url.replace(":id", jobopeningId);
        const { status } = await Helper.post(formdata, path, true);
        if (status === 200) {
          closeModal();
          swalService.showSuccess({ title: "Success" });
        }
      } catch (error) {
        swalService.showError({ title: "Error!" });
      }
    },
  });

  const { handleChange, handleSubmit, setFieldValue } = Formik;

  const handleFileUpload = (e) => {
    const { files } = e.target;
    setFieldValue("resume", Array(files[0]));
  };

  return (
    <div
      className="fixed z-50 top-[0px] left-0 b-0 w-full h-full flex items-center
      justify-center bg-[#01223770] scrollbar-hide text-black"
    >
      <div
        className="max-h-[95%] max-w-[45.375rem] w-1/2 flex flex-col justify-center
        items-center bg-white rounded-[20px] shadow-[0_1px_4px_0px_rgba(0,0,0,0.3)]"
      >
        <div
          className="w-full h-[4.75rem] flex justify-between items-center
          rounded-tr-[20px] rounded-tl-[20px] bg-[#F4F6FC]"
        >
          <div>
            <h2 className="text-[#031B59] text-[24px] font-bold ml-[20px]">
              {t("applyDeeporion")}
            </h2>
          </div>
          <div className="mr-[35px] text-[40px]">
            <button onClick={closeModal}> &times;</button>
          </div>
        </div>
        <form
          className="h-fit w-full px-8 py-4 flex flex-col justify-center items-center
            overflow-y-scroll bg-white shadow-[0_1px_4px_0px_rgba(0,0,0,0.3)]"
          onScroll={handleModalScroll}
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <div>
              <h2 className="text-lg font-medium my-6">{t("ContactInfo")}</h2>
              <div className="flex mb-6">
                <div className="w-full flex flex-col mr-6">
                  <label className="text-[#686868]">{t("firstName")}</label>
                  <input
                    type="text"
                    id="first_name"
                    name="firstName"
                    placeholder="Mahi"
                    onChange={handleChange}
                    className="h-[3.125rem] px-4 py-2 border border-[#DBDBDB] rounded-xl"
                  />
                  {Formik.errors.firstName && Formik.touched.firstName ? (
                    <p className="text-[red]">{Formik.errors.firstName}</p>
                  ) : null}
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-[#686868]">{t("lastName")}</label>
                  <input
                    type="text"
                    id="last_name"
                    name="lastName"
                    placeholder="Jhon"
                    onChange={handleChange}
                    className="h-[3.125rem] px-4 py-2 border border-[#DBDBDB] rounded-xl"
                  />
                  {Formik.errors.lastName && Formik.touched.lastName ? (
                    <p className="text-[red]">{Formik.errors.lastName}</p>
                  ) : null}
                </div>
              </div>
              <div className="w-full flex flex-col mb-6">
                <label className="text-[#686868]">{t("email")}</label>

                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="mahindrajhon123@gmail.com"
                  onChange={handleChange}
                  className="h-[3.125rem] px-4 py-2 border border-[#DBDBDB] rounded-xl"
                />
                {Formik.errors.email && Formik.touched.email ? (
                  <p className="text-[red]">{Formik.errors.email}</p>
                ) : null}
              </div>
              <div className="w-full flex flex-col mb-6">
                <label className="text-[#686868]">{t("country")}</label>

                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="India"
                  onChange={handleChange}
                  className="h-[3.125rem] px-4 py-2 border border-[#DBDBDB] rounded-xl"
                />
                {Formik.errors.country && Formik.touched.country ? (
                  <p className="text-[red]">{Formik.errors.country}</p>
                ) : null}
              </div>
              <div className="w-full flex flex-col mb-6">
                <label className="text-[#686868]">{t("state")}</label>

                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="Rajasthan"
                  onChange={handleChange}
                  className="h-[3.125rem] px-4 py-2 border border-[#DBDBDB] rounded-xl"
                />
                {Formik.errors.state && Formik.touched.state ? (
                  <p className="text-[red]">{Formik.errors.state}</p>
                ) : null}
              </div>
              <div className="w-full flex flex-col mb-6">
                <label className="text-[#686868]">{t("PhoneNumber")}</label>

                <input
                  type="text"
                  name="contactNumber"
                  placeholder="+91 1234567890"
                  onChange={handleChange}
                  className="h-[3.125rem] px-4 py-2 border border-[#DBDBDB] rounded-xl"
                />
                {Formik.errors.contactNumber && Formik.touched.contactNumber ? (
                  <p className="text-[red]">{Formik.errors.contactNumber}</p>
                ) : null}
              </div>
              {/* file upload button */}
              <div className="w-full flex flex-col mb-6">
                <label className="text-[#686868]">{t("uploadResume")}</label>
                <input
                  name="resume"
                  ref={inputRef}
                  type="file"
                  id="input-file-upload"
                  multiple={true}
                  accept=".pdf"
                  onChange={handleFileUpload}
                />
                <label
                  id="label-file-upload"
                  htmlFor="input-file-upload"
                  className={
                    dragActive
                      ? "drag-active  cursor-pointer"
                      : " cursor-pointer"
                  }
                >
                  <div className="flex justify-center items-center flex-col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        // eslint-disable-next-line max-len
                        d="M5.15755 16.6273C3.89366 16.6273 2.81394 16.1898 1.91839 15.3148C1.02227 14.4398 0.574219 13.3703 0.574219 12.1064C0.574219 11.0231 0.900608 10.0578 1.55339 9.21061C2.20616 8.36339 3.06033 7.82172 4.11589 7.58561C4.46311 6.30783 5.15755 5.27311 6.19922 4.48145C7.24089 3.68978 8.42144 3.29395 9.74089 3.29395C11.3659 3.29395 12.7442 3.85978 13.8759 4.99145C15.0081 6.12367 15.5742 7.50228 15.5742 9.12728C16.5326 9.23839 17.3278 9.65145 17.9601 10.3664C18.5917 11.082 18.9076 11.9189 18.9076 12.8773C18.9076 13.9189 18.5431 14.8045 17.8142 15.5339C17.0848 16.2628 16.1992 16.6273 15.1576 16.6273H10.5742C10.1159 16.6273 9.72366 16.4642 9.39755 16.1381C9.07089 15.8114 8.90755 15.4189 8.90755 14.9606V10.6689L7.57422 11.9606L6.40755 10.7939L9.74089 7.46061L13.0742 10.7939L11.9076 11.9606L10.5742 10.6689V14.9606H15.1576C15.7409 14.9606 16.2339 14.7592 16.6367 14.3564C17.0395 13.9537 17.2409 13.4606 17.2409 12.8773C17.2409 12.2939 17.0395 11.8009 16.6367 11.3981C16.2339 10.9953 15.7409 10.7939 15.1576 10.7939H13.9076V9.12728C13.9076 7.9745 13.5014 6.99172 12.6892 6.17895C11.8764 5.36672 10.8937 4.96061 9.74089 4.96061C8.58811 4.96061 7.60561 5.36672 6.79339 6.17895C5.98061 6.99172 5.57422 7.9745 5.57422 9.12728H5.15755C4.352 9.12728 3.6645 9.412 3.09505 9.98144C2.52561 10.5509 2.24089 11.2384 2.24089 12.0439C2.24089 12.8495 2.52561 13.537 3.09505 14.1064C3.6645 14.6759 4.352 14.9606 5.15755 14.9606H7.24089V16.6273H5.15755Z"
                        fill="#A1A1A1"
                      />
                    </svg>
                    <div className="flex items-center justify-center w-full">
                      <p>{t("dragFiles")}</p>
                    </div>
                  </div>
                </label>
                {dragActive && (
                  <div
                    id="drag-file-element"
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  ></div>
                )}
                {Formik.errors.resume && Formik.touched.resume ? (
                  <p className="text-[red]">{Formik.errors.resume}</p>
                ) : null}
              </div>
            </div>
          </div>
          <div
            className="w-full h-[87px] p-5 flex items-center justify-end
          bg-[#F4F6FC] rounded-br-[20px] rounded-bl-[20px]"
          >
            <button
              className="h-[55px!important] w-[153px] flex items-center justify-center
            text-[#031B59] border border-[#031B59] rounded-[20px] font-medium text-lg"
              type="submit"
            >
              {t("submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;

ApplyNow.propTypes = {
  closeModal: PropTypes.func,
  jobopeningId: PropTypes.number,
};
