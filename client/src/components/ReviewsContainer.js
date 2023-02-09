import { useEffect, useState } from "react"
import ReviewShow from "./ReviewShow"

const ReviewsContainer = (resort) => {

    const [reviews, setReviews] = useState([])

    useEffect(() => { 
        fetch(`/skiareas/${resort.resort.area.area.id}`)
        .then((res) => res.json())
        .then((res) => setReviews(res.reviews))
    }, [])

    if(reviews.length < 1)
        return (
            <div>Be the First to Leave a Review</div>
        )
    else
        return(
            <div>
                {reviews.map((review) =>  
                    <ReviewShow review={review}/>)}
            </div>
    )
}

export default ReviewsContainer
