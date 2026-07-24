<script setup lang="ts">
import Card from './Card.vue'
import Badge from './Badge.vue'

withDefaults(defineProps<{
  title?: string
  description?: string
  badge?: string
}>(), {
  title: 'Module',
  description: 'Reusable module summary card.',
  badge: 'Core',
})
</script>

<template>
  <Card class="h-full">
    <div class="space-y-3">
      <div class="flex items-center justify-between gap-3">
        <h3 class="text-lg font-semibold text-text">{{ title }}</h3>
        <Badge tone="info">{{ badge }}</Badge>
      </div>
      <p class="text-sm text-text-muted">{{ description }}</p>
      <slot />
    </div>
  </Card>
</template>
