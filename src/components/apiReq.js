
export const getCurrentWeather = async (lat, lon) => {

    const weatherRequest = new Request("https://api.weatherbit.io/v2.0/current?lat=51.5072&lon=-0.1276&key=d84628a23d0444d99a6ef8884b246c1e&include=minutely")
    
    const response = await fetch(weatherRequest)
    const jsonRes = await response.json()
    console.log(jsonRes)

    return {
        location: jsonRes.data[0].city_name,
        currentWeather: jsonRes.data[0].weather.description,
        temp: 22,
        hourlyWeather: [{hour:"12pm", weather:"Cloudy", temp:20},{hour:"16pm", weather:"Sunny", temp:27}],
        dailyWeather: [{hour:"12pm", weather:"Cloudy", temp:19},{hour:"14pm", weather:"Rainy", temp:11}]
    }
}