
export const getCurrentWeather = async (lat, lon) => {

    const forecastRequest = new Request("https://api.weatherapi.com/v1/forecast.json?key=9768c0bf903c414e878221051241004&q=39.469908,-0.376288&days=6&aqi=no&alerts=no")
    const forecastResponse = await fetch(forecastRequest)
    const jsonForecast = await forecastResponse.json()

    //Dont need this one, forecast also displays currentWeather
    const weatherRequest = new Request("https://api.weatherapi.com/v1/current.json?key=9768c0bf903c414e878221051241004&q=39.469908,-0.376288&aqi=no")
    const response = await fetch(weatherRequest)
    const jsonRes = await response.json()
    // console.log(jsonRes)
    // console.log(jsonForecast.forecast.forecastday[0].hour[0].time)

    return {
        location: jsonRes.location.name,
        currentWeather: jsonRes.current.condition.text,
        temp: jsonRes.current.temp_c,
        hourlyWeather: [{hour: jsonForecast.forecast.forecastday[0].hour[0].time, weather:"Cloudy", temp: jsonForecast.forecast.forecastday[0].hour[0].temp_c+"º"}],
        dailyWeather: [{hour:"12pm", weather:"Cloudy", temp:19},{hour:"14pm", weather:"Rainy", temp:11+"º"}]
    }
}

// TODO 
//new function to get 7 days forecast to display the forecast of each day, every 4(?) hours.
// New request will contain jsonRes.forecast.forecastday[0].date, (0 will be current day, 1 next day, etc.)
// position 6 will be in the next 6 days)].date/

//get and set default location based on device
//get geolocation based on the name of a city and send it to the forecastRequest as variable