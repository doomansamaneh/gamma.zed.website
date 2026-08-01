<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from './Button.vue'
import zedLogo from '../assets/images/zed-logo.png'

const isMenuOpen = ref(false)

const props = withDefaults(defineProps<{
  locale?: 'fa' | 'en'
  activePage?: 'home' | 'asset-management' | 'platform' | 'modules' | 'industry' | 'about'
}>(), {
  locale: 'fa',
  activePage: 'home',
})

const navItems = computed(() => {
  const homeHref = props.locale === 'fa' ? '/?lang=fa' : '/?lang=en'
  const modulesHref = props.locale === 'fa' ? '/?page=modules&lang=fa' : '/?page=modules&lang=en'
  const assetHref = props.locale === 'fa' ? '/?page=asset-management&lang=fa' : '/?page=asset-management&lang=en'
  const platformHref = props.locale === 'fa' ? '/?page=platform&lang=fa' : '/?page=platform&lang=en'
  const industryHref = props.locale === 'fa' ? '/?page=industry&lang=fa' : '/?page=industry&lang=en'
  const aboutHref = props.locale === 'fa' ? '/?page=about&lang=fa' : '/?page=about&lang=en'

  return props.locale === 'fa'
    ? [
        { label: 'خانه', href: homeHref, active: props.activePage === 'home' },
        { label: 'پلتفرم', href: platformHref, active: props.activePage === 'platform' },
        { label: 'ماژول‌ها', href: modulesHref, active: props.activePage === 'modules' },
        { label: 'راه‌حل‌ها', href: assetHref },
        { label: 'صنایع', href: industryHref, active: props.activePage === 'industry' },
        { label: 'درباره ما', href: aboutHref, active: props.activePage === 'about' },
      ]
    : [
        { label: 'Home', href: homeHref, active: props.activePage === 'home' },
        { label: 'Platform', href: platformHref, active: props.activePage === 'platform' },
        { label: 'Modules', href: modulesHref, active: props.activePage === 'modules' },
        { label: 'Solutions', href: assetHref },
        { label: 'Industries', href: industryHref, active: props.activePage === 'industry' },
        { label: 'About', href: aboutHref, active: props.activePage === 'about' },
      ]
})

const localeLabel = computed(() => props.locale === 'fa' ? 'English' : 'فارسی')
const localeHref = computed(() => props.locale === 'fa' ? '/?lang=en' : '/?lang=fa')
const headerText = computed(() => props.locale === 'fa' ? 'عملیات سازمانی' : 'Enterprise Operations')
const demoText = computed(() => props.locale === 'fa' ? 'درخواست دمو' : 'Request Demo')
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-border bg-surface/95 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur">
    <div class="mx-auto max-w-7xl px-4 py-3 md:px-6">
      <div class="flex items-center justify-between gap-3" :class="props.locale === 'fa' ? 'flex-row-reverse' : ''">
        <div class="flex items-center gap-3" :class="props.locale === 'fa' ? 'flex-row-reverse' : ''">
          <a href="/" class="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-surface_shadow-sm transition hover:scale-[1.02] md:h-12 md:w-12">
            <img :src="zedLogo" alt="ZED logo" class="h-full w-full object-contain" />
          </a>
          <!-- <div class="min-w-0">
            <div class="text-lg font-semibold tracking-tight text-text">ZED</div>
            <div class="text-[11px] uppercase tracking-[0.24em] text-text-muted">{{ headerText }}</div>
          </div> -->
        </div>

        <div class="flex items-center gap-2" :class="props.locale === 'fa' ? 'flex-row-reverse' : ''">
          <nav class="hidden items-center gap-1 rounded-full border border-border bg-surface-muted/70 p-1 md:flex">
            <a
              v-for="item in navItems"
              :key="item.label"
              :href="item.href"
              class="rounded-full px-3 py-2 text-sm font-medium transition"
              :class="item.active ? 'bg-brand text-white shadow-sm' : 'text-text-muted hover:bg-surface hover:text-text'"
            >
              {{ item.label }}
            </a>
          </nav>

          <!-- <a :href="localeHref" class="hidden rounded-full border border-border bg-surface px-3 py-2 text-sm font-medium text-text shadow-sm transition hover:bg-surface-muted md:inline-flex">
            {{ localeLabel }}
          </a> -->

          <Button variant="primary" size="sm" class="hidden md:inline-flex">{{ demoText }}</Button>

          <button
            type="button"
            class="inline-flex items-center rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-text shadow-sm md:hidden"
            :aria-expanded="isMenuOpen"
            @click="isMenuOpen = !isMenuOpen"
          >
            {{ props.locale === 'fa' ? 'منو' : 'Menu' }}
          </button>
        </div>
      </div>

      <nav v-if="isMenuOpen" class="mt-3 flex flex-col gap-2 rounded-2xl border border-border bg-surface p-2 md:hidden" :class="props.locale === 'fa' ? 'items-end text-right' : ''">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="w-full rounded-lg px-3 py-2 text-sm transition"
          :class="item.active ? 'bg-brand-soft text-brand' : 'text-text-muted hover:bg-surface-muted hover:text-text'"
        >
          {{ item.label }}
        </a>
        <a :href="localeHref" class="w-full rounded-lg px-3 py-2 text-sm text-text-muted transition hover:bg-surface-muted hover:text-text">
          {{ localeLabel }}
        </a>
      </nav>
    </div>
  </header>
</template>
