class UserMarkets < ApplicationRecord
	belongs_to :user
	belongs_to :market
end
