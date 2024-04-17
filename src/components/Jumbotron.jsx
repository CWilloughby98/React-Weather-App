import React from "react";
import { useContext } from "react";
import { IsNightContext } from "../App";

const Jumbotron = ({props}) => {

    const isNight = useContext(IsNightContext) 

    return ( 
        <div style={!isNight ? {filter:"invert(1)"} : {}} className="bg-transparent mx-4 py-4 mb-5" data-bs-theme="dark">
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