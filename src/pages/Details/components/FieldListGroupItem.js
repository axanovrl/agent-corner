import React from 'react';

const FieldListGroupItem = ({label, span, className}) =>{

    return(       
        <div className={className}>
            <label className={className}>{label}</label>
            <span>{span}</span>
        </div>
                
    )
}

export default FieldListGroupItem;