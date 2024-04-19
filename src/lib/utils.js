import sun from "../assets/WeatherIcons/sun.svg"
import cloud from "../assets/WeatherIcons/cloud.svg"
import cloudmoon from "../assets/WeatherIcons/cloudmoon.svg"
import cloudrainwind from "../assets/WeatherIcons/cloudrainwind.svg"
import cloudsun from "../assets/WeatherIcons/cloudsun.svg"
import cloudsunrain from "../assets/WeatherIcons/cloudsunrain.svg"
import moon from "../assets/WeatherIcons/moon.svg"
import rainy from "../assets/WeatherIcons/rainy.svg"
import rainymoon from "../assets/WeatherIcons/rainymoon.svg"
import snowy from "../assets/WeatherIcons/snowy.svg"
import stormy from "../assets/WeatherIcons/stormy.svg"
import windyrain from "../assets/WeatherIcons/windyrain.svg"

const weatherIcons = {
    day: {
        Sunny: sun,
        Clear: moon,
        "Partly cloudy": cloudsun,
        Overcast: cloud,
        Mist: cloud,
        "Patchy rain possible": cloudsunrain,
        "Patchy snow possible": snowy,
        "Patchy sleet possible": snowy,
        "Patchy freezing drizzle possible": windyrain,
        "Thundery outbreaks possible": stormy,
        "Blowing snow": snowy,
        Blizzard: snowy,
        Fog: cloud,
        "Freezing fog": cloud,
        "Patchy light drizzle": cloudsunrain,
        "Light drizzle": cloudsunrain,
        "Freezing drizzle": rainymoon,
        "Heavy freezing drizzle": snowy,
        "Patchy light rain": cloudsunrain,
        "Light rain": rainy,
        "Moderate rain at times": rainy,
        "Moderate rain": rainy,
        "Heavy rain at times": cloudrainwind,
        "Heavy rain": cloudrainwind,
        "Light freezing rain": windyrain,
        "Moderate or heavy freezing rain": windyrain,
        "Light sleet": snowy,
        "Moderate or heavy sleet": snowy,
        "Patchy light snow": cloud,
        "Light snow": snowy,
        "Patchy moderate snow": snowy,
        "Moderate snow": snowy,
        "Patchy heavy snow": snowy,
        "Heavy snow": snowy,
        "Ice pellets": snowy,
        "Light rain shower": cloudsunrain,
        "Moderate or heavy rain shower": rainy,
        "Torrential rain shower": windyrain,
        "Light sleet showers": cloudsunrain,
        "Moderate or heavy sleet showers": rainy,
        "Light snow showers": snowy,
        "Moderate or heavy snow showers": snowy,
        "Light showers of ice pellets": snowy,
        "Moderate or heavy showers of ice pellets": snowy,
        "Patchy light rain with thunder": windyrain,
        "Moderate or heavy rain with thunder": stormy,
        "Patchy light snow with thunder": windyrain,
        "Moderate or heavy snow with thunder": stormy,
    },
    night: {
        Clear: moon,
        "Partly cloudy": cloudmoon,
        Overcast: cloudmoon,
        Mist: cloud,
        "Patchy rain possible": cloudmoon,
        "Patchy snow possible": snowy,
        "Patchy sleet possible": snowy,
        "Patchy freezing drizzle possible": windyrain,
        "Thundery outbreaks possible": stormy,
        "Blowing snow": snowy,
        Blizzard: snowy,
        Fog: cloud,
        "Freezing fog": cloud,
        "Patchy light drizzle": cloudmoon,
        "Light drizzle": cloudmoon,
        "Freezing drizzle": rainymoon,
        "Heavy freezing drizzle": snowy,
        "Patchy light rain": cloudmoon,
        "Light rain": rainymoon,
        "Moderate rain at times": rainymoon,
        "Moderate rain": rainymoon,
        "Heavy rain at times": cloudrainwind,
        "Heavy rain": cloudrainwind,
        "Light freezing rain": windyrain,
        "Moderate or heavy freezing rain": windyrain,
        "Light sleet": snowy,
        "Moderate or heavy sleet": snowy,
        "Patchy light snow": cloudmoon,
        "Light snow": snowy,
        "Patchy moderate snow": snowy,
        "Moderate snow": snowy,
        "Patchy heavy snow": snowy,
        "Heavy snow": snowy,
        "Ice pellets": snowy,
        "Light rain shower": cloudmoon,
        "Moderate or heavy rain shower": rainymoon,
        "Torrential rain shower": windyrain,
        "Light sleet showers": cloudmoon,
        "Moderate or heavy sleet showers": rainy,
        "Light snow showers": snowy,
        "Moderate or heavy snow showers": snowy,
        "Light showers of ice pellets": snowy,
        "Moderate or heavy showers of ice pellets": snowy,
        "Patchy light rain with thunder": windyrain,
        "Moderate or heavy rain with thunder": stormy,
        "Patchy light snow with thunder": windyrain,
        "Moderate or heavy snow with thunder": stormy,
    },
};

const greetings = {
    morning: "Good Morning",
    evening: "Good Evening",
    night: "Good Night"
}

export const isNight = (currentHour) => currentHour <= 8 || currentHour >= 21

export const getIconFomWeather = (weather = "cloud", isNight) => {
    const icons = isNight ? weatherIcons.night : weatherIcons.day;
    return icons[weather.trim()] || cloud;
};

export const getGreetingFromHour = (hour) => {
    if (hour >= 12 && hour < 21) {
        return greetings.evening
    } else if (isNight(hour)) {
        return greetings.night
    } else return greetings.morning
}