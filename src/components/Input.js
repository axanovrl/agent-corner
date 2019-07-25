import React from 'react';


const Input = (props ) =>{
    const {input, type="text"} = props;
   
    return(
        
        <input id = "label" type={type}></input>

   
    )
}

export default Input;