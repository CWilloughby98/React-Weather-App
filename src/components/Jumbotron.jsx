import React from "react";
import { getIconFomWeather } from "../lib/utils";

const Jumbotron = ({props}) => {
    return ( 
        <div className="bg-transparent mx-4 py-4 mb-5" data-bs-theme="dark">
            <div className="d-flex justify-content-between">
                <h1 className="jumbo-temp mb-0 fw-bold">{props.temp + "º"}</h1>
                <img className="jumbo-weather" src={props.icon} alt="WEATHER ICON" />
            </div>
            <h5 className="fw-bold">{props.currentWeather}</h5>
            <p>{props.description}</p>
        </div>
    )
}

export default Jumbotron;