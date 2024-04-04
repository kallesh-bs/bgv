import React, { useEffect } from "react";
import swalService from "../../utils/SwalServices";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  handlePostStatus,
  handleUpdateStatus
} from "redux/appThunk/Employee/chat";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ Component, roleList, name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = localStorage.getItem("userLoginToken")
    ? JSON.parse(localStorage.getItem("userLoginToken"))
    : "";

  const tokenExpiryTime = localStorage.getItem("tokenExpiryTime");
  const role = userData?.role;

  useEffect(() => {
    if (userData && tokenExpiryTime) {
      const currentTime = Date.now();
      const expiryTime = parseInt(tokenExpiryTime, 10);

      if (currentTime < expiryTime) {
        const timeUntilExpiry = expiryTime - currentTime;
        setTimeout(() => {
          swalService.showError({
            icon: "error",
            title: "Oops...",
            text: "Please Login Again. Your Session Has Expired!",
          });
          navigate("/login");
          localStorage.removeItem("userLoginToken");
          localStorage.removeItem("tokenExpiryTime");
        }, timeUntilExpiry);
      } else {
        swalService.showError({
          icon: "error",
          title: "Oops...",
          text: "Please Login Again. Your Session Has Expired!",
        });
        navigate("/login");
      }
    } else {
      swalService.showError({
        icon: "error",
        title: "Oops...",
        text: "Please Login Again. Your Session Has Expired!",
      });
      navigate("/login");
    }
  }, [userData, tokenExpiryTime]);

  const handleChatStatus = () => {
    dispatch(handlePostStatus());
  };

  useEffect(() => {
    handleChatStatus();
  }, []);

  useEffect(() => {
    window.onunload = function () {
      dispatch(handleUpdateStatus(false));
    };
  }, []);

  if (name === "Dashboard") {
    return (<>
      <meta name="robots" content="noindex" />
      <Component role={role} />
    </>);
  }

  const ComponentRendered = Component[role];

  return roleList?.includes(role) ? (
    <ComponentRendered />
  ) : (
    navigate("/404")
  );
};

export default AuthGuard;

AuthGuard.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object]),
  roleList: PropTypes.arrayOf(Object),
  name: PropTypes.string,
};
