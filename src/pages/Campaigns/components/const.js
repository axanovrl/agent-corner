import React from "react";

export const List = [
  {
    name: "Campaign Name",
    actions: "Active",
    zipcode: "123456",
    bid: "$10.50",
    budget: "$210.00"
  }
];

export const Columns = [
  {
    key: "name"
  },
  {
    key: "actions",
    displayName: "Columns",
    // eslint-disable-next-line react/display-name
    render: val => (
      <div className="d-flex align-items-center">
        <div className="oval oval-success" />
        {val}
      </div>
    )
  },
  {
    key: "zipcode"
  },
  {
    key: "bid"
  },
  {
    key: "budget"
  }
];
