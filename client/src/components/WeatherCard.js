import {Card, Button} from 'react-bootstrap';

const WeatherCard = (period) => {


    return (
        <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src={period.period.icon} />
            <Card.Body>
                <Card.Title>{period.period.name}</Card.Title>
                <Card.Text>
                    {period.period.shortForecast}
                </Card.Text>
                <Card.Text>
                    {period.period.temperature} degrees
                </Card.Text>
            </Card.Body>
        </Card>

    )

}

export default WeatherCard

{/* <div>
            <img src={period.period.icon} ></img>
            <p>{period.period.name}: {period.period.shortForecast}, {period.period.temperature}</p>
        </div> */}