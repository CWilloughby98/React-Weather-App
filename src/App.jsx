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
  

  return (
    <div className="vw-100 vh-100">
      <Navbar props={{hour: currHour}} />
      {coordinates.lat} {coordinates.lon}
      <Location props={{icon: locationIcon, location: weather.location}} />
      <Jumbotron props={{icon: getIconFomWeather(weather.currentWeather), temp: weather.temp, description: "A lo mejor llueve, o no...", currentWeather: weather.currentWeather}}/>
      <button
            onClick={() => setOffset((prevVal) => prevVal + 1)}
            className="btn "
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
            >
        <span>Next Day ={">"} </span>
      </button>
      <button
            onClick={() => setOffset(offset > 0 ? (prevVal) => prevVal - 1 : offset)}
            className="btn "
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
            >
          <span>{"<"}= Prev Day </span>
      </button>
      {/* Como no se carga el resultado de la api antes del render de la pagina, le ponemos un array vacio para que no dé error */}
      <Carrrousel props={{hours: weather.hourlyWeather || []}} />
    </div>
  );
}

export default App;
