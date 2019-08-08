import React from "react";
import FieldListGroupItem from './FieldListGroupItem';

const ListBlock = ({ className }) => (
  <div className={`block-list ${className}`}>
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
)

export default ListBlock
