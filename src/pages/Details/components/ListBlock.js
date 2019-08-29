import React from "react";
import ListGroupItem from "./ListGroupItem";
import PropTypes from "prop-types";

const ListBlock = ({ className, list, title }) => (
  <div className={`block-list ${className}`}>
    <div className={`card-header bg-dark d-flex ${className}`}>
      <h6 className={`ac-text-16 font-weight-bold text-white ${className}`}>
        {title}
      </h6>
    </div>
    <div className={`card-body ${className}`}>
      <div className={`list-group ${className}`}>
        {list.map((item, index) => {
          return (
            <div key={index} className={`list-group-item ${className}`}>
              <ListGroupItem label={item.label} span={item.span} />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
ListBlock.propTypes = {
  className: PropTypes.string,
  list: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
};
export default ListBlock;
