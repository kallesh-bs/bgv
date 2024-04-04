import React from "react";
import PropTypes from "prop-types";
import DashboardAdmin from "component/dashboard/DashboardAdmin";
import DashboardClient from "component/dashboard/DashboardClient";
import DashboardEmployee from "component/dashboard/DashboardEmployee";

export default function DashboardPage({ role }) {
  if (!role) return null;
  if (role === "admin") return <DashboardAdmin />;
  if (role === "client") return <DashboardClient />;
  if (role === "employee") return <DashboardEmployee />;

  return null;
}

DashboardPage.propTypes = {
  role: PropTypes.string,
};
