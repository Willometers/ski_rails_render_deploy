import { useEffect, useState } from "react"

const API = "https://api.weather.gov/gridpoints/LWX/97,71/forecast"

const WeatherTestComponent = () => {

    useEffect(() => { 
        fetch(API)
        .then(res => res.json())
        .then(res => setWeather(res))
    }, [])

    const [weather, setWeather] = useState([])

    // console.log(weather.properties.periods)

    if(weather.length < 1)
        return (
            <div>
                No Weather!
            </div>
        )
    else return (
        <div>
        {weather.properties.periods.map((day, index) => {
            return (
                <div key={index}>
                    {day.detailedForecast }
                </div>
            )
       
            })}
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

