import { useState, useEffect, useRef, createContext } from "react";
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
    //console.log("Granted:", grantedPermissions)
    const granted = grantedPermissions.location === "granted"
    setHasPermission(granted)
  }
  
  
  useEffect(() => {
    updatePermissions()
  }, [])
  
  useEffect(() => {
    //console.log("HasPermis is:", hasPermission)
    if (hasPermission === false) {
      handlePermissions()
    } if (hasPermission === true) {
      updateCoords()
    }
  }, [hasPermission])
  
  useEffect(() =>{
    updateWeather()
    //console.log("SetCoordinates:", coordinates.lat, coordinates.lon)
  }, [offset, coordinates])
  
  
  const dayOffset = weather?.currDay?.date?.slice(5) || ""
  
  const handleNextDay = () => {
    setOffset(prevVal => (prevVal + 1) % weather.daysArr.length);
  }
  const handleNextDayClick = () => {
    handleNextDay()
  }

  const handlePrevDay = () => {
    setOffset(offset > 0 ? (prevVal) => prevVal - 1 : offset)
  }
  const handlePrevDayClick = () => {
    handlePrevDay()
  }

  return (
    <IsNightContext.Provider value={isAfter22}>
      <div className={isAfter22 ? "poster-night" : "poster-day"}>
        <div className="vw-100 vh-100" >
          <Navbar props={{hour: currHour.hour}} />
          {/* {coordinates.lat} {coordinates.lon} */}
          <Location props={{icon: locationIcon, location: weather.location}} />
          <Jumbotron props={{icon: getIconFomWeather(weather.currentWeather, isAfter22), temp: weather.temp, description: "", currentWeather: weather.currentWeather}}/>
          <div className="pt-4 mb-3 d-flex justify-content-center px-4">
            <div className="d-flex gap-3 justify-content-center px-3">
              <button 
                    onClick={handlePrevDayClick}
                    className={`btn fw-bold btn-outline-light`}
                    style={{ width: "100px" }}
                    disabled = {offset === 0}
                    type="button"
                    >
                  <span>Prev Day</span>
              </button>
              <div style={{ width: "100px" }} className={`fs-4 fw-bold text-light text-center align-self-center`}>
                {dayOffset}
              </div>
              <button
                    onClick={handleNextDayClick}
                    className={`btn fw-bold btn-outline-light`}
                    style={{ width: "100px" }}
                    disabled = {offset === (6)}
                    type="button"
                    >
                <span>Next Day</span>
              </button>
            </div>
          </div>
          <Carrrousel props={{hours: weather.hourlyWeather || []}} />
        </div>
      </div>
    </IsNightContext.Provider>
  );
}

//TODO
//If Location is not on, open modal asking to turn on.

export default App;
