class UserRecipesController < ApplicationController
	
	def index
		@userRecipe = UserRecipe.all
		render json: @users, status: 200
	end

	def destroy
		#byebug
		@user = params[:user]
		@recipe = params[:recipe][:id]
		@recipe_user = UserRecipe.find_by(user_id: @user, recipe_id:@recipe)
		@recipe_user.destroy
		render json: User.find(params[:user]).recipes
	end


end
