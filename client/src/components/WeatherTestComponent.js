import { useEffect, useState } from "react"
import WeatherShow from "./WeatherShow"

const WeatherTestComponent = (area) => {

    console.log(area.area.area.lat)

    const API = `https://api.weather.gov/points/${area.area.area.lat},-${area.area.area.lon}`

    const [weather, setWeather] = useState([])

    useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then(res => setWeather(res))
    }, [])

    // useEffect(() => { 
    //     fetch(weather.properties.forecast)
    //     .then(res => res.json())
    //     .then(res => setForecast(res))
    // }, [])
    // render this in new component bc has to double fetch 
    
    
    if(weather.length < 1)
        return (
        <div>
            No Weather!
        </div>
    )
    else return (
        <div>
            <WeatherShow weather={weather}/>
        </div>
    )
}

export default WeatherTestComponent


// need to convert zip code into coordinates then feed that to fetch requeast in weather assembly
// plan on showing temps, precip... and anything else?

// weather.properties.periods[0].detailedForecast  gives full description
// weather.properties.periods[0].shortForecast     gives short description
// weather.properties.periods[0].icon              gives link to icon/image
// weather.properties.periods[0].name              gives name description of day AM and PM of each day
// weather.properties.periods[0].temperature       gives temp
// weather.properties.periods[0].temperatureUnit   gives unit of measure
// weather.properties.periods[0].probabilityOfPrecipitation.value  gives percent chance of precip

