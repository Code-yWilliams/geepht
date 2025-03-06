Rails.application.routes.draw do
  unauthenticated :user do
    # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
    # Can be used by load balancers and uptime monitors to verify that the app is live.
    get "up" => "rails/health#show", as: :rails_health_check
    get "/" => redirect("/login")
    get "*path", to: redirect("/login"), constraints: ->(request) {
      ![ "login", "register", "forgot-password", "app" ].include?(request.path.split("/")[1])
    }
  end

  devise_for :users, path: "", path_names: {
    sign_in: "login",
    sign_out: "logout",
    sign_up: "register",
    password: "forgot-password"
  }, controllers: {
    registrations: "users/registrations",
    sessions: "users/sessions"
  }

  root to: redirect("/app")

  get "app", to: "app#index"
  get "app/*route", to: "app#index" # TODO: prob remove and replace with 404 via tanstack router

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
end
