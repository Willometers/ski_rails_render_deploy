const TempReviewShow = (tempReview) => {
    
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: ''}}>
            <div class="card border-success mb-3" border="secondary" >
                <div class="card-body text-success">
                    <p class="card-text"> {tempReview ? tempReview.tempReview : null } </p>
                </div>
                
            </div>
        </div>
    )
}

export default TempReviewShow