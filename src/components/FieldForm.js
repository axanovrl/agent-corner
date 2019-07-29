import React from 'react';

import FieldInput from './FieldInput';

const FieldForm = (props) => {
  
    return(
       <form>
          <div className="container-row col">
            <FieldInput label="First Name" className="container-group col"/>
            <FieldInput label="Last Name" className="container-group col"/>
          </div>
            <FieldInput label="Email" className="form-control"/>
            <FieldInput label="Password" type="password" className="form-control" />
            <FieldInput label="Confirm Password" type="password" className="form-control"/>
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="#">Sign in instead</a></p>
          <hr></hr>
          <p>By continuing, you agree to our
          <a href = "#">Terms of Use</a> and <a href="#">Privacy Policy</a>
          </p>
       </form>
    )
}

export default FieldForm;