import React from "react";
import { getGreetingFromHour } from "../lib/utils";
import { useContext } from "react";
import { IsNightContext } from "../App";
import gitIcon from "../assets/github.svg"

const Navbar = ({props}) => {

  const isNight = useContext(IsNightContext) 

  return (
    <nav className="navbar navbar-dark bg-transparent mb-4 pt-3 ps-0 ms-4">
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
              <button
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#aboutModal"
              >
                About
              </button>
            </li>
          </ul>
          <div
            className="modal fade mt-4"
            id="aboutModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Weather App 
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body lh-lg">This is a simple weather app that displays the current weather based on your device location.
                    <br />
                    Forecast is also displayed at the bottom of the screen for every three hours in a day, ranging up to the next 7 days. 
                    <br />
                    <br />
                    <small>Check out the code on:<a href="https://github.com/CWilloughby98/React-Weather-App"><img className="giticon mx-1" src={gitIcon} alt="" />Github</a></small>     
                </div>
                <div className="modal-footer">
                  Made with 💞 and ☕ by Charlie
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
