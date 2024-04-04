import React from "react";
import { useTranslation } from "react-i18next";
import SidebarButton from "./SidebarButton";
import { MailbarLink } from "./MailbarLinks";

export default function MailBar() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-col py-1 space-y-5">
      <div className="w-full px-4">
        <button
          className="w-full h-[2.5rem] flex items-center justify-center space-x-3
         text-white border border-[rgba(242,246,255,0.20)] rounded-lg"
        >
          <p className="text-[20px] pb-1 pr-1">+</p> {t("new_mail")}
        </button>
      </div>
      <nav className="h-full w-full text-white overflow-hidden">
        {MailbarLink().map((obj) => (
          <SidebarButton
            key={obj.id}
            to={obj.to}
            icon={obj.icon}
            isActive={obj.isActive}
            text={obj.text}
          />
        ))}
      </nav>
    </div>
  );
}
