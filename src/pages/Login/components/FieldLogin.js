import React from "react";
import { Link } from "react-router-dom";

import FieldInput from "../../../components/FieldInput";
import { Container, Button, Form } from "react-bootstrap";

const FieldLogin = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Form className="auth-form">
          <div className="d-flex justify-content-center mb-3">
            <img src="/img/Logo.png" className="ac-logo" alt="logo" />
          </div>
          <Form.Group>
            <FieldInput label="Email" />
          </Form.Group>
          <Form.Group>
            <FieldInput
              label="Password"
              type="password"
              renderTop={
                <Link to="/forgot-password" className="text-dark form-label">
                  Forgot Password
                </Link>
              }
            />
          </Form.Group>
          <Link to="/campaigns">
            <Button variant="primary" className="mt-2-hf font-weight-bold">
              Log in
            </Button>
          </Link>
          <div className="text-center pt-1-hf pb-2-hf">
            <span>
              Don&apos;t have an account
              <Link to="/sign-up">&nbsp;Sign up</Link>
            </span>
          </div>
          <div className="text-center pt-2-hf border-top">
            <span>
              By continuing, you agree to our&nbsp;
              <Link to="#">Terms of Use</Link>
              &nbsp;and&nbsp;
              <Link to="#">Privacy Policy</Link>
            </span>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default FieldLogin;
