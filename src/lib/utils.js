import sun from "../assets/WeatherIcons/sun.svg"
import cloud from "../assets/WeatherIcons/cloud.svg"


export const getIconFomWeather = ( weather ) => {

    switch ( weather ) {
        case "Sunny":
            return sun
        default:
            return cloud
    }

}