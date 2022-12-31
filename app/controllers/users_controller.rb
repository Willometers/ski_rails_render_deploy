class UsersController < ApplicationController

     # "/signup" if no "/me" present show login/signup component
     def create
        user = User.create(user_params)
        # byebug
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        users = User.all
        render json: users, include: :reviews
    end

    # "/me" let's us know if a user is loggen in 
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, include: :locations
        else
            render json: { error: "Not Authorized" }, status: :unauthorized
        end
    end

    private 

    def user_params
        params.permit(:email, :password)
    end

end
