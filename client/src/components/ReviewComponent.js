import React, { useState } from 'react'
// import { Rating } from 'react-simple-star-rating'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
import ReviewsContainer from './ReviewsContainer'


const RateComponent = (resort) => {

    // I think i need to change state at a higher level to trigger the change upon comment submission
    // const user_info = useSelector(state => state.location)
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState("")
    // const dispatch = useDispatch()
    const [user_info, setUser_info] = useState([])

    const handleRating = (e) => {
        setRating(e)
    }

    const handleChange = (e) => {
        setReview(e.target.value)
    }

    const handleSubmit = (e) => {
        let user = user_info[0].id
        // console.log("comment submitted", user_info[0].email)
        let userEmail = user_info[0].email
        let ski_area_id = resort.resort.id
        let stars = rating
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
                rating: stars,
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
            {/* < Rating
                onClick={handleRating}
                size={20}
                label
                transition
                fillColor='orange'
                emptyColor='gray'
                className='foo' // Will remove the inline style if applied
                /> */}
                <br/>
                <br/>
            {/* {user_info[0].error ? <div><h8>Log in or Sign up to Leave Review</h8><br/><br/><button disabled >Submit</button></div> : <button>Submit</button>  } */}
            </form >
                <br/>
                <ReviewsContainer resort={resort.resort}/>
        </div>
    )
}

export default RateComponent