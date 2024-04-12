import { DateTime } from "luxon";

export const getCurrentWeather = async (lat, lon, offset = 0) => {

    const forecastRequest = new Request(`https://api.weatherapi.com/v1/forecast.json?key=5c3ad1357a644b43b86152018241204&q=${lat},${lon}&days=6&aqi=no&alerts=no`)
    const forecastResponse = await fetch(forecastRequest)
    const jsonForecast = await forecastResponse.json()
    console.log({jsonForecast})

    const currDay = jsonForecast.forecast.forecastday[offset]
    const everyThreeHours = currDay.hour.filter((_elem, index) => index % 3 === 0)


    return {
        location: jsonForecast.location.name,
        currentWeather: jsonForecast.current.condition.text,
        temp: jsonForecast.current.temp_c,
        hourlyWeather: everyThreeHours.map((elem) => {
            const date = DateTime.fromSeconds(elem.time_epoch)
            const weather = elem.condition.text
            const temp = elem.temp_c
            return {hour: `${date.toFormat("h")} ${date.hour > 12 ? "pm" : "am"}`, weather, temp}
        })
    }
}

// TODO 
// new function to get 7 days forecast to display the forecast of each day, every 3(?) hours.
// New request will contain jsonRes.forecast.forecastday[0].date, (0 will be current day, 1 next day, etc.)
// position 6 will be in the next 6 days)].date/

//get and set default location based on device
//get geolocation based on the name of a city and send it to the forecastRequest as variable