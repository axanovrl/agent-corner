import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Col, Button } from "react-bootstrap";

import FieldInput from "../../../components/FieldInput";

const FieldSignUp = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <Form className="auth-form">
          <h2 className="text-center mb-2-hf">Create your account</h2>
          <Form.Row>
            <Form.Group as={Col}>
              <FieldInput label="First Name" placeholder="Sam" />
            </Form.Group>
            <Form.Group as={Col}>
              <FieldInput label="Last Name" placeholder="Smith" />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <FieldInput label="Email" />
          </Form.Group>
          <Form.Group>
            <FieldInput label="Password" type="password" />
          </Form.Group>
          <Form.Group>
            <FieldInput label="Confirm Password" type="password" />
          </Form.Group>
          <Link to="/login">
            {" "}
            <Button variant="primary" className="mt-2-hf font-weight-bold">
              Sign Up
            </Button>
          </Link>
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

export default FieldSignUp;
