import React from "react";
import { getGreetingFromHour } from "../lib/utils";

const Navbar = ({props}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex flex-column">
          <span className="navbar-brand" href="#">
            {getGreetingFromHour(props.hour)}
          </span>
          <span className="navbar-brand fw-bold fs-6" href="#">
            By Charlie
          </span>
        </div>
        <div className="btn-group dropdown">
          <button
            type="button"
            className="btn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
