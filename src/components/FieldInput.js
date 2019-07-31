import React from 'react';

const FieldInput = ({type="text", label, className, placeholder}) =>{
    
    return(
        <div className = {className}>
            <label>{label}</label>  
            <input type={type} className={className} placeholder={placeholder}/>
        </div>
    )
}

export default FieldInput;