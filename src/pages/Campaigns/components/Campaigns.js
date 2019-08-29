import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../../../components/NavBar";
import Table from "./Table";

const Campaigns = () => {
  return (
    <>
      <NavBar />
      <div className="container">
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
          <Table />
        </div>
      </div>
    </>
  );
};

export default Campaigns;
