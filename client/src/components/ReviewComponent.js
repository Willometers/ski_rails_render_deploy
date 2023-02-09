import React, { useState } from 'react'
import ReviewsContainer from './ReviewsContainer'

const RateComponent = (resort) => {

    const [review, setReview] = useState("")

    const handleChange = (e) => {
        setReview(e.target.value)
    }

    console.log("RevComp", resort)

    const handleSubmit = (e) => {
        let user = user_info[0].id
        let userEmail = user_info[0].email
        let ski_area_id = resort.resort.id
        let comments = review
        e.preventDefault()
        e.target.reset()
        fetch("/savereview", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                user_id: user,
                email: userEmail,
                ski_area_id: ski_area_id,
                comments: comments
            })
        }).then((res) => {
            if (res.ok) {
                res.json()
                // console.log("user:", user)
            } else {
                // res.json().then((res) => dispatch(addErrors(res)))
                // console.log("error", res.status, res.statusText)
        }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Review:</label>
                <br/>
            <textarea onChange={handleChange} />
                <br/>
            </form >
                <br/>
                <ReviewsContainer resort={resort.resort}/>
        </div>
    )
}

export default RateComponent