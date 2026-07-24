<script setup lang="ts">
import Card from './Card.vue'

withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'ZED Core',
})
</script>

<template>
  <Card>
    <div class="space-y-4">
      <h3 class="text-lg font-semibold text-text">{{ title }}</h3>
      <div class="grid gap-3 md:grid-cols-4">
        <div class="rounded-md border border-border bg-surface-muted p-3 text-center text-sm font-medium">EAM</div>
        <div class="rounded-md border border-border bg-surface-muted p-3 text-center text-sm font-medium">Workflow</div>
        <div class="rounded-md border border-border bg-surface-muted p-3 text-center text-sm font-medium">Inventory</div>
        <div class="rounded-md border border-border bg-surface-muted p-3 text-center text-sm font-medium">Forms</div>
      </div>
      <div class="rounded-md border border-dashed border-border bg-brand-soft p-3 text-center text-sm text-brand">
        Shared Services: Identity | Security | Rules | Notifications | Reporting
      </div>
    </div>
  </Card>
</template>
