class FoodsController < ApplicationController
  before_action :get_food, only: [:show, :update, :destroy, :add_flavor_to_food]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    foods = Food.all
    render json: foods
  end

  def show
    render json: @food, include: :flavors
  end

  def create
    food = Food.new(food_params)
    if food.save
      render json: food, status: :created
    else
      render json: food.errors, status: :unprocessable_entity
    end
  end

  def update
    if @food.update(food_params)
      render json: @food, status: :ok
    else
      render json: food.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @food.destroy
    render json: "DELETED"
  end

  # CUSTOM METHOD
  def add_flavor_to_food
    flavor = Flavor.find_by(name: flavor_params[:name])
    if !@food.flavors.include? flavor
      @food.flavors.push(flavor)
      render json: @food, include: :flavors
    else
      render json: @food, include: :flavors
    end
  end

  private

  def food_params
    params.require(:food).permit(:name, :user_id)
  end

  def flavor_params
    params.require(:flavor).permit(:name)
  end

  def get_food
    @food = Food.find(params[:id])
  end
end
