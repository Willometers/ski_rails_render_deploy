import {useState, useEffect} from 'react'

function SkiAreaDropdown() {

    const [resorts, setResorts] = useState()

    useEffect(() => {
        fetch("/skiareas")
        .then(res => res.json())
        .then(res => setResorts(res))
      }, [])

if (!resorts)
      return (
        <div>
            <h1>Loading</h1>
        </div>
      )
      else return (
        resorts.map((area, index) => {
                return (
                    <div>
                        <li key={index}>{area.name}</li>
                    </div>
                )
            })
        )
}
  export default SkiAreaDropdown;