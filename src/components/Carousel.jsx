import React from "react";

const Carousel = ({props}) => {
    return (
        <div id="carousel" className="carousel slide pt-3">
            <button
            className="btn "
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
            >
                <span>Next Day ={">"} </span>
            </button>
            <div className="card-array d-flex overflow-x-scroll">
                <div className="d-flex">
                    <div className="card p-3 ms-3" >
                        <div className="card-body text-center">
                            <img src={props.icon} className="card-weather" alt="Weather Icon"/>
                            <p className="card-text">{props.hour}</p>
                            <p className="card-text">{props.temp}</p>
                        </div>
                    </div>
                </div>
                {/* <div className="d-flex">
                    <div className="card p-3 ms-3" >
                        <div className="card-body text-center">
                            <img src="..." className="" alt="Weather Icon"/>
                            <p className="card-text">Hour</p>
                            <p className="card-text">Temp</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card p-3 ms-3" >
                        <div className="card-body text-center">
                            <img src="..." className="" alt="Weather Icon"/>
                            <p className="card-text">Hour</p>
                            <p className="card-text">Temp</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card p-3 ms-3" >
                        <div className="card-body text-center">
                            <img src="..." className="" alt="Weather Icon"/>
                            <p className="card-text">Hour</p>
                            <p className="card-text">Temp</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Carousel