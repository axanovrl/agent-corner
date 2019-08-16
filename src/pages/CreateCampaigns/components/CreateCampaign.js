import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from '../../../components/NavBar';
import FormCreateCampaign from './FormCreateCampaign';


const CreateCampaign = () =>{
    return (
        <React.Fragment>
            <NavBar/>
            <div className="container">
                <div className="mb-2-hf d-flex justify-content-between flex-wrap">
                    <h2>Recurring Campaign</h2>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-center">
                    <div className="position-relative bg-white panel-form border p-2">
                        <button id="back" type="button" className="rounded-0 btn btn-dark"><Link to="/campaigns" className="text-white">Back</Link></button>
                        <h2 className="h2 text-center mb-3">What’s your contact objective?</h2>
                        <div className="d-flex justify-content-center">
                            <FormCreateCampaign/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
       
    )
}

export default CreateCampaign; 