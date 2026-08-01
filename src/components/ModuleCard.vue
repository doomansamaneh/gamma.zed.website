<script setup lang="ts">
import Card from './Card.vue'
import Badge from './Badge.vue'

withDefaults(defineProps<{
  title?: string
  description?: string
  badge?: string
  href?: string
}>(), {
  title: 'Module',
  description: 'Reusable module summary card.',
  badge: 'Core',
  href: '',
})
</script>

<template>
  <a v-if="href" :href="href" class="block h-full transition hover:-translate-y-0.5">
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
  </a>

  <Card v-else class="h-full">
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
