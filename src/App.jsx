import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Jumbotron from "./components/Jumbotron";
import Carrrousel from "./components/Carousel";
import { getCurrentWeather } from "./lib/apiReq";
import cloudy from "./assets/WeatherIcons/cloud.svg"
import locationIcon from "./assets/WeatherIcons/location.svg"
import { cities } from "./lib/data";


function App() {
  const [weather, setWeather] = useState({})
  const [offset, setOffset] = useState(0)
  const [city, setCity] = useState(cities[1])

  const updateWeather = async () => {
    const apiRes = await getCurrentWeather(city.lat, city.lon, offset)
    setWeather(apiRes)
  }

  useEffect(() =>{
    updateWeather()
  }, [offset])
  
  
  return (
    <div className="vw-100 vh-100">
      <Navbar />
      <Location props={{icon: locationIcon, location: city.name}} />
      <Jumbotron props={{icon: cloudy, temp: weather.temp, description: "A lo mejor lleve, o no...", currentWeather: weather.currentWeather}}/>
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
            onClick={() => setOffset((prevVal) => prevVal - 1)}
            className="btn "
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
            >
                <span>{"<"}= Prev Day </span>
      </button>
      <Carrrousel props={{hours: weather.hourlyWeather || []}} />
    </div>
  );
}

export default App;
