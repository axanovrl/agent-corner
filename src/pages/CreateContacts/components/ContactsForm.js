import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import FieldInput from "../../../components/FieldInput";

const ContactsForm = () => {
  return (
    <Form id="campaigns-form" className="form-default">
      <Form.Row>
        <Col>
          <Form.Group>
            <FieldInput label="First Name" placeholder="Sam" type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <FieldInput label="Last Name" placeholder="Smith" type="text" />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Group>
        <FieldInput label="Zip Code" placeholder="123456" type="text" />
      </Form.Group>
      <Form.Group>
        <FieldInput label="City" placeholder="San Francisco" type="text" />
      </Form.Group>
      <Form.Group>
        <FieldInput label="State" placeholder="CA" type="text" />
      </Form.Group>
      <Form.Group>
        <FieldInput
          label="Estimated Price"
          type="text"
          placeholder="$450,000-$500,000"
        ></FieldInput>
      </Form.Group>
      <div className="d-flex justify-content-center mt-2-hf">
        <Link to="/contacts">
          <Button variant="primary" className="font-weight-bold">
            Create a Contact
          </Button>
        </Link>
      </div>
    </Form>
  );
};

export default ContactsForm;
