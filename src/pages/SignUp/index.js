import React from "react";
import PropTypes from "prop-types";

import FieldSignUp from "./components/FieldSignUp";

const SignUp = ({ history }) => {
  const handleSubmit = () => {
    history.push("/login");
  };
  return <FieldSignUp onSubmit={handleSubmit} />;
};

SignUp.propTypes = {
  history: PropTypes.func
};

export default SignUp;
