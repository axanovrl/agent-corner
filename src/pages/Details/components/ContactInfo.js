/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Link} from 'react-router-dom';

import FieldLabel from './Label';

const ContactInfo = () =>{

    return(
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
                    </div>
                        <ul className="list-about-user">
                                <FieldLabel label="Email" p="jfox@gmail.com"/>
                                <FieldLabel label="Objective" p="Objective"/>
                                <FieldLabel label="Lifecycle Stage" p="New"/>
                                <FieldLabel label="Contact Status"p="New"/>
                        </ul>
                    </div>
                </div>
    )
}

export default ContactInfo;