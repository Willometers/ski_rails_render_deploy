class SkiareasController < ApplicationController

    def index 
        render json: Skiarea.all, include: :reviews
    end

    def show
        render json: Skiarea.find(params[:id]), include: :reviews
    end
    
end

