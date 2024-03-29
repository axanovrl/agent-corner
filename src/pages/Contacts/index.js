import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Table from "./components/Table";
import { LIST_CONTACTS } from "./components/const";

const Contacts = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="mb-2-hf d-flex justify-content-between flex-wrap">
          <h2>Contacts</h2>
        </div>
        <Link
          to="contacts/add"
          className="font-weight-bold add-btn btn btn-primary"
        >
          + Create
        </Link>
        <div className="mb-2-hf">
          <Table list={LIST_CONTACTS} />
        </div>
      </Container>
    </>
  );
};
export default Contacts;
