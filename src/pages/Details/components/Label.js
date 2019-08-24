import React from 'react';

const FieldLabel = ({ label, p, className }) => {
  return (
    <li>
      <label className={`text-secondary ${className}`}>{label}</label>
      <p className={`text-left ${className}`}>{p}</p>
    </li>
  )
}

export default FieldLabel;

