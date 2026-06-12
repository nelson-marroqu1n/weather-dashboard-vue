<script setup>
defineProps({
  city: {
    type: Object,
    required: true,
  },
  summary: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card weather-card mb-4">
    <div class="card-body p-4 p-md-5 text-center">
      <p class="text-muted text-uppercase small mb-2">
        {{ city.name }}, {{ city.country }}
      </p>

      <div class="weather-icon mb-3" aria-hidden="true">
        {{ summary.icon }}
      </div>

      <p class="weather-temp mb-2">
        {{ Math.round(summary.temperature) }}°C
      </p>

      <p class="h5 text-secondary mb-0">
        {{ summary.condition }}
      </p>
    </div>
  </div>
</template>
