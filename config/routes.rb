Rails.application.routes.draw do

  root "static_pages#index"

  get "keyword-query", to: "static_pages#keyword_search"

  post "sign-up", to: "registrations#create"
  get "sign-out", to: "authentication#destroy"
  post "sign-in", to: "authentication#create"

  resources :journal_entries

end
