<script setup lang="ts">
import Card from './Card.vue'

withDefaults(defineProps<{
  title?: string
  subtitle?: string
}>(), {
  title: 'Widget',
  subtitle: '',
})
</script>

<template>
  <Card>
    <div class="space-y-3">
      <div>
        <h3 class="text-base font-semibold text-text">{{ title }}</h3>
        <p v-if="subtitle" class="text-xs text-text-muted">{{ subtitle }}</p>
      </div>
      <slot />
    </div>
  </Card>
</template>
