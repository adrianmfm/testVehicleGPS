
# testVehicleGPS

Este proyecto es una prueba de integración para un sistema de monitoreo GPS de vehículos. Incluye un backend desarrollado en Ruby on Rails y un frontend construido con React. El objetivo es gestionar la visualización y el seguimiento en tiempo real de vehículos utilizando servicios de geolocalización integrando la API de Google Maps.

## Tecnologías utilizadas

- **Backend**:
  - Ruby on Rails
  - PostgreSQL
  - Sidekiq (para procesamiento de trabajos en segundo plano)

- **Frontend**:
  - React
  - JavaScript (ES6+)
  - HTML y CSS

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

- [Ruby](https://www.ruby-lang.org/) (versión recomendada: 2.7 o superior)
- [Rails](https://rubyonrails.org/) (versión recomendada: 6 o superior)
- [Node.js](https://nodejs.org/) (versión recomendada: 14 o superior)
- [PostgreSQL](https://www.postgresql.org/) (versión recomendada: 12 o superior)
- [Npm](https://www.npmjs.com//) (para gestionar dependencias de JavaScript)
- [Redis](https://redis.io/) (para que Sidekiq funcione correctamente)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/adrianmfm/testVehicleGPS.git
   cd testVehicleGPS
   ```

2. Configura las variables de entorno para el backend:

   Crea un archivo `.env` en la carpeta `back` con el siguiente contenido:

   ```plaintext
   DATABASE_USERNAME=tu_usuario
   DATABASE_PASSWORD=tu_contraseña
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=nombre_de_tu_base_de_datos
   REDIS_URL=redis://localhost:6379/0
   ```

   Reemplaza `tu_usuario`, `tu_contraseña` y `nombre_de_tu_base_de_datos` con tus credenciales y configuración de base de datos.

3. Instala las dependencias del backend:

   ```bash
   cd back
   bundle install
   ```

4. Configura la base de datos:

   ```bash
   rails db:create
   rails db:migrate
   ```

5. Instala las dependencias del frontend:

   ```bash
   cd ../front
   npm install
   ```

## Ejecución del proyecto

### Backend

1. Navega a la carpeta del backend:

   ```bash
   cd back
   ```

2. Inicia el servidor backend:

   ```bash
   rails server
   ```

   El backend estará disponible en `http://localhost:3000`.

3. Inicia Sidekiq para el procesamiento de trabajos en segundo plano:

   ```bash
   bundle exec sidekiq
   ```

   Asegúrate de que Redis esté en ejecución para que Sidekiq funcione correctamente.

### Frontend

1. Navega a la carpeta del frontend:

   ```bash
   cd ../front
   ```

2. Inicia el servidor de desarrollo del frontend:

   ```bash
   npm start
   ```

   El frontend estará disponible en `http://localhost:3001`.

## Modelo de datos
<img width="409" alt="image" src="https://github.com/user-attachments/assets/a9da7507-13dc-47cd-9db5-bd040bc41a69">


## Screenshots de la App
<img width="1335" alt="image" src="https://github.com/user-attachments/assets/e838b2c1-dafa-4479-b3e7-13de1a11b8b6">

## Con filtrado 
<img width="1361" alt="image" src="https://github.com/user-attachments/assets/1ac57c2a-8058-4788-b59d-c8c2ba98a5f8">





## Licencia

Este proyecto se distribuye bajo la licencia MIT. 
