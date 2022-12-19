Rails.application.routes.draw do
  
  resources :reviews
  resources :skiareas
  resources :users
  resources :locations

  delete "/delete", to: "locations#destroy"
  post "/save", to: "locations#create"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  get "/allusers", to: "users#index"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/savereview", to: "reviews#create"
  get "/allreviews", to: "reviews#index"

end
