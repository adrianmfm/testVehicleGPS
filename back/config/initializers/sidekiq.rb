# config/initializers/sidekiq.rb
Sidekiq.configure_server do |config|
    # Configuración del servidor Sidekiq
    config.redis = { url: 'redis://localhost:6379/0' }
  end
  
  Sidekiq.configure_client do |config|
    # Configuración del cliente Sidekiq
    config.redis = { url: 'redis://localhost:6379/0' }
  end
  