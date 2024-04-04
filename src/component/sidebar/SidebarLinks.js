import { FiSettings, FiUser } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { MdDisplaySettings } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import { IoGridOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi2";
import { BsClipboard2Pulse } from "react-icons/bs";
// import { AiOutlinePartition } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { CgBriefcase } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { MdOutlineVerified } from "react-icons/md";

export function SidebarLink() {
  const { t } = useTranslation();
  const userData = localStorage.getItem("userLoginToken")
    ? JSON.parse(localStorage.getItem("userLoginToken")) : '';
  const role = userData?.role;
  let sidebarlink = [];
  const isActive = (match) => {
    return match === Location;
  };
  if (role === "admin") {
    sidebarlink = [
      {
        to: "/verification",
        isActive: isActive("verfication"),
        icon: MdOutlineVerified,
        text: t("verification"),
      }
    ];
  } else if (role === "employee") {
    sidebarlink = [
      {
        to: "/dashboard",
        isActive: isActive("dashboard"),
        icon: IoGridOutline,
        text: t("dashboard"),
      },
      {
        to: "/status",
        isActive: isActive("status"),
        icon: BsClipboard2Pulse,
        text: t("status"),
      },
      {
        to: "/attendance",
        isActive: isActive("attendance"),
        icon: FiUser,
        text: t("attendance"),
      },
      {
        to: "/team",
        isActive: isActive("team"),
        icon: LuUsers,
        text: t("myTeams"),
      },
      {
        to: "/leave",
        isActive: isActive("leave"),
        icon: HiOutlineCalendar,
        text: t("myLeaves"),
      },
      // {
      //   to: "/interview",
      //   isActive: isActive("interview"),
      //   icon: AiOutlinePartition,
      //   text: t("interview"),
      // },
    ];
  } else if (role === "client") {
    sidebarlink = [
      {
        to: "/dashboard",
        isActive: isActive("dashboard"),
        icon: IoGridOutline,
        text: t("dashboard"),
      },
      {
        to: "/projects",
        isActive: isActive("projects"),
        icon: BsClipboard2Pulse,
        text: t("projects"),
      },
      {
        to: "/attendance",
        isActive: isActive("attendance"),
        icon: FiUser,
        text: t("attendance"),
      },
      {
        to: "/team",
        isActive: isActive("team"),
        icon: LuUsers,
        text: t("myTeams"),
      },
      {
        to: "/leave",
        isActive: isActive("leave"),
        icon: HiOutlineCalendar,
        text: t("myLeaves"),
      },
    ];
  }

  return sidebarlink;
}
