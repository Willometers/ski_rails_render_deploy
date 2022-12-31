class LocationsController < ApplicationController

    # "/save"
    def create
        if session[:user_id]
            # user_id = session[:user_id]
            # byebug
            location = Location.create(location_params)
            render json: location, status: :created
        else
            render json: { error: "Must Log In" }, status: :unauthorized
        end
    end

    # "/delete"
    def destroy
        # byebug
        location = Location.find(params[:id])
        location.delete
        head :no_content
    end

    def index
        locations = Location.all
        render json: locations
    end

    private 

    def location_params
        params.permit(:user_id, :location, :lat, :lon)
    end

end