import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"

const SkiAreaDropdown = ({handleArea}) => {

    const [resorts, setResorts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:3000/skiareas")
        .then(res => res.json())
        .then(res => setResorts(res))
      }, [])

    const handleClick = (e) => {
        e.preventDefault()
        handleArea(e.target.value)
        console.log("click", e.target.value)
        navigate("/show")
    }

if (!resorts)
    return (
        <div>
            <h1>Loading</h1>
        </div>
    )
    else return (
        resorts.map((area, index) => {
            return (
                <div key={index}>
                    <br/>
                    <button onClick={handleClick} value={area.location}>{area.name}</button>
                    <br/>
                </div>
            )
        })
    )

}
  export default SkiAreaDropdown;