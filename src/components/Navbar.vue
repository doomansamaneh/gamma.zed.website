<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'

const isMenuOpen = ref(false)

withDefaults(defineProps<{
  items?: Array<{ label: string; href: string; active?: boolean }>
  logo?: string
}>(), {
  items: () => [
    { label: 'Home', href: '/', active: true },
    { label: 'Platform', href: '/platform' },
    { label: 'Modules', href: '/modules' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries', href: '/industries' },
    { label: 'About', href: '/about' },
  ],
  logo: 'ZED Core',
})
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-border bg-surface/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur">
    <div class="mx-auto max-w-7xl px-4 py-3 md:px-6">
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-hover text-sm font-bold text-white shadow-sm">Z</div>
          <div>
            <div class="text-lg font-semibold tracking-tight text-text">{{ logo }}</div>
            <div class="text-[11px] uppercase tracking-[0.24em] text-text-muted">Enterprise Operations</div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <nav class="hidden items-center gap-1 rounded-full border border-border bg-surface-muted/70 p-1 md:flex">
            <a
              v-for="item in items"
              :key="item.label"
              :href="item.href"
              class="rounded-full px-3 py-2 text-sm font-medium transition"
              :class="item.active ? 'bg-brand text-white shadow-sm' : 'text-text-muted hover:bg-surface hover:text-text'"
            >
              {{ item.label }}
            </a>
          </nav>

          <Button variant="primary" size="sm" class="hidden md:inline-flex">Request Demo</Button>

          <button
            type="button"
            class="inline-flex items-center rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-text shadow-sm md:hidden"
            :aria-expanded="isMenuOpen"
            @click="isMenuOpen = !isMenuOpen"
          >
            Menu
          </button>
        </div>
      </div>

      <nav v-if="isMenuOpen" class="mt-3 flex flex-col gap-2 rounded-2xl border border-border bg-surface p-2 md:hidden">
        <a
          v-for="item in items"
          :key="item.label"
          :href="item.href"
          class="rounded-lg px-3 py-2 text-sm transition"
          :class="item.active ? 'bg-brand-soft text-brand' : 'text-text-muted hover:bg-surface-muted hover:text-text'"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>
