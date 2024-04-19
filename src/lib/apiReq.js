import { DateTime } from "luxon";

export const getCurrentWeather = async (lat, lon, offset = 0) => {

    const forecastRequest = new Request(`https://api.weatherapi.com/v1/forecast.json?key=9b5cda3715184513b5d155619241504&q=${lat},${lon}&days=7&aqi=no&alerts=no`)
    const forecastResponse = await fetch(forecastRequest).catch(e => console.log(e))
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
            return {hour: date.hour, weather, temp}
        }),
        currDay,
        daysArr: jsonForecast.forecast.forecastday
    }
}
