import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxCross2 } from "react-icons/rx";
import { IdentifyCheckProps } from "utils/types";
import ExtraActions from "./ExtraActions";

const IdentifyCheck: React.FC<IdentifyCheckProps> = ({ selectOption }) => {
  const [docStatus, setDocStatus] = useState<string>("Pending Verification");
  const { t } = useTranslation();

  const staticData: string[] = ["Document.pdf", "Document"];

  return (
    <div className="w-full pt-10">
      <div className="font-medium text-lg flex justify-between">
        <h1>{t(selectOption)}</h1>
        <ExtraActions docStatus={docStatus} setDocStatus={setDocStatus} />
      </div>
      <div>
        {staticData.map((item, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-between border p-[10px_14px_10px_10px] mt-3"
          >
            {item}
            <RxCross2 />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdentifyCheck;
