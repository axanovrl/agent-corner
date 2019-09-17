import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import FieldInput from "../../../components/FieldInput";
import { required, email } from "../../../utils/validation";

const FieldForgotPassword = props => {
  const { handleSubmit } = props;
  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Form className="auth-form">
          <div className="d-flex justify-content-center mb-2">
            <img src="/img/Logo.png" className="ac-logo" alt="logo" />
          </div>
          <h2 className="text center mb-2-hf">Reset your password</h2>
          <Field
            name="email"
            label="Email Address"
            component={FieldInput}
            type="email"
            validate={[required, email]}
          />
          <span className="form-text">
            Enter the email associated with your Agents Corner account and
            we&apos;ll send you instructions to reset your password.
          </span>
          <Button
            type="sumbit"
            variant="primary"
            className="mt-2-hf font-weight-bold"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <div className="text-center pt-1-hf pb-2-hf">
            <span>
              Go back to
              <Link to="/login"> Log in</Link>
            </span>
          </div>
        </Form>
      </div>
    </Container>
  );
};

FieldForgotPassword.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "FieldForgotPassword;"
})(FieldForgotPassword);
