import React from 'react';


const FieldInput = ({input, type="text", label, className}) =>{
    
    return(
        <div className = {className}>
        <label>{label}</label>  
        <input type={type} className={className} />
        </div>
    )
}

export default FieldInput;