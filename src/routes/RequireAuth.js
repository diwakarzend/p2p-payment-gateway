import PropTypes from "prop-types";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getStorage, getUser } from "../utils/common";
import utils from "../utils/common";
import AuthLayout from "../components/Layout/AuthLayout";

export default function RequireAuth({ children, pageTitle = "" }) {
  let isAuth = true;
  if (getUser()) {
    isAuth = true;
  }

  const location = useLocation();

  return isAuth ? (
    <AuthLayout pageTitle={pageTitle}>{children}</AuthLayout>
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
