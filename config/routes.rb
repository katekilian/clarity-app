Rails.application.routes.draw do

  root "static_pages#index"


  post "sign-up", to: "registrations#create"
  get "sign-out", to: "authentication#destroy"
  post "sign-in", to: "authentication#create"

  resources :journal_entries, only: [:index, :new, :create]

end
