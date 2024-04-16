import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Jumbotron from "./components/Jumbotron";
import Carrrousel from "./components/Carousel";
import { getCurrentWeather } from "./lib/apiReq";
import { getIconFomWeather } from "./lib/utils";
import locationIcon from "./assets/WeatherIcons/location.svg"
import { cities } from "./lib/data";
import { DateTime } from "luxon";
import { getCoordinates } from "./lib/coordinates";
import day from "./assets/day.png"
import night from "./assets/night.png"


function App() {
  const [weather, setWeather] = useState({})
  const [offset, setOffset] = useState(0)
  const [city, setCity] = useState(cities[3])
  const epoch = DateTime.now().toUnixInteger()
  const currHour = DateTime.fromSeconds(epoch)
  const [coordinates, setCoordinates] = useState({lat: city.lat, lon: city.lon})

  const updateWeather = async () => {
    const apiRes = await getCurrentWeather(coordinates.lat, coordinates.lon, offset)
    setWeather(apiRes)
  }

  const updateCoords = async () => {
    setCoordinates(await getCoordinates())
  }


  useEffect(() => {
    updateCoords()
  }, [])

  useEffect(() =>{
    updateWeather()
  }, [offset, coordinates])
  
  const dayOffset = weather?.currDay?.date?.slice(5) || ""


  return (
    <div className={currHour.hour <= 8 || currHour.hour > 21 ? "poster-night" : "poster-day"}>
      <div className="vw-100 vh-100" >
        <Navbar props={{hour: currHour}} />
        {/* {coordinates.lat} {coordinates.lon} */}
        <Location props={{icon: locationIcon, location: weather.location}} />
        <Jumbotron props={{icon: getIconFomWeather(weather.currentWeather, currHour.hour <= 8 || currHour.hour > 21), temp: weather.temp, description: "", currentWeather: weather.currentWeather}}/>
        <div className="pt-4 mb-3 d-flex justify-content-between align-items-center px-4">
          <div className="d-flex gap-2">
            <button
                  onClick={() => setOffset(offset > 0 ? (prevVal) => prevVal - 1 : offset)}
                  className="btn btn-outline-light"
                  disabled = {offset === 0}
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="next"
                  >
                <span>Prev Day </span>
            </button>
            <button
                  onClick={() => setOffset((prevVal) => prevVal + 1)}
                  className="btn btn-outline-light"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="next"
                  >
              <span>Next Day</span>
            </button>
          </div>
          <div className="fw-bold fs-4 ">
            {dayOffset}
          </div>
        </div>
        {/* Como no se carga el resultado de la api antes del render de la pagina, le ponemos un array vacio para que no dé error */}
        <Carrrousel props={{hours: weather.hourlyWeather || []}} />
      </div>
    </div>
  );
}

//TODO
//Make an About Modal with stuff
//Brief description based on weather condition (maybe)
//text color change depending on time

export default App;
