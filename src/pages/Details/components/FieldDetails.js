import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from '../../NavBar';
import FieldLabel from './FieldLabel';
import FieldListGroupItem from './FieldListGroupItem';

const FieldDetails = () =>{
    return(
        <React.Fragment>
                <NavBar/>
                    <div className="container">
                        <div className="row">
                            <div id="contact-info" className="bg-white p-0 position-relative col-md-3 col-12">
                                <button id="back" type="button" className="rounded-0 btn btn-dark"> <Link to="/contacts" className="text-white">Back</Link></button>
                                <div className="container-avatar-info border-bottom">
                                    <div className="d-flex justify-content-center">
                                        <figure className="text-center">
                                            <img src="/img/avatar_mini.png" className="avatar"></img>
                                            <figcaption className="name-with-avatar">Jeffery Fox</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                    <div className="ag-p-20">
                                        <div className="d-flex">
                                            <h6 className="ac-text-16 font-weight-bold">About</h6>
                                            <ul className="list-about-user">
                                                <FieldLabel label="Email" className="text-secondary" p="jfox@gmail.com"/>
                                                <FieldLabel label="Objective" className="text-secondary" p="Objective"/>
                                                <FieldLabel label="Lifecycle Stage" className="text-secondary" p="New"/>
                                                <FieldLabel label="Contact Status" className="text-secondary" p="New"/>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                            <div className="p-0 col-9">
                                
                                    <div className="pt-1-hf pl-2 row">
                                        <div className="ag-m-3 col-lg-6 col-12">
                                            <div className="block-list">
                                                <div className="card-header bg-dark d-flex">
                                                <h6 className="ac-text-16 font-weight-bold text-white">Overview</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="list-group">
                                                        <div className="list-group-item">
                                                            <FieldListGroupItem label="State" span="California" className="d-flex justify-content-between font-weight-bold"/>
                                                    </div>
                                                        <div className="list-group-item">
                                                            <FieldListGroupItem label="Zip Code" span="456908" className="d-flex justify-content-between font-weight-bold"/>
                                                        </div>
                                        
                                                        <div className="list-group-item">
                                                            <FieldListGroupItem label="Property Type" span="Property" className="d-flex justify-content-between font-weight-bold"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ag-m-3 col-lg-6 col-12">
                                            <div className="block-list">
                                                <div className="card-header bg-dark d-flex">
                                                <h6 className="ac-text-16 font-weight-bold text-white">Contract Details</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="list-group">
                                                        <div className="list-group-item">
                                                            <FieldListGroupItem label="Objective" span="Buyer" className="d-flex justify-content-between font-weight-bold"/>
                                                        </div>

                                                        <div className="list-group-item">
                                                                <FieldListGroupItem label="Estimated Price" span="$450,000-$500,000" className="d-flex justify-content-between font-weight-bold"/>
                                                        </div>

                                                        <div className="list-group-item">
                                                                <FieldListGroupItem label="Down Payment" span="15%" className="d-flex justify-content-between font-weight-bold"/>
                                                        </div>

                                                        <div className="list-group-item">
                                                                <FieldListGroupItem label="Time Frame" span="ASAP" className="d-flex justify-content-between font-weight-bold"/>
                                                        </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ag-m-3 col-lg-6 col-12">
                                            <div className="block-list">
                                                <div className="card-header bg-dark d-flex">
                                                <h6 className="ac-text-16 font-weight-bold text-white">Other Info</h6>
                                                </div>
                                                <div className="card-body">

                                                    <div className="list-group-item">
                                                        <FieldListGroupItem label="First Time Buyer" span="Yes" className="d-flex justify-content-between font-weight-bold"/>
                                                    </div>
                               
                                                    <div className="list-group-item">
                                                        <FieldListGroupItem label="Other Info"  span ="Good" className="d-flex justify-content-between font-weight-bold"/>
                                                    </div>

                                                    <div className="list-group-item">
                                                        <FieldListGroupItem label="Veteran Status" span="I'm not a Veteran" className="d-flex justify-content-between font-weight-bold"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
       
    )
}

export default FieldDetails;
