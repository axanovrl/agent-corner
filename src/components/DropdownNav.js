import React from "react";
import { Link } from "react-router-dom";

const DropdownNav = () => {
  return (
    <>
      <div className="dropdown">
        <Link
          to="#"
          className="dropdown-toggle nav-link"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src="/img/avatar_mini.png"
            width="30px"
            height="30px"
            id="h-mini-avatar"
            alt="avatar"
          />
          <span className="text-white">Jeffery</span>
        </Link>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="">
          <Link to="/settings" className="dropdown-item">
            Settings
          </Link>
          <div className="dropdown-divider" role="separator" />
          <Link to="#" className="dropdown-item">
            Log out
          </Link>
        </div>
      </div>
    </>
  );
};

export default DropdownNav;
