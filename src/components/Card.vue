<script setup lang="ts">
withDefaults(defineProps<{
  padding?: 'sm' | 'md' | 'lg'
  elevated?: boolean
}>(), {
  padding: 'md',
  elevated: true,
})

const paddingClasses = {
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
}
</script>

<template>
  <section
    class="card-hover rounded-lg border border-border bg-surface"
    :class="[paddingClasses[padding], elevated ? 'shadow-sm' : '']"
  >
    <slot />
  </section>
</template>
