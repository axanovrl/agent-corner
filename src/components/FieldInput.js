import React from "react";
import PropTypes from "prop-types";

const FieldInput = ({
  type = "text",
  label,
  className,
  placeholder,
  p,
  renderTop
}) => (
  <div className={className}>
    <div className="d-flex justify-content-between">
      <label htmlFor>{label}</label>
      {renderTop}
    </div>
    {p && <p>{p}</p>}
    <input type={type} placeholder={placeholder} />
  </div>
);

FieldInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  renderTop: PropTypes.element.isRequired
};
export default FieldInput;
