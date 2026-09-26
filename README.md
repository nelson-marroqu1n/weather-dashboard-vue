🌤️ Weather Dashboard

Aplicación web para consultar el clima actual de cualquier ciudad del mundo, desarrollada con Vue 3 y Vite. Permite buscar una ciudad y obtener información meteorológica en tiempo real utilizando las APIs gratuitas de Open-Meteo, sin necesidad de una API key.

📋 Descripción

Weather Dashboard es una aplicación de clima que consume dos servicios de Open-Meteo:

Un servicio de geocodificación, para encontrar las coordenadas de la ciudad buscada.
Un servicio de clima, para obtener las condiciones meteorológicas actuales a partir de esas coordenadas.

La interfaz completa está en español y no requiere configuración de credenciales ni claves de API para funcionar.

✨ Funciones
Búsqueda de ciudades y consulta de su clima actual.
Visualización de:
Nombre de la ciudad y país.
Temperatura actual.
Descripción de las condiciones climáticas.
Humedad.
Velocidad del viento.
Fecha y hora locales.
Historial de búsquedas:
Volver a consultar ciudades buscadas anteriormente.
Eliminar ciudades del historial.
Interfaz completamente en español.
🛠️ Tecnologías
Vue 3
Vite
JavaScript
Pinia (manejo de estado)
Vue Router
Bootstrap
Axios
Open-Meteo API (geocodificación y clima)
🚀 Instalación y ejecución
Clonar el repositorio:
bash
   git clone https://github.com/tu-usuario/weather-dashboard.git
   cd weather-dashboard
Instalar las dependencias:
bash
   npm install
Ejecutar el proyecto en modo desarrollo:
bash
   npm run dev
Abrir la aplicación en el navegador en la dirección que indique la terminal (por defecto http://localhost:5173).
📸 Captura de pantalla
