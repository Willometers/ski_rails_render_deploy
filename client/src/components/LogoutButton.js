import React from "react"
import { Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const LogoutButton = (user) => {

    // const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const handleSubmit = () => {
        fetch("/logout", {
            method: 'DELETE', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({user_id : user.id})
        }).then((res) => {
            if (res.ok) {
                console.log("loggedout")
                // navigate("/")
            } else {
                res.json().then((res) => setErrors(res))
                console.log("error logout", res.status, res.statusText)
            }
        })
    }

        return (
            <div>
                <Button onClick={handleSubmit}>Logout</Button>
                <br/>
            </div>
        )
    
}

export default LogoutButton