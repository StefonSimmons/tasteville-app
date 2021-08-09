Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :flavors, only: [:index]

  get "/flavors", to: "flavors#index"
  resources :foods
end
