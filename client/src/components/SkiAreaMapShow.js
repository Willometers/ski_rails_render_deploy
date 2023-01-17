// import { useEffect, useState } from "react"

const SkiAreaMapShow = (area) => {

// disabled API call for deployment
//     const [weather, setWeather] = useState([])

//  useEffect(() => { 
//     fetch(`api.openweathermap.org/data/2.5/forecast?lat=40&lon=70&appid=df04f8f295a07e29b7ee1a31a3dfeaeb`)
//     .then(res => res.json())
//     .then(res => console.log(res))
//  }, [])

    if (area.area)
        return (
            <div>
                <div className="map">
                    <iframe
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GoogleKey}&q=${area.area}&zoom=8`} allowFullScreen width="700" height="575">
                    </iframe>
                </div>
            </div>
            )
        else
        return (
            <div>Loading</div>
            )

}

export default SkiAreaMapShow;