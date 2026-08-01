<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title?: string
  subtitle?: string
  locale?: 'fa' | 'en'
}>(), {
  title: 'چرخه عمر دارایی',
  subtitle: 'مدیریت یکپارچه دارایی از ایجاد تا تحلیل عملکرد',
  locale: 'fa',
})

const isRtl = computed(() => props.locale === 'fa')

const content = computed(() => props.locale === 'fa'
  ? {
      title: 'چرخه عمر دارایی',
      subtitle: 'مدیریت یکپارچه دارایی از ایجاد تا تحلیل عملکرد',
      steps: [
        {
          title: 'ثبت دارایی',
          label: 'Asset Registration',
          icon: 'plus',
          description: 'ایجاد پرونده دیجیتال دارایی',
        },
        {
          title: 'طبقه‌بندی',
          label: 'Classification',
          icon: 'hierarchy',
          description: 'ساختار سایت، ساختمان و تجهیزات',
        },
        {
          title: 'بهره‌برداری',
          label: 'Operation',
          icon: 'machine',
          description: 'استفاده و پایش عملکرد تجهیز',
        },
        {
          title: 'نگهداری',
          label: 'Maintenance',
          icon: 'maintenance',
          description: 'PM و فعالیت‌های سرویس دوره‌ای',
        },
        {
          title: 'تعمیرات',
          label: 'Repair',
          icon: 'repair',
          description: 'مدیریت خرابی و عملیات اصلاحی',
        },
        {
          title: 'تحلیل عملکرد',
          label: 'Performance Analysis',
          icon: 'analytics',
          description: 'تحلیل KPI و تصمیم‌گیری',
        },
      ],
    }
  : {
      title: 'Asset Lifecycle',
      subtitle: 'Unified management of assets from creation through performance analysis',
      steps: [
        {
          title: 'Asset Registration',
          label: 'Asset Registration',
          icon: 'plus',
          description: 'Create the digital asset record',
        },
        {
          title: 'Classification',
          label: 'Classification',
          icon: 'hierarchy',
          description: 'Organize sites, buildings, and equipment',
        },
        {
          title: 'Operation',
          label: 'Operation',
          icon: 'machine',
          description: 'Use and monitor equipment performance',
        },
        {
          title: 'Maintenance',
          label: 'Maintenance',
          icon: 'maintenance',
          description: 'PM and scheduled service activities',
        },
        {
          title: 'Repair',
          label: 'Repair',
          icon: 'repair',
          description: 'Manage failures and corrective actions',
        },
        {
          title: 'Performance Analysis',
          label: 'Performance Analysis',
          icon: 'analytics',
          description: 'Analyze KPI and drive decisions',
        },
      ],
    })
</script>

<template>
  <section
    class="rounded-[28px] border border-border bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:p-8"
    :dir="isRtl ? 'rtl' : 'ltr'"
  >
    <div class="mb-8 text-center">
      <div class="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">ZED</div>
      <h3 class="mt-3 text-2xl font-semibold text-text md:text-3xl">{{ content.title }}</h3>
      <p class="mt-2 text-sm text-text-muted md:text-base">{{ content.subtitle }}</p>
    </div>

    <div class="rounded-[24px] border border-border bg-[#F5F7FA] p-5 md:p-7">
      <div class="mb-6 grid gap-3 text-center sm:grid-cols-3 sm:items-center">
        <div class="rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-text shadow-sm">
          Physical Asset
        </div>
        <div class="text-2xl text-brand">↓</div>
        <div class="rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-text shadow-sm">
          Digital Asset Intelligence
        </div>
      </div>

      <div class="relative overflow-hidden rounded-[20px] border border-border bg-white p-4 md:p-6">
        <div class="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

        <div class="relative grid gap-4 md:grid-cols-6">
          <div
            v-for="(step, index) in content.steps"
            :key="step.title"
            class="relative z-10 flex flex-col items-center gap-3"
          >
            <div class="mb-2 flex h-14 w-14 items-center justify-center rounded-full border border-brand/30 bg-brand-soft shadow-sm">
              <svg v-if="step.icon === 'plus'" viewBox="0 0 24 24" class="h-7 w-7 text-brand" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
                <path d="M12 5v14M5 12h14" />
                <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke-width="1.4" />
              </svg>
              <svg v-else-if="step.icon === 'hierarchy'" viewBox="0 0 24 24" class="h-7 w-7 text-brand" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 4v16" />
                <path d="M4 8h8M12 8h8M6 12h4M14 12h4M8 16h4M16 16h4" />
                <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="4" cy="8" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="20" cy="8" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              <svg v-else-if="step.icon === 'machine'" viewBox="0 0 24 24" class="h-7 w-7 text-brand" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="7" width="16" height="10" rx="2" />
                <path d="M8 7V4M16 7V4M8 17v3M16 17v3" />
                <path d="M9 11h6" />
                <path d="M12 8v6" />
              </svg>
              <svg v-else-if="step.icon === 'maintenance'" viewBox="0 0 24 24" class="h-7 w-7 text-brand" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 4v5" />
                <path d="M10 7h4" />
                <path d="M9 14l-4 4" />
                <path d="M15 14l4 4" />
                <path d="M7 14h10" />
                <path d="M12 14v6" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <svg v-else-if="step.icon === 'repair'" viewBox="0 0 24 24" class="h-7 w-7 text-brand" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 8l4-4 7 7-4 4" />
                <path d="M4 16l4 4" />
                <path d="M14 5l5 5" />
                <path d="M6 16l2 2" />
              </svg>
              <svg v-else viewBox="0 0 24 24" class="h-7 w-7 text-brand" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="5" width="16" height="14" rx="2" />
                <path d="M8 9h8M8 13h5" />
                <path d="M17 17l3-3" />
              </svg>
            </div>

            <div class="text-center rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white">
              {{ step.label }}
            </div>

            <div class="text-center">
              <div class="text-sm font-semibold text-text">{{ step.title }}</div>
              <div class="mt-1 text-xs leading-5 text-text-muted">{{ step.description }}</div>
            </div>

            <div v-if="index < content.steps.length - 1" class="hidden md:block absolute left-[calc(100%+0.25rem)] top-7 h-px w-10 bg-gradient-to-r from-brand/70 to-brand/20" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
