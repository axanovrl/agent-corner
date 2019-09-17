import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FieldInput = ({ input, label, meta, renderTop, ...rest }) => (
  <Form.Group controlId={input.name} className="p-0">
    <div className="d-flex justify-content-between">
      {label && <Form.Label>{label}</Form.Label>}
      {renderTop}
    </div>
    <Form.Control
      isInvalid={meta.touched && meta.error}
      as="input"
      {...input}
      {...rest}
    />
    {meta.touched &&
      (meta.error && (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      ))}
  </Form.Group>
);

FieldInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  renderTop: PropTypes.element,
  meta: PropTypes.object
};
export default FieldInput;
