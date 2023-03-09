import { useState, useEffect } from "react"
import WeatherCard from "./WeatherCard"
import CardGroup from 'react-bootstrap/CardGroup';
const WeatherShow = (location) => {

    let forecastURL = (location.weather.properties.forecast)
    let [forecast, setForecast] = useState([])    
    
    useEffect(() => {
        fetch(forecastURL)
        .then(res => res.json())
        .then(res => setForecast(res))
    }, [])    


    if(forecast.properties)
    return(
        
        <div>
            <CardGroup >
            {forecast.properties.periods.map((period) => {
                return (
                    <div>
                        <WeatherCard period={period} />
                    </div>
                    )
                })
            }
            </CardGroup>
        </div>
    )
    else return (
        <div>
            Loading...
        </div>
    )

}

export default WeatherShow