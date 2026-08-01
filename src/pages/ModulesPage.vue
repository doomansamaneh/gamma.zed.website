<script setup lang="ts">
import { computed } from 'vue'
import {
  Navbar,
  HeroSection,
  SectionHeading,
  Card,
  Footer,
  CTASection,
  Badge,
} from '../components'

const props = withDefaults(defineProps<{ locale?: 'fa' | 'en' }>(), {
  locale: 'fa',
})

const isRtl = computed(() => props.locale === 'fa')

const modules = [
  {
    title: 'مدیریت دارایی‌ها',
    en: 'Asset Management',
    description: 'ایجاد پرونده دیجیتال و مدیریت چرخه عمر تجهیزات',
    icon: 'asset',
    page: 'asset-management',
  },
  {
    title: 'نگهداری و تعمیرات',
    en: 'Maintenance Management',
    description: 'مدیریت PM، CM و عملیات تعمیرات',
    icon: 'maintenance',
    page: 'maintenance',
  },
  {
    title: 'انبار و قطعات یدکی',
    en: 'Inventory & Spare Parts',
    description: 'مدیریت موجودی و ارتباط قطعات با تجهیزات',
    icon: 'inventory',
    page: 'inventory',
  },
  {
    title: 'گردش کار سازمانی',
    en: 'Workflow Engine',
    description: 'طراحی و اجرای فرآیندهای سازمانی',
    icon: 'workflow',
    page: 'workflow',
  },
  {
    title: 'فرم‌ساز سازمانی',
    en: 'Form Builder',
    description: 'ایجاد فرم‌های پویا بدون توسعه نرم‌افزار',
    icon: 'forms',
    page: 'forms',
  },
  {
    title: 'داشبورد و گزارش‌ها',
    en: 'Business Intelligence',
    description: 'تحلیل عملکرد و تصمیم‌گیری داده‌محور',
    icon: 'analytics',
    page: 'reporting',
  },
  {
    title: 'Inbox سازمانی',
    en: 'Enterprise Inbox',
    description: 'مرکز اعلان‌ها، تأییدها و کارهای در جریان',
    icon: 'inbox',
    page: 'inbox',
  },
  {
    title: 'یکپارچه‌سازی',
    en: 'API Integration',
    description: 'ارتباط با سیستم‌های سازمانی',
    icon: 'integration',
  },
]

const benefits = [
  {
    title: 'یکپارچگی',
    description: 'یک منبع حقیقت برای داده، فرآیند و عملیات سازمانی.',
  },
  {
    title: 'دقت عملیاتی',
    description: 'هماهنگی بهتر میان تیم‌های فنی، انبار و نگهداری.',
  },
  {
    title: 'تصمیم‌گیری سریع',
    description: 'دسته‌بندی، گزارش و شاخص‌های مهم در یک نگاه.',
  },
  {
    title: 'استقرار سازمانی',
    description: 'سازگار با نیازهای پیچیده و رشد تدریجی سازمان.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="modules" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <HeroSection
        title="یک پلتفرم، تمام فرآیندهای مدیریت دارایی"
        subtitle="ZED تمام اطلاعات، فرآیندها و عملیات سازمان را در یک بستر یکپارچه به هم متصل می‌کند."
        eyebrow="Platform Modules"
        primary-cta="درخواست جلسه معرفی ZED"
        secondary-cta="مشاهده راهنما"
        :primary-href="`/?page=modules&lang=${props.locale}`"
        :secondary-href="`#modules-grid`"
        :locale="props.locale"
      />

      <section class="space-y-4">
        <SectionHeading
          eyebrow="اکوسیستم"
          title="همه چیز در یک اکوسیستم یکپارچه"
          description="ZED به‌عنوان یک هسته مرکزی، داده، گردش کار، هوش و عملیات را به یک مسیر مشترک متصل می‌کند."
        />

        <Card>
          <div class="grid gap-4 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div class="rounded-[24px] border border-border bg-[#F5F7FA] p-5">
              <div class="mx-auto flex h-64 max-w-md items-center justify-center rounded-full border-[16px] border-brand/10 bg-white shadow-sm">
                <div class="flex h-40 w-40 flex-col items-center justify-center rounded-full border border-border bg-brand-soft text-center">
                  <div class="text-lg font-semibold text-text">ZED Platform</div>
                  <div class="mt-2 text-xs text-text-muted">Data • Workflow • Intelligence</div>
                </div>
              </div>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">Asset Management</div>
              <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">Maintenance</div>
              <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">Inventory</div>
              <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">Workflow</div>
              <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">Forms</div>
              <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">Analytics</div>
            </div>
          </div>
        </Card>
      </section>

      <section id="modules-grid" class="space-y-4">
        <SectionHeading
          eyebrow="ماژول‌ها"
          title="ماژول‌های اصلی پلتفرم ZED"
          description="هر ماژول در کنار سایر واحدها، به یک سیستم اطلاعاتی واحد و یک جریان اجرای هماهنگ کمک می‌کند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <template v-for="module in modules" :key="module.title">
            <a
              v-if="module.page"
              :href="`/?page=${module.page}&lang=${props.locale}`"
              class="block h-full transition hover:-translate-y-0.5"
            >
              <Card class="h-full">
                <div class="space-y-3">
                  <div class="flex items-start justify-between gap-3">
                    <div class="text-base font-semibold text-text">{{ module.title }}</div>
                    <Badge tone="info" class="shrink-0 text-[10px]">{{ module.en }}</Badge>
                  </div>
                  <p class="text-sm leading-6 text-text-muted">{{ module.description }}</p>
                </div>
              </Card>
            </a>

            <Card v-else class="h-full">
              <div class="space-y-3">
                <div class="flex items-start justify-between gap-3">
                  <div class="text-base font-semibold text-text">{{ module.title }}</div>
                  <Badge tone="info" class="shrink-0 text-[10px]">{{ module.en }}</Badge>
                </div>
                <p class="text-sm leading-6 text-text-muted">{{ module.description }}</p>
              </div>
            </Card>
          </template>
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="مزایا"
          title="مزایای پلتفرم یکپارچه ZED"
          description="یکپارچگی میان ماژول‌ها باعث افزایش شفافیت، کاهش دوباره‌کاری و تسهیل تصمیم‌گیری می‌شود."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card v-for="benefit in benefits" :key="benefit.title" class="h-full">
            <div class="space-y-3">
              <div class="text-base font-semibold text-text">{{ benefit.title }}</div>
              <p class="text-sm leading-6 text-text-muted">{{ benefit.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <CTASection
        title="پلتفرم شما آماده رشد به‌صورت یکپارچه است؟"
        description="با ZED، ماژول‌های حاکمیتی و عملیاتی در یک مسیر مشترک قرار می‌گیرند و کنترل سازمانی شما بهبود می‌یابد."
        primary-cta="درخواست Demo"
        secondary-cta="تماس با ما"
        :primary-href="`/?page=modules&lang=${props.locale}`"
        :secondary-href="`/?lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
