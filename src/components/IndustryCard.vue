<script setup lang="ts">
import Card from './Card.vue'

withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'Industry',
  description: 'Enterprise use case summary.',
})
</script>

<template>
  <Card>
    <div class="space-y-2">
      <h3 class="text-base font-semibold text-text">{{ title }}</h3>
      <p class="text-sm text-text-muted">{{ description }}</p>
    </div>
  </Card>
</template>
