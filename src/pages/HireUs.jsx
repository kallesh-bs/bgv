import { awsURL } from "utils/Constants";
import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { skills } from "utils/Constants";
import { useFormik } from "formik";
import { HireUsSchema } from "redux/validator/contactUs";
import Helper from "api/Helper";
import apiUrl from "api/apiUrl";
import swalService from "utils/SwalServices";
import { useTranslation } from "react-i18next";
import { LuRefreshCw } from "react-icons/lu";

export default function HireUSPage() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectDeveloper, setSelectDeveloper] = useState(skills);
  const [searchSkill, setSearchSkill] = useState(skills);
  const [showPopup, setShowPopup] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [checkedSkills, setCheckedSkills] = useState([]);
  const [submitForm, setSubmitForm] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [enteredCaptcha, setEnteredCaptcha] = useState("");

  const ref = useRef(null);
  const canvasRef = useRef(null);
  const { t } = useTranslation();

  const initialvalues = {
    skillName: [],
    name: "",
    email: "",
    phoneNumber: "",
  };

  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: HireUsSchema,
    onSubmit: async (values, { resetForm }) => {
      if (enteredCaptcha !== captcha) {
        swalService.showError({
          title: "CAPTCHA verification failed",
          text: "Please enter the correct CAPTCHA.",
        });

        return;
      }
      const jsonObj = {
        developer: {
          skills: values.skillName,
          name: values.name,
          email: values.email,
          phone_no: values.phoneNumber,
        },
      };
      const path = apiUrl?.hireDeveloper;
      setSubmitForm(false);
      const { status } = await Helper.post(jsonObj, path);
      if (status === 201) {
        resetForm();
        setSelectedSkills([]);
        swalService.showSuccess({
          icon: "success",
          title: "Thank you for reaching out to deeporion technologies!",
          text: `We've received your message and will respond promptly. In the meantime, 
            feel free to explore our website. We look forward to the opportunity to work with you!`,
          showConfirmButton: false,
          timer: 5000,
        });
        setSubmitForm(true);
        setCheckedSkills([]);
      }
    },
  });
  const { setFieldValue, handleChange } = formik;

  useEffect(() => {
    if (selectedSkills.length > 0) {
      setFieldValue(
        "skillName",
        selectedSkills.map((item) => item.name)
      );
    }
  }, [selectedSkills, setFieldValue]);

  useEffect(() => {
    const handler = (event) => {
      if (showPopup && ref.current && !ref.current?.contains(event.target)) {
        setShowPopup(() => false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [showPopup]);

  useEffect(() => {
    const handleSearchChange = (search) => {
      if (search !== "") {
        const filteredDevelopers = skills.filter((skill) =>
          skill.name.toUpperCase().includes(search.toUpperCase())
        );
        setSearchSkill(filteredDevelopers);
      } else {
        setSearchSkill(skills);
      }
    };

    handleSearchChange(searchValue);
  }, [searchValue]);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const captchaLength = 6;
    const characters = "ABCDEFGHIJKLMNOPQRSTU0123456789VWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < captchaLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptcha(result);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const startX = Math.random() * canvasWidth;
      const startY = Math.random() * canvasHeight;
      const endX = Math.random() * canvasWidth;
      const endY = Math.random() * canvasHeight;
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
    }
    ctx.strokeStyle = "#000";
    ctx.stroke();

    ctx.font = "24px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(result, 10, 30);
  };

  const handleCaptchaChange = (e) => {
    setEnteredCaptcha(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "" || /^[0-9+ ]+$/.test(newValue)) {
      handleChange(e);
    }
  };

  const handleCheckboxChange = (skill) => {
    if (checkedSkills.includes(skill)) {
      const removeSkills = selectedSkills.filter(
        (item) => item.id !== skill.id
      );
      setSelectedSkills(removeSkills);
      setCheckedSkills(
        checkedSkills.filter((checkedSkill) => checkedSkill.id !== skill.id)
      );
    } else {
      setSelectedSkills([...selectedSkills, skill]);
      setCheckedSkills([...checkedSkills, skill]);
      const removeDeveloper = selectDeveloper.filter((item) => item?.id !== skill?.id);
      setSelectDeveloper(removeDeveloper);
    }
  };

  const handleAddSkill = (name) => {
    if (!selectedSkills.includes(name)) {
      setSelectedSkills([...selectedSkills, name]);
      setCheckedSkills([...checkedSkills, name]);
      const removeDeveloper = selectDeveloper.filter((item) => item?.id !== name?.id);
      setSelectDeveloper(removeDeveloper);
    }
  };

  const handleRemoveSkill = (name) => {
    const updatedChecked = checkedSkills.filter((skill) => skill !== name);
    const updatedSkills = selectedSkills.filter((skill) => skill !== name);
    setSelectedSkills(updatedSkills);
    setCheckedSkills(updatedChecked);
    setSelectDeveloper([...selectDeveloper, name]);
    formik.setFieldValue('skillName', updatedSkills);
  };

  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center mt-[2.5rem]">
      <div className="w-full flex justify-center items-center">
        <form type="submit" onSubmit={formik.handleSubmit}
          className="w-full max-w-[35.438rem] h-fit flex flex-col gap-[26px]">
          <h2 className="capitalize font-bold -tracking-[0.15px] text-[36px] font-Raleway">{t("Hire a Developer")}</h2>
          <div className="w-full flex flex-col gap-[10px`]">
            <div className="w-full flex flex-col gap-1">
              <span className="text-[#191919] font-bold leading-[22px]">
                {t("Select skill")}
              </span>
              <div
                className="min-w-[400px] flex flex-wrap p-[10px] border rounded-2xl cursor-pointer relative"
                ref={ref}
              >
                <div className="w-full flex flex-wrap gap-2 cursor-pointer">
                  {selectedSkills.map((selectedSkill, index) => (
                    <div
                      className="tag border-[1px] border-inherit rounded-lg p-[8px]
                     bg-[#E6F8E7] cursor-auto"
                      key={index}
                    >
                      <div className="flex items-center">
                        <span className="mr-2 font-extrabold">
                          {selectedSkill.name}
                        </span>
                        <button
                          className="text-[#4a516870]"
                          type="button"
                          onClick={() => handleRemoveSkill(selectedSkill)}
                        >
                          <RxCross2 />
                        </button>
                      </div>
                    </div>
                  ))}
                  {selectedSkills.length > 0 ? (
                    <div
                      className="ml-2 flex items-center flex-1"
                      onClick={handleShowPopup}
                    >
                      {t("Add more")}
                    </div>
                  ) : (
                    <div
                      className="ml-2 flex items-center flex-1"
                      onClick={handleShowPopup}
                    >
                      {t("Selectskill")}
                    </div>
                  )}
                </div>
                {showPopup && (
                  <div className="popup-wrapper ">
                    <div
                      className="w-full min-h-[400px] border rounded-xl absolute z-10 bg-[#fff] top-[48px]
                    right-[0px]"
                    >
                      <div className="min-h-[60px]">
                        <input
                          placeholder="Search Skills..."
                          className="min-w-[550px] ml-2 mt-2 p-[10px] flex items-center"
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                        />
                      </div>
                      <div className="divide-y border border-black mt-[2px]"></div>
                      <div className="mt-[10px] ml-[20px] max-h-[400px] overflow-y-auto">
                        {searchSkill.map((skill, index) => (
                          <div className="font-bold" key={index}>
                            <label>
                              <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange(skill)}
                                checked={checkedSkills.includes(skill)}
                                className="mr-[10px]"
                              />
                              {skill.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {formik.touched.skillName && formik.errors.skillName ? (
                <div className="text-red-500">{formik.errors.skillName}</div>
              ) : null}
              <div className="w-full flex flex-col gap-2">
                <p className="">{t("Trending searches")}</p>
                <div className="w-full flex items-center justify-start flex-wrap gap-2">
                  {selectDeveloper?.slice(0, 5)?.map((obj, index) => (
                    <button
                      key={index}
                      type="button"
                      className="min-w-[6.563rem] px-3 h-[2.5rem] bg-[#fff] border
                     border-[#E2E8F0] rounded-[10px] flex items-center justify-center gap-[5.5px] mr-[10px]"
                      onClick={() => handleAddSkill(obj)}
                    >
                      <obj.icon className={obj.className} />
                      <span className="font-extrabold">{obj.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[20px]">
            <p className="text-[#191919] font-bold leading-[22px]">
              {t("Contact Information")}
            </p>
            <div className="w-full flex flex-col gap-1">
              <label
                className="text-[#191919] font-medium text-sm leading-[22px]"
                htmlFor="skillSet"
              >
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="px-4 w-full h-[3.063rem] border border-[#E2E8F0] bg-white rounded-[10px]"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label
                className="text-[#191919] font-medium text-sm leading-[22px]"
                htmlFor="skillSet"
              >
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-4 w-full h-[3.063rem] border border-[#E2E8F0] bg-white rounded-[10px]"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="w-full flex flex-col gap-1">
              <label
                className="text-[#191919] font-medium text-sm leading-[22px]"
                htmlFor="skillSet"
              >
                {t("phone_number")}
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="px-4 w-full h-[3.063rem] border border-[#E2E8F0] bg-white rounded-[10px]"
                onChange={handlePhoneChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-500">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg w-[15rem]">
            <div className="flex items-center gap-2">
              <canvas
                ref={canvasRef}
                width="120"
                height="40"
                className="border border-[#E2E8F0] bg-gray-300 rounded-md"
              />
              <button
                type="button"
                className="px-4 py-2 bg-[#fff] text-[#000] rounded-md hover:text-[#fff]
                hover:bg-blue-600 focus:outline-none"
                onClick={generateCaptcha}
              >
                <LuRefreshCw />
              </button>
            </div>
            <input
              type="text"
              id="captcha"
              name="captcha"
              className="px-4 w-[9rem] h-[3.063rem] border border-[#E2E8F0] bg-white rounded-[10px]
               focus:outline-none focus:border-black mt-2"
              onChange={handleCaptchaChange}
            />
          </div>

          <button
            type="submit"
            disabled={!formik.isValid || !enteredCaptcha || enteredCaptcha !== captcha || submitForm}
            className={`w-full h-[3.063rem] rounded-[30px] bg-[#031B59]
  flex items-center justify-center text-white 
  ${(!formik.isValid || !enteredCaptcha || enteredCaptcha !== captcha || submitForm) ? "bg-gray-400" : "bg-[#031B59]"}`}
          >
            {t("Request to connect")}
          </button>
        </form>
      </div>
      <div className="w-full hidden lg:flex items-center justify-center">
        <img
          className="w-[31.25rem] h-[26.954rem]"
          src={`${awsURL}/images/hireUS_sideImage.webp`}
          alt="Hire US"
        />
      </div>
    </div>
  );
}
