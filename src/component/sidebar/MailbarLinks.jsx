import { MdInbox, MdDeleteOutline } from "react-icons/md";
import { AiOutlineStar, AiOutlineFile } from "react-icons/ai";
import { PiWarningOctagonBold } from "react-icons/pi";
import { FiSend } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export function MailbarLink() {
  const { t } = useTranslation();
  const isActive = (match) => {
    // return match === location;
  };

  const mailbarLink = [
    {
      to: "/inbox",
      isActive: isActive("inbox"),
      icon: MdInbox,
      text: t("inbox"),
    },
    {
      to: "/send",
      isActive: isActive("send"),
      icon: FiSend,
      text: t("send"),
    },
    {
      to: "/starred",
      isActive: isActive("starred"),
      icon: AiOutlineStar,
      text: t("starred"),
    },
    {
      to: "/drafts",
      isActive: isActive("drafts"),
      icon: AiOutlineFile,
      text: t("drafts"),
    },
    {
      to: "/trash",
      isActive: isActive("trash"),
      icon: MdDeleteOutline,
      text: t("trash"),
    },
    {
      to: "/spam",
      isActive: isActive("spam"),
      icon: PiWarningOctagonBold,
      text: t("spam"),
    },
  ];

  return mailbarLink;
}
