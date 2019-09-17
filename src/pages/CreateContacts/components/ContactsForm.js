import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import FieldInput from "../../../components/FieldInput";
import { required } from "../../../utils/validation";

const ContactsForm = props => {
  const { handleSubmit } = props;
  return (
    <Form id="campaigns-form" className="form-default" onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          <Field
            name="firstName"
            label="First Name"
            component={FieldInput}
            placeholder="Sam"
            type="text"
            validate={required}
          />
        </Col>
        <Col>
          <Field
            name="lastName"
            label="Last Name"
            component={FieldInput}
            placeholder="Smith"
            type="text"
            validate={required}
          />
        </Col>
      </Form.Row>
      <Field
        name="zipCode"
        label="Zip Code"
        component={FieldInput}
        placeholder="123456"
        type="text"
        validate={required}
      />
      <Field
        name="city"
        label="City"
        component={FieldInput}
        placeholder="San Francisco"
        type="text"
        validate={required}
      />
      <Field
        name="state"
        label="State"
        component={FieldInput}
        placeholder="CA"
        type="text"
        validate={required}
      />
      <Field
        name="estimatedPrice"
        label="Estimated Price"
        component={FieldInput}
        type="text"
        placeholder="$450,000-$500,000"
        validate={required}
      />
      <div className="d-flex justify-content-center mt-2-hf">
        <Button variant="primary" className="font-weight-bold">
          Create a Contact
        </Button>
      </div>
    </Form>
  );
};

ContactsForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "ContactsForm"
})(ContactsForm);
