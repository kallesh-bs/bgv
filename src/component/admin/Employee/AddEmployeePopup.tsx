import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import swalService from "utils/SwalServices";
import { IAddEmployeePopupProps } from "utils/types";

const AddEmployeePopup: React.FC<IAddEmployeePopupProps> = ({
  AddEmployessDialoBox,
  values,
}) => {
  const checkData = {
    user: {
      Name: values?.fullName,
      Email: values?.email,
      "Contact Number": values?.contactNo,
      "Date of Birth": values.dob,
    },
  };

  const employeedata = {
    user: {
      full_name: values?.fullName,
      contact_no: values?.contactNo,
      email: values?.email,
      date_of_birth: values.dob,
      role: values?.role,
    },
  };

  const { t } = useTranslation();
  const initialValues = employeedata && employeedata;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async () => {
      const path = apiUrl.sign;
      const { response, status }: any = await Helper.post(employeedata, path);
      if (status === 200) {
        swalService.showSuccess({
          icon: "success",
          title: "Added!",
          text: response.message,
          showConfirmButton: false,
          timer: 1500,
        });
        AddEmployessDialoBox();
      } else {
        swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to Add New Employee",
          timer: 1500,
        });
        AddEmployessDialoBox();
      }
      navigate(-1);
    },
  });

  const { handleSubmit } = formik;

  return (
    <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 z-50 bg-[rgba(3,27,89,.3)]">
      <div
        className="min-w-[37.5rem] w-[37.5rem] z-10 h-fit flex flex-col items-center gap-[1.5rem] bg-white
        rounded-[18px] shadow-lg"
      >
        <form className="w-full flex flex-col h-full" onSubmit={handleSubmit}>
          <div
            className="w-full px-7 py-5 flex justify-between items-center text-[#031B59]
          font-extrabold text-xl"
          >
            <p>{t("invite")}</p>
            <button className="w-fit h-fit" onClick={AddEmployessDialoBox}>
              <GrFormClose className="flex w-[2rem] h-[2rem]" />
            </button>
          </div>
          <div className="w-full flex flex-col gap-4">
            <hr />
            <div className="w-full px-7 flex flex-col item-center gap-4">
              <div className="w-full flex flex-col border gap-2">
                {checkData &&
                  Object.keys(checkData.user).map((val, index) => (
                    <div
                      key={index}
                      className="flex w-full items-center gap-4 p-2 "
                    >
                      <p className="basis-1/4 w-full">
                        {val} <span>:</span>
                      </p>
                      <p>{checkData.user.Name}</p>
                    </div>
                  ))}
              </div>
            </div>
            <hr />
          </div>
          <div className="w-full px-7 py-5 flex justify-end items-center gap-8">
            <button
              onClick={AddEmployessDialoBox}
              className="flex w-[7.5rem] h-[3rem] p-[1rem] justify-center items-center gap-[0.5rem]
              rounded-[0.5rem]"
            >
              {t("cancel")}
            </button>
            <button
              className="flex h-[3rem] p-[1rem_1.875rem] w-[6rem] justify-center items-center gap-[0.5rem]
            bg-[#031B59] rounded-[2.5rem] font-inter text-[1rem] font-bold leading-normal text-white"
              type="submit"
            >
              {t("save")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeePopup;
