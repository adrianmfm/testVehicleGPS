class GpsProcessorJob
  include Sidekiq::Job

  def perform(latitude, longitude, sent_at, vehicle_identifier)
    # Buscar o crear el vehículo usando el identificador
    vehicle = Vehicle.find_or_create_by(vehicle_identifier: vehicle_identifier)

    # Crear un nuevo waypoint con los datos recibidos
    waypoint = Waypoint.new(
      latitude: latitude,
      longitude: longitude,
      sent_at: sent_at,
      vehicle_id: vehicle.id
    )

    # Guardar el waypoint
    if waypoint.save
      puts "Punto de GPS guardado correctamente"
    else
      puts "Error al guardar el punto de GPS: #{waypoint.errors.full_messages}"
    end
  end
end
