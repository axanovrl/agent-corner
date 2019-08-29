import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Table from "./components/Table";
import { List } from "./components/const";

const Campaigns = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <div className="mb-2-hf d-flex justify-content-between flex-wrap">
          <h2>Campaigns</h2>
        </div>
        <Link
          to="campaigns/add"
          className="font-weight-bold add-btn btn btn-primary"
        >
          + Create
        </Link>
        <div className="mb-2-hf">
          <Table list={List} />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Campaigns;
