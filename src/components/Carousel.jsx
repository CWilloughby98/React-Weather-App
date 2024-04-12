import React from "react";
import { getIconFomWeather } from "../lib/utils";


const Carousel = ({props}) => {
    return (
        <div id="carousel" className="carousel slide pt-3">
            <div className="card-array d-flex overflow-x-scroll">
                <div className="d-flex">
                {props.hours.map((elem, index) => 
                    (<div key={index} className="card p-3 ms-3" >
                        <div className="card-body text-center">
                            <img src={getIconFomWeather(elem.weather)} className="card-weather" alt="Weather Icon"/>
                            <p className="card-text">{elem.hour}</p>
                            <p className="card-text">{elem.temp + "º"}</p>
                        </div>
                    </div>)
                )}
                </div>
            </div>
        </div>
    );
}

export default Carousel