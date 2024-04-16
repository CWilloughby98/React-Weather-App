import React from "react";
import { DateTime } from "luxon";


const Location = ({props}) => {

    return (
        <div className="bg-transparent text-light mx-4 mb-3">
            <div className="d-flex align-items-center gap-2">
                <img className="location-icon" src={props.icon} alt="Icono UBI" />
                <span className="fs-3">{props.location}</span>
            </div>
            <span>{DateTime.now().toFormat('MMMM dd, yyyy')}</span>
        </div>
    );
};

export default Location;