import ReviewShow from "./ReviewShow"

const ReviewsContainer = (resort) => {



    let resort_reviews = resort.resort.area.area.reviews

    console.log("RC_id", resort_reviews.length)


    if(resort_reviews.length < 1)
        return (
            <div>Be the First to Leave a Review</div>
        )
    else
        return(
            <div>
                {resort_reviews.map((review) =>  
                    <ReviewShow review={review}/>)}
            </div>
        )
}

export default ReviewsContainer
