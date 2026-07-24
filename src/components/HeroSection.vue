<script setup lang="ts">
import Button from './Button.vue'
import DashboardMockup from './DashboardMockup.vue'

withDefaults(defineProps<{
  title?: string
  subtitle?: string
  primaryCta?: string
  secondaryCta?: string
}>(), {
  title: 'ZED Core',
  subtitle: 'Enterprise Operations Platform',
  primaryCta: 'Request Demo',
  secondaryCta: 'Explore Platform',
})
</script>

<template>
  <section class="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-brand-soft via-surface to-surface p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] md:p-8 lg:p-10">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(31,111,235,0.16),_transparent_45%)]" />

    <div class="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
      <div class="space-y-5">
        <div class="inline-flex rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
          Enterprise Platform
        </div>

        <div class="space-y-3">
          <h1 class="text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">{{ title }}</h1>
          <p class="max-w-2xl text-base leading-7 text-text-muted md:text-lg">{{ subtitle }}</p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button variant="primary">{{ primaryCta }}</Button>
          <Button variant="secondary">{{ secondaryCta }}</Button>
        </div>

        <div class="grid gap-3 sm:grid-cols-3">
          <div class="rounded-2xl border border-border bg-surface/90 p-3 shadow-sm">
            <div class="text-xs uppercase tracking-[0.2em] text-text-muted">Visibility</div>
            <div class="mt-1 text-sm font-semibold text-text">Asset intelligence</div>
          </div>
          <div class="rounded-2xl border border-border bg-surface/90 p-3 shadow-sm">
            <div class="text-xs uppercase tracking-[0.2em] text-text-muted">Automation</div>
            <div class="mt-1 text-sm font-semibold text-text">Workflow orchestration</div>
          </div>
          <div class="rounded-2xl border border-border bg-surface/90 p-3 shadow-sm">
            <div class="text-xs uppercase tracking-[0.2em] text-text-muted">Control</div>
            <div class="mt-1 text-sm font-semibold text-text">Inventory & forms</div>
          </div>
        </div>
      </div>

      <DashboardMockup title="Operational Dashboard" subtitle="Live enterprise visibility" variant="overview" />
    </div>
  </section>
</template>
