import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import FieldInput from "../../../components/FieldInput";
import { required, email } from "../../../utils/validation";

const FieldLogin = props => {
  const { handleSubmit } = props;
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Form className="auth-form" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center mb-2-hf">
            <img src="/img/Logo.png" className="ac-logo" alt="logo" />
          </div>
          <Field
            name="email"
            label="Email"
            component={FieldInput}
            validate={[email, required]}
          />
          <Form.Group>
            <Field
              name="password"
              label="Password"
              type="password"
              component={FieldInput}
              renderTop={
                <Link to="/forgot-password" className="text-dark form-label">
                  Forgot Password
                </Link>
              }
              validate={required}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="mt-2-hf font-weight-bold"
          >
            Log in
          </Button>
          <Form.Check
            type="checkbox"
            label="Keep me sign in"
            className="mt-2"
          />
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

FieldLogin.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "FieldLogin"
})(FieldLogin);
