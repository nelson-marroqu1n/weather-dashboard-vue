<script setup>
import SearchBar from '../components/common/SearchBar.vue'
import LoadingSpinner from '../components/common/LoadingSpinner.vue'
import ErrorMessage from '../components/common/ErrorMessage.vue'
import WeatherCard from '../components/weather/WeatherCard.vue'
import WeatherDetails from '../components/weather/WeatherDetails.vue'
import SearchHistory from '../components/weather/SearchHistory.vue'
import { useWeather } from '../composables/useWeather'

const {
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
} = useWeather()
</script>

<template>
  <div class="container">
    <SearchBar @search="searchWeather" />

    <ErrorMessage
      v-if="error"
      :message="error"
      @close="clearError"
    />

    <LoadingSpinner v-if="loading" />

    <template v-else-if="hasWeather && weatherSummary">
      <WeatherCard
        :city="selectedCity"
        :summary="weatherSummary"
      />

      <WeatherDetails :summary="weatherSummary" />
    </template>

    <div
      v-else-if="!error && !loading"
      class="card weather-card mb-4"
    >
      <div class="empty-state">
        <div class="empty-state-icon" aria-hidden="true">🌍</div>
        <h2 class="h5">Bienvenido al Weather Dashboard</h2>
        <p class="mb-0">
          Ingresa una ciudad para consultar el clima actual en tiempo real.
        </p>
      </div>
    </div>

    <SearchHistory
      :history="searchHistory"
      @select="selectFromHistory"
      @remove="removeFromHistory"
    />
  </div>
</template>
