import { useEffect, useState } from 'react'
import ReviewsContainer from './ReviewsContainer'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'

const RateComponent = (resort) => {

    const [user, setUser] = useState([])

    useEffect(() => { 
        fetch("/me")
        .then((res) => res.json())
        .then((res) => setUser(res))
        }, [])

    const [review, setReview] = useState("")

    const handleChange = (e) => {
        setReview(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let userEmail = user.email
        let skiarea_id = resort.area.area.id
        let comments = review
        e.target.reset()
        fetch("/savereview", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                user_id: user.id,
                email: userEmail,
                skiarea_id: skiarea_id,
                comments: comments
            })
        }).then((res) => {
            if (res.ok) {
                res.json()
            } else {
                console.log("error", res.status, res.statusText)
        }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>{ user.error ? `Login/Signup to leave a review` : `Leave a review, ${user.email}` }:</label>
                <br/>
                <br/>
                <textarea onChange={handleChange} />
                <br/>
                {user.error ? <LoginButton resort={resort.area.area.id}/> : <button> Submit </button>  }
            </form >
                <br/>
                <ReviewsContainer resort={resort}/>
            {user.error ? null : <LogoutButton />}
        </div>
    )
}

export default RateComponent