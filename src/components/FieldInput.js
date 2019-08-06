import React from 'react';

const FieldInput = ({type="text", label, className, placeholder,value}) =>{
    
    return(
        <div className = {className}>
            <label>{label}</label>  
            <input type={type} className={className} placeholder={placeholder} value={value}/>
        </div>
    )
}

export default FieldInput;