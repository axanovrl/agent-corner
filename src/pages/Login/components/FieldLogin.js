import React from "react";
import { Link } from "react-router-dom";

import FieldInput from "../../../components/FieldInput";
import { Button } from "react-bootstrap";

const FieldLogin = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form className="auth-form">
          <div className="d-flex justify-content-center mb-3">
            <img src="/img/Logo.png" className="ac-logo" alt="logo" />
          </div>
          <div className="form-group">
            <FieldInput className="form-label" label="Email" />
          </div>
          <div className="form-group">
            <FieldInput
              label="Password"
              className="form-label"
              renderTop={
                <Link to="forgot-password" className="text-dark">
                  Forgot Password
                </Link>
              }
            />
          </div>
          <Button variant="btn-primary" className="font-weight-bold">
            Log in
          </Button>
          <div className="text-center pt-1-hf pb-2-hf">
            <span>
              Don&apos;t have an account?
              <Link to="/sign-up"> Sign up</Link>
            </span>
          </div>
          <div className="text-center pt-2-hf border-top">
            <span>
              By continuing, you agree to our
              <Link to="/terms"> Terms of Use </Link>
              and
              <Link to="/privacy"> Privacy Policy</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FieldLogin;
