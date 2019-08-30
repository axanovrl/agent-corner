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
  <Form>
    <div className="d-flex justify-content-between">
      <Form.Label htmlFor>{label}</Form.Label>
      {renderTop}
    </div>
    <Form.Control
      as="input"
      type={type}
      placeholder={placeholder}
      value={value}
    />
  </Form>
);

FieldInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  renderTop: PropTypes.element.isRequired
};
export default FieldInput;
