class Market < ApplicationRecord
	has_many :ingredients, through: :market_ingredients
	has_many :market_ingredients
	has_many :user_markets
	has_many :markets, through: :user_markets
end
