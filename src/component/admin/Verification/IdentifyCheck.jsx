import Popup from "component/common/Popup";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiCloudUpload } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import swalService from "utils/SwalServices";
import ExtraActions from "./ExtraActions";

const IdentifyCheck = ({ selectOption }) => {
  const [docStatus, setDocStatus] = useState("Pending Verification")

  const { t } = useTranslation();

   const staticData = [ "Document.pdf", "Document"]
  // const handleIdentifyCheck = async () => {
  //   // Create FormData and append files
  //   const formdata = new FormData();
  //   getDocument.forEach((file) => {
  //     formdata.append(
  //       "background_verification[address_check_documents][]",
  //       file
  //     );
  //   });
  //   // Determine the API path based on the value of `selectOption`
  //   let path = "";
  //   path = `${apiUrl.identityCheck}/${userData?.id}`;
  //   console.log(`${selectOption}`, path);

  //   // Ensure a valid path was determined
  //   if (!path) {
  //     console.error("Invalid text value, no API path determined");
  //     return;
  //   }
  //   // Log the payload before sending it
  //   console.log("Payload being sent:", formdata);
  //   try {
  //     const { response, status } = await Helper.post(formdata, path, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     console.log(response, status);
  //     // Handle the response based on status
  //     if (status === 200) {
  //       swalService.showSuccess({
  //         icon: "success",
  //         title: "Added!",
  //         text: response.message,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     } else {
  //       swalService.showError({
  //         icon: "error",
  //         title: "Error!",
  //         text: "Failed to Add New Employee",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error in handleIdentifyCheck:", error);
  //   }
  // };

  return (
    <>
      <div className="w-full pt-10">
          <div className="font-medium text-lg flex justify-between">
            <h1>{t(selectOption)}</h1>
            <ExtraActions docStatus={docStatus} setDocStatus={setDocStatus} />
          </div>
          <div>
{staticData.map((item)=> <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">{item}<RxCross2/></div>)}
          </div>
        </div>
    </>
  );
};

export default IdentifyCheck;
