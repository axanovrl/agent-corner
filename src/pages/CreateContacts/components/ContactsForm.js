import React from "react";
import { Form, Col } from "react-bootstrap";

const ContactsForm = () => {
  return (
    <Form id="campaigns-form" className="form-default">
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Sam"></Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Smith"></Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Group>
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" placeholder="123456"></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="San Francisco"></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="CA"></Form.Control>
      </Form.Group>
      <div className="d-flex justify-content-center mt-2-hf">
        <button
          type="submit"
          className="btn-spacing-12 btn-spacing-295 btn btn-primary"
        >
          Create a Contact
        </button>
      </div>
    </Form>
  );
};

export default ContactsForm;
