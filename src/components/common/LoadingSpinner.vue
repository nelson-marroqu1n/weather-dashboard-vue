<script setup>
defineProps({
  message: {
    type: String,
    default: 'Consultando el clima...',
  },
})
</script>

<template>
  <div class="spinner-overlay" role="status" aria-live="polite">
    <div class="text-center">
      <div class="spinner-border text-primary mb-3" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="text-muted mb-0">{{ message }}</p>
    </div>
  </div>
</template>

<style scoped>
.text-primary {
  color: var(--weather-primary) !important;
}
</style>
