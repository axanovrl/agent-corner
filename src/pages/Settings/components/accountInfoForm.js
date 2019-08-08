import React from 'react';

import FieldInput from '../../../components/FieldInput';

const AccountInfoForm = () => {

    return(
        <form className="form-default">
            <div>
                <div className="d-flex mb-1">
                    <span className="font-weight-bold ac-text-title">Login</span>
                </div>
                <div className="row">
                    <div className="mr-1 col-8">
                        <div className="form-row">
                            <div className="mr-1 col">
                                <div className="p-0 form-group col">
                                    <FieldInput label="Email address" placeholder="email@company.com" className="form-label" />
                                </div>
                                <div className="p-0 form-group col">
                                    <FieldInput label="Old Password" type="password" className="form-label" />
                                </div>
                            </div>
                            <div className="ml-1 col">
                                <div className="d-flex mt-new-password">
                                    <div className="p-0 form-group col">
                                        <FieldInput label="New Password" className="form-label" type="password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex mb-1">
                                <span className="font-weight-bold ac-text-title">Profile</span>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="mr-1 col">
                                <div className="p-0 formgroup col">
                                    <FieldInput label="First Name"  className="form-label" placeholder="Sam"/>
                                </div>
                                <div className="p-0 formgroup col">
                                    <FieldInput label="Phone Number"  className="form-label" placeholder="(123)456789"/>
                                </div>
                                <div className="p-0 formgroup col">
                                    <FieldInput label="State/City you are licenced in" className="form-label" placeholder="San Francisco"/>
                                </div>
                                
                            </div>
                            <div className="ml-1 col">
                            <div className="p-0 formgroup col">
                                    <FieldInput label="Last Name" className="form-label" placeholder="Smith"/>
                            </div>
                            <div className="p-0 formgroup col">
                                    <FieldInput label="License Number" className="form-label" placeholder="#123456789"/>
                            </div>
                            <div className="p-0 formgroup col">
                                    <FieldInput label="Years of a licenced agent" className="form-label" placeholder="10"/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-1 col-3">
                        <div className="row">
                            <span className="font-weight-bold">Photo</span>
                        </div>
                        <div className="row">
                            <figure className="photo-container figure">
                                <div className="d-flex flex-column">
                                    <img src="/img/avatar_mini.png" width="145px" height="130px" className="photo-avatar figure-img img-fluid rounded-circle"/>
                                    <button className="btn btn-link">
                                        <span align="center" className="font-weight-bold text-dark">Change a photo</span>
                                    </button>
                                </div>
                            </figure>
                        </div>
                        <div className="ac-m-1">
                            <div className="row">
                                <button type="submit" className="button-default btn btn-lg">
                                    <span className="font-weight-bold ac-text-small">Save Changes</span>
                                </button>   
                            </div>
                            <div className="row">
                                <button type="reset" className="button-default btn btn-outline-secondary btn-lg">
                                    <span className="font-weight-bold ac-text-small">Reset Value</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </form>
        
    )
}
export default AccountInfoForm;
