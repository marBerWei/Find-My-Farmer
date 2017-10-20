Rails.application.routes.draw do
	resources :users, only: [:index, :create]
	get '/recipes', to: 'recipes#index'
	post '/addIngredientsToFetchRequest', to: 'recipes#getRecipe'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
