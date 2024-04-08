import React from "react";

const Jumbotron = () => {
    return (
        <div className="bg-dark text-center pb-5" data-bs-theme="dark">
            <div className="d-flex">
                <h1>100º</h1>
                <img src="" alt="WEATHER ICON" />
            </div>
            <h3>Cloudy, maybe</h3>
            <p>Description weather</p>
        </div>
    )
}

export default Jumbotron;