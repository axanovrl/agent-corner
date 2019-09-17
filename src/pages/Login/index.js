import React from "react";
import PropTypes from "prop-types";

import FieldLogin from "./components/FieldLogin";

const Login = ({ history }) => {
  const handleSubmit = () => {
    history.push("/campaigns");
  };
  return <FieldLogin onSubmit={handleSubmit} />;
};

Login.propTypes = {
  history: PropTypes.func
};
export default Login;
