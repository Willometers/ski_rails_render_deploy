

const  SkiAreaShow = (area) => {

    console.log("show", area.area)
    

    if (area.area)
    return (
        <div>
            <h1>{area.area}</h1>
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

export default SkiAreaShow;