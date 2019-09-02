import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const Select = ({ label, options }) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control as="select">
      {options.map((item, index) => (
        <option key={index} value={item.value}>
          {item.name}
        </option>
      ))}
    </Form.Control>
  </Form.Group>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};
export default Select;
