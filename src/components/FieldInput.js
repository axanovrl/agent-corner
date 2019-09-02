import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const FieldInput = ({
  type = "text",
  label,
  placeholder,
  renderTop,
  value
}) => (
  <Form.Group>
    <div className="d-flex justify-content-between">
      <Form.Label>{label}</Form.Label>
      {renderTop}
    </div>
    <Form.Control
      as="input"
      type={type}
      placeholder={placeholder}
      value={value}
    />
  </Form.Group>
);

FieldInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  renderTop: PropTypes.element
};
export default FieldInput;
