import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";
import ExtraActions from "./ExtraActions";

const EmployementHistoryCheck = () => {
  const [doc, setDoc] = useState("Pending Verification");
  const [doc1, setDoc1] = useState("Pending Verification");
  const [doc2, setDoc2] = useState("Pending Verification");
  const staticData = ["Document.pdf", "Document"];
  const { t } = useTranslation();

  return (
    <div className="w-[100%] h-[56vh]  mt-5 overflow-x-scroll no-scrollbar">
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("Relieving letter")}</h1>
            <ExtraActions docStatus={doc} setDocStatus={setDoc} />
          </div>
        </div>
        <div>
          {staticData.map((item) => (
            <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
              {item}
              <RxCross2 />
            </div>
          ))}
        </div>
      </div>

      {/* experience_letters Section */}

      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("Experience letter")}</h1>
            <ExtraActions docStatus={doc1} setDocStatus={setDoc1} />
          </div>
        </div>
        <div>
          {staticData.map((item) => (
            <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
              {item}
              <RxCross2 />
            </div>
          ))}
        </div>
      </div>
      {/* bank_statements Section */}
      <div className="w-[100%] mt-2">
        <div className="w-[100%] h-[55px] flex">
          <div className="xl:w-[100%] lg:w-[100%] md:w-[100%] text-2xl flex justify-between items-center font-medium text-base">
            <h1>{t("Bank Statement")}</h1>

            <ExtraActions docStatus={doc2} setDocStatus={setDoc2} />
          </div>
        </div>
        <div>
          {staticData.map((item) => (
            <div className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3">
              {item}
              <RxCross2 />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployementHistoryCheck;
