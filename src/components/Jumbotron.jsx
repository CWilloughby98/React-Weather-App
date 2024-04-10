import React from "react";


const Jumbotron = ({props}) => {
    return ( 
        <div className="bg-dark mx-4 pb-5" data-bs-theme="dark">
            <div className="d-flex justify-content-between">
                <h1 className="">{props.temp + "º"}</h1>
                <img className="jumbo-weather" src={props.icon} alt="WEATHER ICON" />
            </div>
            <h5>{props.currentWeather}</h5>
            <p>{props.description}</p>
        </div>
    )
}

export default Jumbotron;