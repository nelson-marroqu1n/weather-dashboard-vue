<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['close'])
</script>

<template>
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error:</strong> {{ message }}
    <button
      type="button"
      class="btn-close"
      aria-label="Cerrar"
      @click="emit('close')"
    />
  </div>
</template>
