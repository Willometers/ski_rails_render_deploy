class SkiareasController < ApplicationController

    def index 
        render json: SkiArea.all, include: :reviews
    end

    def show
        render json: SkiArea.find(params[:id]), include: :reviews
    end

end

