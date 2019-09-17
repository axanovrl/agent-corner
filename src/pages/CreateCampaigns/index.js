import React from "react";
import { Container, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import NavBar from "../../components/NavBar";
import CampaignsForm from "./components/CampaignsForm";

const CreateCampaigns = ({ history }) => {
  const handleSubmit = () => {
    history.push("/campaigns");
  };
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
            <Button
              variant="btn-dark"
              id="back"
              type="button"
              className="rounded-0 btn btn-dark"
              onClick={handleSubmit}
            >
              Back
            </Button>
            <h2 className="h2 text-center mb-3">
              What’s your contact objective?
            </h2>
            <div className="d-flex justify-content-center">
              <CampaignsForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};
CreateCampaigns.propTypes = {
  history: PropTypes.func
};
export default CreateCampaigns;
