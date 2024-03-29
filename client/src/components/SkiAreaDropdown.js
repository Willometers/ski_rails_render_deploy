import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"

const SkiAreaDropdown = ({handleArea}) => {

    const [resorts, setResorts] = useState([])
    console.log(resorts)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/skiareas")
        .then(res => res.json())
        .then(res => setResorts(res))
      }, [])

    //   use area.id to set the skiarea object as a prop
    const handleClick = (e) => {
        e.preventDefault()
        let resort = e.target.value
        fetch(`/skiareas/${resort}`)
        .then((res) => res.json())
        .then(res => handleArea(res))
        .then(navigate("/show"))
    }

if (!resorts)
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
    else return (
        <div>
            <h1>New York State Ski Areas</h1>
            {resorts.map((area, index) => {
            return (
                <div key={index}>
                    <br/>
                    <button onClick={handleClick} value={area.id}>{area.name}</button>
                    <br/>
                </div>
            )
       
            })}
         </div>
    )

}
  export default SkiAreaDropdown;
