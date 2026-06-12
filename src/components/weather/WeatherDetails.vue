<script setup>
defineProps({
  summary: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card weather-card mb-4">
    <div class="card-body p-4">
      <h2 class="h5 mb-4">Detalles del clima</h2>

      <div class="row g-3">
        <div class="col-sm-6 col-lg-3">
          <div class="detail-item">
            <span class="detail-icon" aria-hidden="true">💧</span>
            <div>
              <p class="detail-label">Humedad</p>
              <p class="detail-value">{{ summary.humidity }}%</p>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="detail-item">
            <span class="detail-icon" aria-hidden="true">💨</span>
            <div>
              <p class="detail-label">Viento</p>
              <p class="detail-value">{{ summary.windSpeed }} km/h</p>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="detail-item">
            <span class="detail-icon" aria-hidden="true">📅</span>
            <div>
              <p class="detail-label">Fecha</p>
              <p class="detail-value text-capitalize">{{ summary.date }}</p>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3">
          <div class="detail-item">
            <span class="detail-icon" aria-hidden="true">🕐</span>
            <div>
              <p class="detail-label">Hora</p>
              <p class="detail-value">{{ summary.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
