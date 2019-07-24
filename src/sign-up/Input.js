import React from 'react';

const Input = (props) => {
    const {handleChange} = props;
   return (
       <input onChange = {handleChange}></input>
   )
}

export default Input;