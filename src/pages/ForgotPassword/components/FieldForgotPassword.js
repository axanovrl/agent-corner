import React from "react";
import { Link } from "react-router-dom";

import FieldInput from "../../../components/FieldInput";

const FieldForgotPassword = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form className="auth-form">
          <div className="d-flex justify-content-center mb-2">
            <img src="/img/Logo.png" className="ac-logo" alt="logo" />
          </div>
          <h2 className="text center mb-2-hf">Reset your password</h2>
          <div className="form-group">
            <FieldInput
              label="Email Address"
              className="form-label"
              type="email"
            />
            <span className="form-text">
              Enter the email associated with your Agents Corner account and
              we&apos;ll send you instructions to reset your password.
            </span>
          </div>
          <button type="submit">Submit</button>
          <div className="text-center pt-1-hf pb-2-hf">
            <span>
              Go back to
              <Link to="/login"> Log in</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FieldForgotPassword;
