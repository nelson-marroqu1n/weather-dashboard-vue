<script setup>
defineProps({
  history: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['select', 'remove'])
</script>

<template>
  <div class="card weather-card">
    <div class="card-body p-4">
      <h2 class="h5 mb-3">Búsquedas recientes</h2>

      <div v-if="history.length === 0" class="empty-state py-4">
        <div class="empty-state-icon" aria-hidden="true">🔍</div>
        <p class="mb-0">Aún no hay búsquedas recientes.</p>
      </div>

      <ul v-else class="list-unstyled mb-0">
        <li v-for="city in history" :key="city" class="history-item">
          <button
            type="button"
            class="history-btn"
            @click="emit('select', city)"
          >
            📍 {{ city }}
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-danger"
            aria-label="Eliminar del historial"
            @click="emit('remove', city)"
          >
            ✕
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
