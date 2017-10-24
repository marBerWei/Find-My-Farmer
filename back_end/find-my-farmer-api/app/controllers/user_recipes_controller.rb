class UserRecipesController < ApplicationController
	
	def index
		@userRecipe = UserRecipe.all
		render json: @users, status: 200
	end


end
