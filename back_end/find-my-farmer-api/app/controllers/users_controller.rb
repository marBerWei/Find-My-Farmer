class UsersController < ApplicationController
	
	def index
		@users = User.all
		render json: @users, status: 200
	end

	def create 
		@user = User.new
	end

	def getRecipes
		@user = User.find(current_user.id)
		@recipes = @user.recipes
		render json: @recipes, status: 200
	end

	private

	def user_params
	end


end
