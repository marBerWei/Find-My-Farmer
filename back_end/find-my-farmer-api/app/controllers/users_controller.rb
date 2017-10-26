class UsersController < ApplicationController
	
	def index
		@users = User.all
		render json: @users, status: 200
	end

	def create 
		@user = User.new
	end

	def current_user_from_token
		render json: current_user
	end

	private

	def user_params
	end


end
