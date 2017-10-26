class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  def issue_token(payload)
    JWT.encode(payload, "supersecretcode")
  end

  def auth_header
     header = request.headers["Authorization"]
  end

  def decoded_token
    if auth_header
      token = auth_header.split(" ")[1]
      begin 
        JWT.decode(token, "supersecretcode", true, {algorithm: 'HS256'}) 
      rescue JWT::DecodeError
        return nil
      end
    end
  end


  def current_user
    if decoded_token
      if decoded_token[0]["user_id"]
        @user = User.find(decoded_token[0]["user_id"])
      end
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: {message: "Not welcome" }, status: 401 unless logged_in?
  end


end