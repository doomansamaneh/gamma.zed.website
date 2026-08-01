<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  locale?: 'fa' | 'en'
}>(), {
  locale: 'fa',
})

const isRtl = computed(() => props.locale === 'fa')
const homeHref = computed(() => props.locale === 'fa' ? '/?lang=fa' : '/?lang=en')
const assetHref = computed(() => props.locale === 'fa' ? '/?page=asset-management&lang=fa' : '/?page=asset-management&lang=en')
const modulesHref = computed(() => props.locale === 'fa' ? '/?page=modules&lang=fa' : '/?page=modules&lang=en')
const platformHref = computed(() => props.locale === 'fa' ? '/?page=platform&lang=fa' : '/?page=platform&lang=en')
const industryHref = computed(() => props.locale === 'fa' ? '/?page=industry&lang=fa' : '/?page=industry&lang=en')
const aboutHref = computed(() => props.locale === 'fa' ? '/?page=about&lang=fa' : '/?page=about&lang=en')
</script>

<template>
  <footer class="border-t border-border bg-surface-muted">
    <div class="mx-auto max-w-7xl px-4 py-10 md:px-6" :dir="isRtl ? 'rtl' : 'ltr'">
      <div class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div class="space-y-3">
          <div class="text-lg font-semibold text-text">ZED Core</div>
          <p class="max-w-xl text-sm leading-7 text-text-muted">
            {{ isRtl ? 'پلتفرم عملیات سازمانی برای دیده‌بانی دارایی‌ها، کنترل گردش کار و اجرای دیجیتال قابل پیکربندی.' : 'Enterprise operations platform for asset visibility, workflow control, and configurable digital execution.' }}
          </p>
          <div class="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">© 2026 ZED Core</div>
        </div>

        <div class="rounded-2xl border border-border bg-surface p-4 shadow-sm">
          <div class="text-[11px] font-semibold uppercase tracking-[0.24em] text-text-muted">Explore</div>
          <div class="mt-3 grid gap-2 text-sm text-text-muted">
            <a :href="homeHref" class="transition hover:text-text">{{ isRtl ? 'خانه' : 'Home' }}</a>
            <a :href="platformHref" class="transition hover:text-text">{{ isRtl ? 'پلتفرم' : 'Platform' }}</a>
            <a :href="assetHref" class="transition hover:text-text">{{ isRtl ? 'مدیریت دارایی' : 'Asset Management' }}</a>
            <a :href="modulesHref" class="transition hover:text-text">{{ isRtl ? 'ماژول‌ها' : 'Modules' }}</a>
            <a :href="industryHref" class="transition hover:text-text">{{ isRtl ? 'صنایع' : 'Industries' }}</a>
          </div>
        </div>

        <div class="rounded-2xl border border-border bg-surface p-4 shadow-sm">
          <div class="text-[11px] font-semibold uppercase tracking-[0.24em] text-text-muted">Contact</div>
          <div class="mt-3 grid gap-2 text-sm text-text-muted">
            <a :href="assetHref" class="transition hover:text-text">{{ isRtl ? 'درخواست دمو' : 'Request Demo' }}</a>
            <a :href="modulesHref" class="transition hover:text-text">{{ isRtl ? 'راه‌حل‌ها' : 'Solutions' }}</a>
            <a :href="aboutHref" class="transition hover:text-text">{{ isRtl ? 'درباره ما' : 'About' }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
