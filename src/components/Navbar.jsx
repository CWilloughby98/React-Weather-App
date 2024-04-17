import React from "react";
import { getGreetingFromHour } from "../lib/utils";
import gear from "../assets/gear.svg"
import { useContext } from "react";
import { IsNightContext } from "../App";

const Navbar = ({props}) => {

  const isNight = useContext(IsNightContext) 

  return (
    <nav style={!isNight ? {filter:"invert(1)"} : {}} className="navbar navbar-dark bg-transparent mb-4 pt-3 ps-0 ms-4">
      <div className="container-fluid ps-0">
        <div className="d-flex flex-column">
          <span className="navbar-brand greeting p-0" href="#">
            {getGreetingFromHour(props.hour)}
          </span>
          <span className="navbar-brand fw-bold by-me" href="#">
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
                Nothing Here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
