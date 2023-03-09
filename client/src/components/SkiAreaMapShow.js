// import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import RateComponent from "./RateComponent";
import WeatherTestComponent from "./WeatherTestComponent";

const SkiAreaMapShow = (area) => {

    const navigate =  useNavigate()

    if (area.area)
        return (
            <div>

                <div className="map">
                    <h1>{area.area.name}</h1>
                    <iframe title={area.area.name}
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GoogleKey}&q=${area.area.location}&zoom=8`} allowFullScreen width="700" height="575">
                    </iframe>
                    <WeatherTestComponent area={area}/>
                </div>
                <RateComponent area={area}/>
            </div>
            )
        else
        navigate('/')

}

export default SkiAreaMapShow;