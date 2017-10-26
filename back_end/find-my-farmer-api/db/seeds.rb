# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# require 'httparty'

# class FetchRecipes

# 	def initialize(string)
# 		@string = string
# 	end

# 	include HTTParty
# 	base_uri "http://food2fork.com/api"

# 	def recipe
# 		self.class.get("/search?key=827ace4f4a570a48be860f9fb87e7f66&q=${string}")
# 	end
# end

# recipes = FetchRecipes.new()

# 	recipes.each_with_index do |recipe, i|
# 		begin 
# 			recipe_name = recipe["recipes"]#this is where we get things
# 		rescue 
# 			puts "error"
# 			next
# 		else 
# 			Recipe.create(
# 				name:recipe_name
# 			)
# 	end
# end



User.create(name: "martina", shopper: "shopper", email: "test@test.com", password: "test" )

# set up seed fetch with httparty