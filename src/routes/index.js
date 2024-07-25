import Verfication from "component/admin/Verification/Verfication";
import VerficationDetails from "component/admin/Verification/VerificationDetails";
import CheckMail from "pages/auth/CheckMail";
import Forgot from "pages/auth/Forgot";
import Login from "pages/auth/Login";
import OtpVerification from "pages/auth/OtpVerification";
import ResetPassword from "pages/auth/ResetPassword";
import Home from "pages/Home";
import Page404 from "pages/Page404";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AddEmployee from "../component/admin/Employee/AddEmployee";
import AuthGuard from "../component/authGuard/AuthGuard.js";
import Layout from "../component/layouts/Layout";
import LayoutWeb from "../component/layouts/LayoutWeb.jsx";

export const MainRoutes = () => {
  const unprotectedRoutes2 = [
    {
      path: "/login",
      component: Login,
      name: "Login",
    },
    {
      path: "/forgot",
      component: Forgot,
      name: "Forgot",
    },
    {
      path: "/checkYourMail",
      component: CheckMail,
      name: "CheckYourMail",
    },
    {
      path: "/otp",
      component: OtpVerification,
      name: "Otp",
    },
    {
      path: "/reset/:token",
      component: ResetPassword,
      name: "ResetPassword",
    },
    {
      path: "404",
      component: Page404,
      name: "404Page",
    },
    {
      path: "*",
      component: Page404,
      name: "Page404",
    },
  ];
  const unprotectedRoutes = [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
  ];

  const protectedRoutes = [
    {
      path: "/verification/addEmployee",
      name: "Add employee",
      component: { admin: AddEmployee },
      role: ["admin"],
    },

    {
      path: "/verification",
      name: "Verfication",
      component: { admin: Verfication },
      role: ["admin"],
    },

    {
      path: "/VerficaticationDetails",
      name: "VerificationDetails",
      component: { admin: VerficationDetails },
      role: ["admin"],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {unprotectedRoutes2.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              name={obj.name}
              Component={obj.component}
            />
          ))}
        </Route>
        <Route element={<LayoutWeb />}>
          {unprotectedRoutes.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              name={obj.name}
              Component={obj.component}
            />
          ))}
        </Route>
        <Route element={<Layout />}>
          {protectedRoutes.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              name={obj.name}
              element={
                <AuthGuard
                  Component={obj.component}
                  roleList={obj.role}
                  name={obj.name}
                />
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
