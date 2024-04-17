import { useState, useEffect, useContext, createContext } from "react";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Jumbotron from "./components/Jumbotron";
import Carrrousel from "./components/Carousel";
import { getCurrentWeather } from "./lib/apiReq";
import { getIconFomWeather, isNight } from "./lib/utils";
import locationIcon from "./assets/WeatherIcons/location.svg"
import { cities } from "./lib/data";
import { DateTime } from "luxon";
import { getCoordinates } from "./lib/coordinates";
import { Geolocation } from "@capacitor/geolocation";

export const IsNightContext = createContext(isNight(DateTime.now().hour))

function App() {
  const [weather, setWeather] = useState({})
  const [offset, setOffset] = useState(0)
  const [city, setCity] = useState(cities[3])
  const epoch = DateTime.now().toUnixInteger()
  const currHour = DateTime.fromSeconds(epoch)
  const [coordinates, setCoordinates] = useState({lat: city.lat, lon: city.lon})
  const [hasPermission, setHasPermission] = useState(undefined)

  const isAfter22 = isNight(currHour.hour)
  

  const updateCoords = async () => {
    const newCoords = await getCoordinates()
    setCoordinates(newCoords)
  }
  
  const updateWeather = async () => {
    const apiRes = await getCurrentWeather(coordinates.lat, coordinates.lon, offset)
    setWeather(apiRes)
  }

  const updatePermissions = async () => {
    const permissions = await Geolocation.checkPermissions()
    setHasPermission(permissions.location === "granted")
  }

  const handlePermissions = async () => {
    const grantedPermissions = await Geolocation.requestPermissions({permissions: [`location`]})
    console.log("Granted:", grantedPermissions)
    const granted = grantedPermissions.location === "granted"
    setHasPermission(granted)
  }


  useEffect(() => {
    updatePermissions()
  }, [])

  useEffect(() => {
    console.log("HasPermis is:", hasPermission)
    if (hasPermission === false) {
      handlePermissions()
    } if (hasPermission === true) {
      updateCoords()
    }
  }, [hasPermission])

  useEffect(() =>{
    updateWeather()
    console.log("SetCoordinates:", coordinates.lat, coordinates.lon)
  }, [offset, coordinates])


  const dayOffset = weather?.currDay?.date?.slice(5) || ""


  return (
    <IsNightContext.Provider value={isAfter22}>
      <div className={isAfter22 ? "poster-night" : "poster-day"}>
        <div className="vw-100 vh-100" >
          <Navbar props={{hour: currHour.hour}} />
          {/* {coordinates.lat} {coordinates.lon} */}
          <Location props={{icon: locationIcon, location: weather.location}} />
          <Jumbotron props={{icon: getIconFomWeather(weather.currentWeather, isAfter22), temp: weather.temp, description: "", currentWeather: weather.currentWeather}}/>
          <div  className="pt-4 mb-3 d-flex justify-content-between align-items-center px-4">
            <div className="d-flex gap-2">
              <button 
                    onClick={() => setOffset(offset > 0 ? (prevVal) => prevVal - 1 : offset)}
                    className={`btn fw-bold ${!isAfter22 ? "btn-outline-dark" : "btn-outline-light"}`}
                    disabled = {offset === 0}
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide="next"
                    >
                  <span>Prev Day </span>
              </button>
              <button
                    onClick={() => setOffset((prevVal) => prevVal + 1)}
                    className={`btn fw-bold ${!isAfter22 ? "btn-outline-dark" : "btn-outline-light"}`}
                    type="button"
                    data-bs-target="#carousel"
                    data-bs-slide="next"
                    >
                <span>Next Day</span>
              </button>
            </div>
            <div className={`fs-4 fw-bold ${!isAfter22 ? "text-dark" : "text-light"}`}>
              {dayOffset}
            </div>
          </div>
          <Carrrousel props={{hours: weather.hourlyWeather || []}} />
        </div>
      </div>
    </IsNightContext.Provider>
  );
}

//TODO
//Make an About Modal with stuff
//Brief description based on weather condition (maybe)

export default App;
