import React from 'react';
import {Link} from 'react-router-dom';

import DropdownNav from '../../DropdownNav';
import TabPanel from './TabPanel';

const FieldSettings = () =>{

    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container">
                        <Link to="/dashboard"><img src="/img/logo1.png" width="42px" height="41px;"/></Link>
                        <div className="navbar-collapse collapse" id="responsive-navbar-nav">
                            <div className="mr-auto navbar-nav">
                                <Link to="/dashboard" className="text-white nav-link">Dashboard</Link>
                                <Link to="/contacts" className="text-white nav-link">Contacts</Link>
                                <Link to="/campaigns" className="text-white nav-link">Campaigns</Link>
                            </div>
                            <div className="navbar-nav">
                        <DropdownNav/>
                        </div> 
                        </div>
                    </div>  
                </nav>

                <div className="container">
                    <div className="mb-2">
                        <div className="my-1-hf d-flex justify-content-between">
                            <h1>Settings</h1>
                        </div>
                        <hr class="out"></hr>
                        <TabPanel/>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default FieldSettings;