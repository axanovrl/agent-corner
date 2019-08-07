import React from 'react';
import {Link} from 'react-router-dom';

import DropdownNav from '../../DropdownNav';
import NavBar from '../../NavBar';

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
                                                <li>
                                                    <label className="text-secondary">Phone Number</label>
                                                    <p>(415) 123-4567</p>
                                                </li>
                                                <li>
                                                    <label className="text-secondary">Email</label>
                                                    <p>jfox@gmail.com</p>
                                                </li>
                                                <li>
                                                    <label className="text-secondary">Objective</label>
                                                    <p>Objective</p>
                                                </li>
                                                <li>
                                                    <label className="text-secondary">Lifecycle Stage</label>
                                                    <p>New</p>
                                                </li>
                                                <li>
                                                    <label className="text-secondary">Contact Status</label>
                                                    <p>New</p>
                                                </li>
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
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">City</label>
                                                            <span>San Francisco</span>
                                                            </div>
                                                        </div>
                                                    
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">State</label>
                                                            <span>California</span>
                                                            </div>
                                                        </div>
                                                  
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">ZIP CODE</label>
                                                            <span>1234567</span>
                                                            </div>
                                                        </div>
                                                 
                                                   
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Property Type</label>
                                                            <span>Any Type</span>
                                                            </div>
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
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Objective</label>
                                                            <span>Buyer</span>
                                                            </div>
                                                        </div>
                                                   
                                                   
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Estimated Price</label>
                                                            <span>$450,000-$500,000</span>
                                                            </div>
                                                        </div>
                                               
                                                 
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Down Payment</label>
                                                            <span>15%</span>
                                                            </div>
                                                        </div>
                                                   
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Timeframe</label>
                                                            <span>ASAP</span>
                                                            </div>
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
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">First Time Buyer</label>
                                                            <span>Yes</span>
                                                            </div>
                                                        </div>
                                                   
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Other Info</label>
                                                            <span className="text-success">Good</span>
                                                            </div>
                                                        </div>
                                                    
                                                    
                                                        <div className="list-group-item">
                                                            <div className="d-flex justify-content-between">
                                                            <label class="font-weight-bold">Veteran Status</label>
                                                            <span>I'm not Veteran</span>
                                                            </div>
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