class ReviewsController < ApplicationController

    def create
        # debugger
        post = Review.create(reviews_params)
        render json: post
    end

    def index 
        render json: Review.all
    end

    def show
        render json: Review.find(params[:id])
    end

    private 

    def reviews_params
        params.permit(:user_id, :email, :skiarea_id, :comments)
    end

end
