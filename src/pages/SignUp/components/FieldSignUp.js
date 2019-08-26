import React from 'react';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

import FieldInput from '../../../components/FieldInput'

const FieldSignUp = () => {

  return (
    <Container>
      <form>
        <div className="d-flex justify-content-center">
          <div className="wizard-form">
            <h2>Create your account</h2>
            <div className="form-row">
              <div className="form-group col">
                <FieldInput label="First Name" className="form-label" placeholder="Sam" />
              </div>
              <div className="form-group col">
                <FieldInput label="Last Name" className="form-label" placeholder="Smith" />
              </div>
            </div>
            <div className="form-group">
              <FieldInput label="Email" type="email" className="form-label" placeholder="sam_smith@gmail.com" />
            </div>
            <div className="form-group">
              <FieldInput label="Password" type="password" className="form-label font-weigh-bold" />
            </div>
            <div className="form-group">
              <FieldInput label="Confirm Password" type="password" className="form-label" />
            </div>
            <button type="submit">Sign Up</button>
            <p>Already have an account? <Link to="/login">Sign in instead</Link></p>
            <hr></hr>
            <p>By continuing, you agree to our
            <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </form>
    </Container>
  )
}

export default FieldSignUp;