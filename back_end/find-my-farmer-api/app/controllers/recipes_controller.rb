require 'httparty'
require 'rest-client'

class RecipesController < ApplicationController
  before_action :authorized, except: [:index, :getRecipe, :FetchRecipes]

	
	def index
		if current_user
			@recipes = current_user.recipes
		else 
			@recipes = Recipe.all
		end
		@recipes = @recipes.uniq
		render json: @recipes, status: 200
	end

	def getRecipe
		# binding.pry
		string = params["ingredients"]
		#binding.pry
		res = RestClient.get "http://food2fork.com/api/search?key=827ace4f4a570a48be860f9fb87e7f66&q=#{string}"
		obj = JSON.parse(res)
		#binding.pry
		puts obj
		render json: obj, status: 200
	end

	def create
		
		@user = User.find(current_user.id)
		@recipe = Recipe.find_or_create_by(recipe_params)
		@recipe_user = UserRecipe.create(user_id: @user.id, recipe_id: @recipe.id)
		render json: @recipe, status: 200
	end

	class FetchRecipes

		def initialize(string)
			@string = string
		end

		include HTTParty
		base_uri "http://food2fork.com/api"

		def recipe
			self.class.get("/search?key=827ace4f4a570a48be860f9fb87e7f66&q=${string}")
		end
	end

	private 

	def recipe_params
      params.require(:recipe).permit(:title, :publisher, :f2f_url, :source_url, :recipe_id, :image_url, :social_rank, :publisher_url)
    end


end
