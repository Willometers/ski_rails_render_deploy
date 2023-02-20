import { useEffect, useState } from "react"

const API = "https://api.weather.gov/gridpoints/LWX/97,71/forecast"

const WeatherTestComponent = () => {

    useEffect(() => { 
        fetch(API)
        .then((res) => res.json())
        .then((res) => setWeather(res))
    }, [])

    const [weather, setWeather] = useState([])

    if(weather.length > 1 )
        console.log(weather)

    return (
        <div>
       
        </div>
    )
}

export default WeatherTestComponent