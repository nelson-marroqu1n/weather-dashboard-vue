<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])

const cityQuery = ref('')

/**
 * Emite el evento de búsqueda con el nombre de la ciudad.
 */
const handleSearch = () => {
  if (!cityQuery.value.trim()) return
  emit('search', cityQuery.value)
}

/**
 * Permite buscar al presionar Enter en el campo de texto.
 */
const handleKeydown = (event) => {
  if (event.key === 'Enter') {
    handleSearch()
  }
}
</script>

<template>
  <div class="card weather-card mb-4">
    <div class="card-body p-4">
      <h2 class="h5 mb-3">Buscar ciudad</h2>
      <div class="input-group input-group-lg">
        <input
          v-model="cityQuery"
          type="text"
          class="form-control"
          placeholder="Ej: Madrid, Buenos Aires, Ciudad de México..."
          aria-label="Nombre de la ciudad"
          @keydown="handleKeydown"
        />
        <button
          class="btn btn-primary px-4"
          type="button"
          @click="handleSearch"
        >
          Consultar
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-primary {
  background-color: var(--weather-primary);
  border-color: var(--weather-primary);
}

.btn-primary:hover {
  background-color: var(--weather-primary-dark);
  border-color: var(--weather-primary-dark);
}
</style>
