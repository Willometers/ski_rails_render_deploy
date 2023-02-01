
const ReviewShow = (review) => {
    
    // maybe this data should be pulled at a higher level, made into state and passed down
    // const showUserID = () => {
    //     fetch("/users")
    //     .then((res) => res.json())
    //     .then(res => res.forEach(user => console.log("hi billy", user.email)))
    // }

    // showUserID()

    console.log("RevShow",review)

    const stars = review.review.rating*.1/2

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: ''}}>
            <div class="card border-success mb-3" border="secondary" >
                <div class="card-body text-success">
                {/* <Rating name="read-only" value={stars} readOnly /> */}
                <p class="card-text"> {review.review.comments}</p>
                <p class="card-text"> {review.review.email}</p>
                </div>
                
            </div>
        </div>
    )
}

export default ReviewShow
