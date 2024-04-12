import React from "react";
import { DateTime } from "luxon";


const Location = ({props}) => {
    let currTime = DateTime.now().toISOTime()

    //console.log(currTime)
    // at 2:02 it displays => 02:02:35.537 + 02:00

    return (
        <div className="bg-dark text-light mx-4 mb-3">
            <div>
                <img className="location-icon" src={props.icon} alt="Icono UBI" />
                <span>{props.location}</span>
            </div>
            <span>{DateTime.now().toFormat('MMMM dd, yyyy')}</span>
        </div>
    );
};

export default Location;