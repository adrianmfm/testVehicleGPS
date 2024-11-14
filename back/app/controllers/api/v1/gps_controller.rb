class Api::V1::GpsController < ApplicationController
  def index
    last_waypoints = Waypoint
                      .joins('INNER JOIN vehicles ON vehicles.id = waypoints.vehicle_id') 
                      .select('DISTINCT ON (waypoints.vehicle_id) waypoints.*, vehicles.vehicle_identifier') 
                      .order('waypoints.vehicle_id, waypoints.sent_at DESC') # Ordena por vehicle_id y sent_at

    render json: last_waypoints
  end
  
  def create
    # Recibir los parámetros
    latitude = params[:latitude]
    longitude = params[:longitude]
    sent_at = params[:sent_at]
    vehicle_identifier = params[:vehicle_identifier].upcase

    # Enviar la creación del waypoint al job de Sidekiq
    GpsProcessorJob.perform_async(latitude, longitude, sent_at, vehicle_identifier)

    # Responder inmediatamente al cliente
    render json: { status: 'Job en segundo plano iniciado' }, status: :ok
  end
end
