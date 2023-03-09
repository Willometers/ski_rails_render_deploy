import { useState, useEffect } from "react"

const WeatherShow = (location) => {

    let forecastURL = (location.weather.properties.forecast)
    let [forecast, setForecast] = useState([])    
    
    useEffect(() => {
        fetch(forecastURL)
        .then(res => res.json())
        .then(res => setForecast(res))
    }, [])    

    console.log("WS", forecast)

    return (
        <div>
            Hi
        </div>
    )


}

export default WeatherShow