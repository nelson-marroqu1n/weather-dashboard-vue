import axios from 'axios'

const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'

/**
 * Mapa de códigos WMO de Open Meteo a condiciones legibles e iconos.
 */
const WEATHER_CONDITIONS = {
  0: { label: 'Cielo despejado', icon: '☀️' },
  1: { label: 'Mayormente despejado', icon: '🌤️' },
  2: { label: 'Parcialmente nublado', icon: '⛅' },
  3: { label: 'Nublado', icon: '☁️' },
  45: { label: 'Niebla', icon: '🌫️' },
  48: { label: 'Niebla con escarcha', icon: '🌫️' },
  51: { label: 'Llovizna ligera', icon: '🌦️' },
  53: { label: 'Llovizna moderada', icon: '🌦️' },
  55: { label: 'Llovizna intensa', icon: '🌧️' },
  61: { label: 'Lluvia ligera', icon: '🌧️' },
  63: { label: 'Lluvia moderada', icon: '🌧️' },
  65: { label: 'Lluvia intensa', icon: '🌧️' },
  71: { label: 'Nieve ligera', icon: '🌨️' },
  73: { label: 'Nieve moderada', icon: '❄️' },
  75: { label: 'Nieve intensa', icon: '❄️' },
  80: { label: 'Chubascos ligeros', icon: '🌦️' },
  81: { label: 'Chubascos moderados', icon: '🌧️' },
  82: { label: 'Chubascos intensos', icon: '⛈️' },
  95: { label: 'Tormenta', icon: '⛈️' },
  96: { label: 'Tormenta con granizo', icon: '⛈️' },
  99: { label: 'Tormenta fuerte con granizo', icon: '⛈️' },
}

/**
 * Busca coordenadas geográficas de una ciudad por nombre.
 */
export async function geocodeCity(cityName) {
  const response = await axios.get(GEOCODING_URL, {
    params: {
      name: cityName.trim(),
      count: 1,
      language: 'es',
      format: 'json',
    },
  })

  const results = response.data?.results

  if (!results || results.length === 0) {
    throw new Error(`No se encontró la ciudad "${cityName}".`)
  }

  return results[0]
}

/**
 * Obtiene el clima actual para las coordenadas indicadas.
 */
export async function fetchCurrentWeather(latitude, longitude) {
  const response = await axios.get(WEATHER_URL, {
    params: {
      latitude,
      longitude,
      current: [
        'temperature_2m',
        'relative_humidity_2m',
        'wind_speed_10m',
        'weather_code',
      ].join(','),
      timezone: 'auto',
    },
  })

  return response.data
}

/**
 * Consulta completa: geocodifica la ciudad y obtiene el clima actual.
 */
export async function getWeatherByCity(cityName) {
  const location = await geocodeCity(cityName)
  const weatherData = await fetchCurrentWeather(location.latitude, location.longitude)

  return {
    location,
    weather: weatherData,
  }
}

/**
 * Devuelve la etiqueta de condición climática según el código WMO.
 */
export function getWeatherCondition(weatherCode) {
  return WEATHER_CONDITIONS[weatherCode]?.label ?? 'Condición desconocida'
}

/**
 * Devuelve el icono representativo según el código WMO.
 */
export function getWeatherIcon(weatherCode) {
  return WEATHER_CONDITIONS[weatherCode]?.icon ?? '🌡️'
}

/**
 * Formatea fecha y hora local según la zona horaria de la API.
 */
export function formatDateTime(isoString, timezone) {
  const date = new Date(isoString)

  const dateFormatter = new Intl.DateTimeFormat('es-ES', {
    timeZone: timezone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const timeFormatter = new Intl.DateTimeFormat('es-ES', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
  })

  return {
    date: dateFormatter.format(date),
    time: timeFormatter.format(date),
  }
}
