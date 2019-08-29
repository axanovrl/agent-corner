import React from "react";
import PropTypes from "prop-types";

const ListGroupItem = ({ label, span, className }) => {
  return (
    <div className={`d-flex justify-content-between ${className}`}>
      <label className={`font-weight-bold ${className}`}>{label}</label>
      <span>{span}</span>
    </div>
  );
};
ListGroupItem.propTypes = {
  label: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired,
  className: PropTypes.string
};
export default ListGroupItem;
