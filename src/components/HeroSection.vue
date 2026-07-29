<script setup lang="ts">
import { computed } from 'vue'
import Button from './Button.vue'
import heroIllustration from '../assets/images/hero-enterprise.svg'

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  eyebrow?: string
  primaryCta?: string
  secondaryCta?: string
  highlights?: Array<{ label: string; value: string }>
  locale?: 'fa' | 'en'
}>(), {
  title: 'ZED Core',
  subtitle: 'Enterprise Operations Platform',
  eyebrow: 'Enterprise Platform',
  primaryCta: 'Request Demo',
  secondaryCta: 'Explore Platform',
  highlights: () => [],
  locale: 'fa',
})

const isRtl = computed(() => props.locale === 'fa')
</script>

<template>
  <section class="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-brand-soft via-surface to-surface p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] md:p-8 lg:p-10" :dir="isRtl ? 'rtl' : 'ltr'">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(31,111,235,0.16),_transparent_45%)]" />

    <div class="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
      <div class="space-y-5">
        <div class="inline-flex rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
          {{ eyebrow }}
        </div>

        <div class="space-y-3">
          <h1 class="text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">{{ title }}</h1>
          <p class="max-w-2xl text-base leading-7 text-text-muted md:text-lg">{{ subtitle }}</p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap" :class="isRtl ? 'sm:flex-row-reverse' : ''">
          <Button variant="primary">{{ primaryCta }}</Button>
          <Button variant="secondary">{{ secondaryCta }}</Button>
        </div>

        <div v-if="highlights.length" class="grid gap-3 sm:grid-cols-3">
          <div v-for="item in highlights" :key="item.label" class="rounded-2xl border border-border bg-surface/90 p-3 shadow-sm">
            <div class="text-xs uppercase tracking-[0.2em] text-text-muted">{{ item.label }}</div>
            <div class="mt-1 text-sm font-semibold text-text">{{ item.value }}</div>
          </div>
        </div>
      </div>

      <div class="rounded-[24px] border border-border bg-surface/80 p-3 shadow-sm backdrop-blur sm:p-4">
        <img :src="heroIllustration" alt="Enterprise asset management illustration" class="h-auto w-full rounded-[18px] object-cover" />
      </div>
    </div>
  </section>
</template>
