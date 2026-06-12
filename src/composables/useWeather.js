import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useWeatherStore } from '../stores/weatherStore'
import {
  formatDateTime,
  getWeatherCondition,
  getWeatherIcon,
} from '../services/weatherService'

/**
 * Composable reutilizable para acceder a la lógica del clima.
 */
export function useWeather() {
  const store = useWeatherStore()
  const {
    currentWeather,
    selectedCity,
    loading,
    error,
    searchHistory,
  } = storeToRefs(store)

  const hasWeather = computed(() => Boolean(currentWeather.value && selectedCity.value))

  const weatherSummary = computed(() => {
    if (!currentWeather.value) return null

    const current = currentWeather.value.current
    const timezone = currentWeather.value.timezone

    return {
      temperature: current.temperature_2m,
      humidity: current.relative_humidity_2m,
      windSpeed: current.wind_speed_10m,
      condition: getWeatherCondition(current.weather_code),
      icon: getWeatherIcon(current.weather_code),
      ...formatDateTime(current.time, timezone),
    }
  })

  const searchWeather = async (cityName) => {
    await store.fetchWeather(cityName)
  }

  const selectFromHistory = async (cityName) => {
    await store.fetchWeather(cityName)
  }

  const clearError = () => {
    store.clearError()
  }

  const removeFromHistory = (cityName) => {
    store.removeFromHistory(cityName)
  }

  return {
    currentWeather,
    selectedCity,
    loading,
    error,
    searchHistory,
    hasWeather,
    weatherSummary,
    searchWeather,
    selectFromHistory,
    clearError,
    removeFromHistory,
  }
}
