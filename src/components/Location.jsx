import React from "react";
import { DateTime } from "luxon";


const Location = () => {
    return (
        <div className="bg-dark text-light text-center">
            <div>
                <img src="" alt="Icono UBI" />
                <p>SOMEWHERE</p>
            </div>
            <span>{DateTime.now().toFormat('MMMM dd, yyyy')}</span>
        </div>
    );
};

export default Location;