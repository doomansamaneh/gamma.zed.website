<script setup lang="ts">
import Card from './Card.vue'

withDefaults(defineProps<{
  items?: Array<{ label: string; value: string }>
}>(), {
  items: () => [
    { label: 'Assets Managed', value: '120K+' },
    { label: 'Workflow Automation', value: '94%' },
    { label: 'Uptime Improvement', value: '28%' },
    { label: 'Teams Connected', value: '40+' },
  ],
})
</script>

<template>
  <section class="grid gap-4 md:grid-cols-4">
    <Card v-for="item in items" :key="item.label" class="text-center">
      <div class="space-y-2">
        <div class="text-2xl font-semibold text-text">{{ item.value }}</div>
        <div class="text-sm text-text-muted">{{ item.label }}</div>
      </div>
    </Card>
  </section>
</template>
