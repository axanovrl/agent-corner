import React from "react";
import PropTypes from "prop-types";

import FieldForgotPassword from "./components/FieldForgotPassword";

const ForgotPassword = ({ history }) => {
  const handleSubmit = () => {
    history.push("/login");
  };
  return <FieldForgotPassword onSubmit={handleSubmit} />;
};

ForgotPassword.propTypes = {
  history: PropTypes.func
};

export default ForgotPassword;
