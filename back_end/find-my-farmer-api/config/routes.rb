Rails.application.routes.draw do
	resources :users, only: [:index, :create]
	get '/recipes', to: 'recipes#index'
	post '/addIngredientsToFetchRequest', to: 'recipes#getRecipe'
	post '/recipes', to: 'recipes#create'
	post '/login', to: 'sessions#create'
	post '/user_recipes', to: 'user_recipes#index'
	get '/current_user', to: 'users#current_user_from_token'
	post '/delete_user_recipe', to: 'user_recipes#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
