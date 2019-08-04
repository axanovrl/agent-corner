import React from 'react';
import {Link } from "react-router-dom";

import FieldInput from './FieldInput';
import Logo from './Logo.png'


const Login = () =>{
    return(
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <form className="auth-form">
                    <div className="d-flex justify-content-center mb-3">
                        <img src={Logo} className="ac-logo" alt="logo"/>
                    </div>
                    <div className="form-group">
                        <FieldInput className="form-label" label="Email"/>
                    </div>
                    <div className="form-group">
                        <div className="d-flex justify-content-between">
                            <label className="form-label">Password</label>
                            <Link to="/forgot-password" className="text-dark font-weight-bold">Forgot Password</Link>
                        </div>
                            <FieldInput/>
                        
                        <div className="text-center pt-1-hf pb-2-hf">
                            <span>
                                Don't have an account?
                                <Link to="/sign-up"> Sign up</Link>
                            </span>
                        </div>

                        <div className="text-center pt-2-hf border-top">
                            <span>
                                By continuing, you agree to our 
                                <Link to="/terms"> Terms of Use  </Link>
                                and
                                <Link to="/privacy"> Privacy Policy</Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>   
    )

}

export default Login;