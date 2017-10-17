class RecipesController < ApplicationController
	
	def index
		@recipes = Recipe.all
		render json: @recipes, status: 200
	end

	def getRecipe
		binding.pry
		string = ""

		url = "http://food2fork.com/api/search?key=827ace4f4a570a48be860f9fb87e7f66&q=#{}"

	end


end
