import React from "react";
import { Table as BTable } from "react-bootstrap";
import PropTypes from "prop-types";

import { COLUMNS } from "./const";

const Table = ({ className, list }) => {
  return (
    <div
      className={`overflow-auto table-bordered container-table bg-light ${className}`}
    >
      <BTable striped bordered hover>
        <thead>
          <tr>
            <th scope="col">PHOTO</th>
            <th scope="col">USERNAME</th>
            <th scope="col">ZIPCODE</th>
            <th scope="col">CITY&STATE</th>
            <th scope="col">ESTIMATED PRICE</th>
            <th scope="col">DATE CREATED</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => {
            return (
              <tr key={i}>
                {COLUMNS.map((jtem, index) => (
                  <td key={index}>
                    {jtem.render ? jtem.render(item[jtem.key]) : item[jtem.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </BTable>
    </div>
  );
};
Table.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array.isRequired
};
export default Table;
