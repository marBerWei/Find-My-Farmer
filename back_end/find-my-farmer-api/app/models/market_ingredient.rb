class MarketIngredient < ApplicationRecord
	belongs_to :market
	belongs_to :ingredient
end
