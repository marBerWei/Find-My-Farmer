class SessionsController < ApplicationController
  #  skip_before_action :authorized, only: [:create]

  def show
    render json: {
      id: current_user.id,
      email: current_user.email
    }
  end

  def create
    # byebug
    user = User.find_by(email: params[:email])
    
    if user && user.authenticate(params[:password])
      payload = {user_id: user.id}
      token = issue_token(payload)
      render json: { jwt: token, email: params[:email], id: user.id, name: user.name}
    else
      render json: { error: "some bad stuff happened"}
    end
  end
end