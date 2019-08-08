import React from 'react';

const FieldListGroupItem = ({label, span, className}) =>{

    return(       
        <div className={`d-flex justify-content-between ${className}`}>
            <label className={`font-weight-bold ${className}`}>{label}</label>
            <span>{span}</span>
        </div>
                
    )
}

export default FieldListGroupItem;