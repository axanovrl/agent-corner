import React from 'react';

const FieldLabel = ({label,p, className}) => {
   return(
        <li>
            <label className={className}>{label}</label>
            <p>{p}</p>
        </li>
   )
}

export default FieldLabel;

