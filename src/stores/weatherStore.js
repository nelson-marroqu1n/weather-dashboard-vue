import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getWeatherByCity } from '../services/weatherService'

const HISTORY_KEY = 'weather_search_history'
const MAX_HISTORY_ITEMS = 8

/**
 * Carga el historial de búsquedas desde localStorage.
 */
function loadHistoryFromStorage() {
  try {
    const stored = localStorage.getItem(HISTORY_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

/**
 * Guarda el historial de búsquedas en localStorage.
 */
function saveHistoryToStorage(history) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
}

export const useWeatherStore = defineStore('weather', () => {
  const currentWeather = ref(null)
  const selectedCity = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const searchHistory = ref(loadHistoryFromStorage())

  /**
   * Agrega una ciudad al historial evitando duplicados.
   */
  function addToHistory(city) {
    const filtered = searchHistory.value.filter(
      (item) => item.toLowerCase() !== city.toLowerCase(),
    )

    searchHistory.value = [city, ...filtered].slice(0, MAX_HISTORY_ITEMS)
    saveHistoryToStorage(searchHistory.value)
  }

  /**
   * Consulta el clima de una ciudad y actualiza el estado global.
   */
  async function fetchWeather(cityName) {
    const trimmedCity = cityName.trim()

    if (!trimmedCity) {
      error.value = 'Por favor, ingresa el nombre de una ciudad.'
      return
    }

    loading.value = true
    error.value = null

    try {
      const data = await getWeatherByCity(trimmedCity)

      currentWeather.value = data.weather
      selectedCity.value = {
        name: data.location.name,
        country: data.location.country,
        latitude: data.location.latitude,
        longitude: data.location.longitude,
      }

      addToHistory(data.location.name)
    } catch (err) {
      currentWeather.value = null
      selectedCity.value = null
      error.value =
        err.response?.data?.reason ||
        err.message ||
        'Ocurrió un error al consultar el clima.'
    } finally {
      loading.value = false
    }
  }

  /**
   * Limpia el mensaje de error actual.
   */
  function clearError() {
    error.value = null
  }

  /**
   * Elimina una ciudad del historial de búsquedas.
   */
  function removeFromHistory(city) {
    searchHistory.value = searchHistory.value.filter((item) => item !== city)
    saveHistoryToStorage(searchHistory.value)
  }

  return {
    currentWeather,
    selectedCity,
    loading,
    error,
    searchHistory,
    fetchWeather,
    clearError,
    removeFromHistory,
  }
})
