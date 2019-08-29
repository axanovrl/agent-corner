import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import ContactsForm from "./components/ContactsForm";

const CreateContacts = () => {
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
            <button id="back" type="button" className="rounded-0 btn btn-dark">
              <Link to="/contacts" className="text-white">
                Back
              </Link>
            </button>
            <div className="d-flex justify-content-center">
              <ContactsForm />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CreateContacts;
