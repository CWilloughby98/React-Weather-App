import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Jumbotron from "./components/Jumbotron";
import Carrrousel from "./components/Carousel";
import { getCurrentWeather } from "./components/apiReq";
import cloudy from "./assets/WeatherIcons/cloud.svg"
import locationIcon from "./assets/WeatherIcons/location.svg"


function App() {
  const [weather, setWeather] = useState({})

  const updateWeather = async () => {
    const apiRes = await getCurrentWeather(1, 2)
    setWeather(apiRes)
  }

  useEffect(() =>{
    updateWeather()
  }, [])

  console.log(weather)
  
  return (
    <div className="vw-100 vh-100">
      <Navbar />
      <Location props={{icon: locationIcon, location: weather.location}} />
      <Jumbotron props={{icon: cloudy, temp: weather.temp, description: "A lo mejor lleve, o no...", currentWeather: weather.currentWeather}}/>
      <Carrrousel />
    </div>
  );
}

export default App;
