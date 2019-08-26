import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import CampaignsForm from './components/CampaignsForm';

const CreateCampaigns = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <div className="mb-2-hf d-flex justify-content-between flex-wrap">
          <h2>Recurring Campaign</h2>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-center">
          <div className="position-relative bg-white panel-form border p-2">
            <button id="back" type="button" className="rounded-0 btn btn-dark"><Link to="/campaigns" className="text-white">Back</Link></button>
            <h2 className="h2 text-center mb-3">What’s your contact objective?</h2>
            <div className="d-flex justify-content-center">
              <CampaignsForm />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default CreateCampaigns;