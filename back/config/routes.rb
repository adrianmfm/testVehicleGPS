require 'sidekiq/web'

Rails.application.routes.draw do
  # Rutas de la API
  namespace :api do
    namespace :v1 do
      resources :gps, only: [:index, :create]
    end
  end

  # Rutas de salud
  get "up" => "rails/health#show", as: :rails_health_check

  # Monta la interfaz de administración de Sidekiq
  mount Sidekiq::Web => '/sidekiq'
end
