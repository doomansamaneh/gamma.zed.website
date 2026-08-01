<script setup lang="ts">
import Button from './Button.vue'

withDefaults(defineProps<{
  title?: string
  description?: string
  primaryCta?: string
  secondaryCta?: string
  primaryHref?: string
  secondaryHref?: string
}>(), {
  title: 'Request a Demo',
  description: 'Book a guided walkthrough to see how ZED Core can support your enterprise operations.',
  primaryCta: 'Request Demo',
  secondaryCta: 'Contact Sales',
  primaryHref: '',
  secondaryHref: '',
})
</script>

<template>
  <section class="rounded-xl border border-border bg-brand-soft p-8 text-center shadow-sm">
    <div class="mx-auto max-w-3xl space-y-4">
      <h2 class="text-2xl font-semibold text-text">{{ title }}</h2>
      <p class="text-sm text-text-muted">{{ description }}</p>
      <div class="flex flex-wrap justify-center gap-3">
        <Button v-if="primaryHref" variant="primary" :href="primaryHref">{{ primaryCta }}</Button>
        <Button v-else variant="primary">{{ primaryCta }}</Button>
        <Button v-if="secondaryHref" variant="secondary" :href="secondaryHref">{{ secondaryCta }}</Button>
        <Button v-else variant="secondary">{{ secondaryCta }}</Button>
      </div>
    </div>
  </section>
</template>
