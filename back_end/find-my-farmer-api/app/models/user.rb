class User < ApplicationRecord
	has_many :markets, through: :user_markets
	has_many :user_markets
	has_many :user_recipes
	has_many :recipes, through: :user_recipes
	has_secure_password
end
