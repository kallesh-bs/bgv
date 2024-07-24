import { useTranslation } from "react-i18next";
import ExtraActions from "./ExtraActions";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AddressCheck = ({ selectOption }) => {
  const [docStatus, setDocStatus] = useState("Pending Verification")

  const { t } = useTranslation();

   const staticData = [ "Document.pdf", "Document"]
  
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

export default AddressCheck;
