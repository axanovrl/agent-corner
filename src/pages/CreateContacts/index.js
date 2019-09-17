import React from "react";
import { Container, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import NavBar from "../../components/NavBar";
import ContactsForm from "./components/ContactsForm";

const CreateContacts = ({ history }) => {
  const handleSubmit = () => {
    history.push("/contacts");
  };
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <div className="mb-2-hf d-flex justify-content-between flex-wrap">
          <h2>Recurring Contact</h2>
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
            <div className="d-flex justify-content-center">
              <ContactsForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

CreateContacts.propTypes = {
  history: PropTypes.func
};
export default CreateContacts;
