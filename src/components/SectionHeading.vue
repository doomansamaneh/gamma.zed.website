<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  description?: string
}>(), {
  eyebrow: '',
  title: '',
  description: '',
})
</script>

<template>
  <div class="space-y-2">
    <p v-if="eyebrow" class="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
      {{ eyebrow }}
    </p>
    <h2 v-if="title" class="text-2xl font-semibold leading-relaxed text-text">
      {{ title }}
    </h2>
    <p v-if="description" class="max-w-3xl text-sm leading-7 text-text-muted">
      {{ description }}
    </p>
  </div>
</template>
