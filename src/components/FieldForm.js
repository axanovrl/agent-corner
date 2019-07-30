import React from 'react';
import ReactDOM from 'react-dom';
import {Link } from "react-router-dom";



import FieldInput from './FieldInput';

const FieldForm = (props) => {
  
    return(
      
        <form>
          <div className="d-flex justify-content-center">
            <div className="wizard-form">
            <h2>Create your account</h2>
            <div className="form-row">
            <div className="form-group col">
              <FieldInput label="First Name" className="form-label" />
            </div>
            <div className="form-group col">
              <FieldInput label="Last Name" className="form-label" />
              </div>
            </div>
            <div className="form-group">
            <FieldInput label="Email" type="email"className="form-label"/>
            </div>
            <div className="form-group">
            <FieldInput label="Password" type="password" className="form-label font-weigh-bold" />
            </div>
            <div className="form-group">
            <FieldInput label="Confirm Password" type="password" className="form-label"/> 
            </div>
            <button type="submit">Sign Up</button>
            <p>Already have an account? <Link to="/login">Sign in instead</Link></p>
            <hr></hr>
            <p>By continuing, you agree to our
            <a href = "#">Terms of Use</a> and <a href="#">Privacy Policy</a>
            </p>
          </div>
           
            </div>
          
        </form>
      
     
       
    )
}

export default FieldForm;