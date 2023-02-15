
const ReviewShow = (review) => {
    
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: ''}}>
            <div class="card border-success mb-3" border="secondary" >
                <div class="card-body text-success">
                <p class="card-text"> {review.review.comments}</p>
                <p class="card-text"> {review.review.email}</p>
                </div>
                
            </div>
        </div>
    )
}

export default ReviewShow
