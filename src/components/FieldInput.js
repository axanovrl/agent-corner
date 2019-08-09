import React from 'react';

const FieldInput = ({type="text", label, className, placeholder,value, p}) =>{
    
    return(
        <div className = {className}>
            <label>{label}</label>  
            <p>{p}</p>
            <input type={type} className={className} placeholder={placeholder} value={value}/>
        </div>
    )
}

export default FieldInput;