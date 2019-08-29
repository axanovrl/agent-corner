import React from "react";
import PropTypes from "prop-types";

const FieldLabel = ({ label, p, className }) => {
  return (
    <li>
      <label className={`text-secondary ${className}`}>{label}</label>
      <p className={`text-left ${className}`}>{p}</p>
    </li>
  );
};
FieldLabel.propTypes = {
  label: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default FieldLabel;
