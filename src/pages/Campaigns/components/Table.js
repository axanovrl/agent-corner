import React from "react";
import { Table as BTable } from "react-bootstrap";
import PropTypes from "prop-types";

import { Columns } from "./const";

const Table = ({ className, list }) => {
  return (
    <div className={`overflow-auto container-table ${className}`}>
      <BTable bordered hover>
        <thead>
          <tr>
            <th>CAMPAIGNS NAME</th>
            <th>ACTIONS</th>
            <th>ZIP CODE</th>
            <th>BID AMOUNT</th>
            <th>WEEKLY BUDGET</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {list.map(item => {
              return Columns.map((jtem, index) => (
                <td key={index}>
                  {jtem.render ? jtem.render(item[jtem.key]) : item[jtem.key]}
                </td>
              ));
            })}
          </tr>
          <tr>
            {list.map(item => {
              return Columns.map((jtem, index) => (
                <td key={index}>
                  {jtem.render ? jtem.render(item[jtem.key]) : item[jtem.key]}
                </td>
              ));
            })}
          </tr>
          <tr>
            {list.map(item => {
              return Columns.map((jtem, index) => (
                <td key={index}>
                  {jtem.render ? jtem.render(item[jtem.key]) : item[jtem.key]}
                </td>
              ));
            })}
          </tr>
          <tr>
            {list.map(item => {
              return Columns.map((jtem, index) => (
                <td key={index}>
                  {jtem.render ? jtem.render(item[jtem.key]) : item[jtem.key]}
                </td>
              ));
            })}
          </tr>
          <tr>
            {list.map(item => {
              return Columns.map((jtem, index) => (
                <td key={index}>
                  {jtem.render ? jtem.render(item[jtem.key]) : item[jtem.key]}
                </td>
              ));
            })}
          </tr>
          <tr>
            {list.map(item => {
              return Columns.map((jtem, index) => (
                <td key={index}>
                  {jtem.render ? jtem.render(item[jtem.key]) : item[jtem.key]}
                </td>
              ));
            })}
          </tr>
          <tr>
            {list.map(item => {
              return Columns.map((jtem, index) => (
                <td key={index}>
                  {jtem.render ? jtem.render(item[jtem.key]) : item[jtem.key]}
                </td>
              ));
            })}
          </tr>
          <tr>
            {list.map(item => {
              return Columns.map((jtem, index) => (
                <td key={index}>
                  {jtem.render ? jtem.render(item[jtem.key]) : item[jtem.key]}
                </td>
              ));
            })}
          </tr>
          <tr>
            {list.map(item => {
              return Columns.map((jtem, index) => (
                <td key={index}>
                  {jtem.render ? jtem.render(item[jtem.key]) : item[jtem.key]}
                </td>
              ));
            })}
          </tr>
        </tbody>
      </BTable>
    </div>
  );
};
Table.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array
};
export default Table;
