import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLength15,
  minLength2,
  email,
  minLengthPassword8
} from "../../../utils/validation";
import PropTypes from "prop-types";

import FieldInput from "../../../components/FieldInput";

const FieldSignUp = props => {
  const { handleSubmit } = props;
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <Form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="text-center mb-2-hf">Create your account</h2>
          <Row>
            <Col>
              <Field
                name="firstName"
                label="First Name"
                component={FieldInput}
                placeholder="Sam"
                validate={[required, maxLength15, minLength2]}
              />
            </Col>
            <Col>
              <Field
                name="lastName"
                label="Last Name"
                component={FieldInput}
                placeholder="Smith"
                validate={[required, maxLength15, minLength2]}
              />
            </Col>
          </Row>
          <Field
            name="email"
            label="Email"
            component={FieldInput}
            validate={[email, required]}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            component={FieldInput}
            validate={[minLengthPassword8, required]}
          />
          <Field
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            component={FieldInput}
            validate={[minLengthPassword8, required]}
          />

          <Button
            type="submit"
            variant="primary"
            className="mt-2-hf font-weight-bold"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <div className="text-center pt-1-hf pb-2-hf">
            <span>
              Already have an account?
              <Link to="/login" className="text-primary">
                &nbsp;Sign Instead
              </Link>
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

FieldSignUp.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "FieldSignUp"
})(FieldSignUp);
