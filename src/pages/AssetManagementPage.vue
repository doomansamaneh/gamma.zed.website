<script setup lang="ts">
import { computed } from 'vue'
import {
  Navbar,
  HeroSection,
  SectionHeading,
  Card,
  Footer,
  FeatureCard,
  CTASection,
  Badge,
  AssetLifecycleIllustration,
} from '../components'
import zedProductDetail from '../assets/images/zed-product-detail.png'

const props = withDefaults(defineProps<{ locale?: 'fa' | 'en' }>(), {
  locale: 'fa',
})

const isRtl = computed(() => props.locale === 'fa')

const problemItems = [
  {
    title: 'اطلاعات پراکنده',
    description: 'اطلاعات تجهیزات در فایل‌ها و سامانه‌های مختلف نگهداری می‌شود.',
  },
  {
    title: 'نبود پرونده کامل دارایی',
    description: 'مشخصات فنی، اسناد و سوابق در یک مکان واحد وجود ندارد.',
  },
  {
    title: 'تصمیم‌گیری بدون داده',
    description: 'مدیران تصویر دقیقی از وضعیت واقعی تجهیزات ندارند.',
  },
  {
    title: 'افزایش هزینه‌های عملیاتی',
    description: 'خرابی‌های پیش‌بینی نشده باعث توقف تولید و افزایش هزینه می‌شود.',
  },
]

const capabilities = [
  {
    title: 'پرونده دیجیتال دارایی',
    description: 'تمام اطلاعات فنی، تصاویر، اسناد و سوابق در یک مکان قابل جستجو.',
  },
  {
    title: 'ساختار سلسله مراتبی دارایی‌ها',
    description: 'مدیریت سایت، ساختمان، خطوط تولید و تجهیزات در یک درخت سازمانی منظم.',
  },
  {
    title: 'مشخصات فنی تجهیزات',
    description: 'ثبت ویژگی‌ها و اطلاعات تخصصی هر دارایی با استانداردهای یکپارچه.',
  },
  {
    title: 'مدیریت محل استقرار',
    description: 'مشاهده موقعیت، واحد سازمانی و مسئول دارایی به‌صورت لحظه‌ای.',
  },
  {
    title: 'تاریخچه کامل فعالیت‌ها',
    description: 'ثبت تعمیرات، تغییرات و رویدادهای مرتبط برای ردیابی کامل چرخه عمر.',
  },
  {
    title: 'جستجوی هوشمند',
    description: 'دسترسی سریع به اطلاعات هزاران دارایی با جستجوی ساختاریافته.',
  },
]

const lifecycle = [
  'ثبت دارایی',
  'طبقه‌بندی',
  'بهره‌برداری',
  'نگهداری',
  'تعمیرات',
  'تحلیل عملکرد',
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="asset-management" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <section class="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-brand-soft via-surface to-surface p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] md:p-8 lg:p-10">
        <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div class="space-y-5">
            <div class="inline-flex rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              Asset Management
            </div>

            <div class="space-y-3">
              <h1 class="text-3xl font-semibold leading-[1.9] tracking-tight text-text md:text-4xl lg:text-5xl">مدیریت دارایی‌های سازمانی</h1>
              <p class="max-w-2xl text-base leading-7 text-text-muted md:text-lg">تمام اطلاعات دارایی‌های سازمان، در یک پرونده دیجیتال واحد</p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap" :class="props.locale === 'fa' ? 'sm:flex-row-reverse' : ''">
              <a href="/?page=asset-management&lang=fa" class="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover">درخواست جلسه معرفی ZED</a>
              <a href="/#capabilities" class="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-4 py-3 text-sm font-semibold text-text transition hover:bg-surface-muted">مشاهده قابلیت‌ها</a>
            </div>
          </div>

          <div class="rounded-[22px] border border-border bg-surface p-3 shadow-sm">
            <img :src="zedProductDetail" alt="ZED product detail" class="h-auto w-full rounded-[16px] object-cover" />
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="چالش"
          title="چرا مدیریت دارایی در سازمان‌های بزرگ دشوار است؟"
          description="در سازمان‌های صنعتی، پراکندگی اطلاعات و نبود پروندهٔ یکپارچه، تصمیم‌گیری را کند و ناپایدار می‌کند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card v-for="item in problemItems" :key="item.title" class="h-full">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <span class="text-sm font-semibold text-text">{{ item.title }}</span>
                <Badge tone="warning">Core</Badge>
              </div>
              <p class="text-sm leading-6 text-text-muted">{{ item.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="راهکار"
          title="ZED چگونه مدیریت دارایی را متحول می‌کند؟"
          description="یک منبع اطلاعاتی واحد برای تمام دارایی‌های سازمان، با اتصال مستمر بین داده، مدارک، مدارک فنی، زمان‌بندی نگهداری و گزارش‌های مدیریتی."
        />

        <Card>
          <div class="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div class="space-y-2 rounded-2xl border border-border bg-surface-muted p-4">
              <div class="text-sm font-semibold text-brand">Information</div>
              <div class="text-sm text-text-muted">مشخصات فنی و داده‌های دارایی</div>
            </div>
            <div class="rounded-2xl border border-border bg-surface p-5 text-center">
              <div class="text-lg font-semibold text-text">ZED Asset Management</div>
              <div class="mt-2 text-sm text-text-muted">یک منبع اطلاعاتی واحد برای تمام دارایی‌های سازمان</div>
            </div>
            <div class="grid gap-2">
              <div class="rounded-2xl border border-border bg-surface-muted p-4 text-sm text-text-muted">Documents</div>
              <div class="rounded-2xl border border-border bg-surface-muted p-4 text-sm text-text-muted">Maintenance History</div>
              <div class="rounded-2xl border border-border bg-surface-muted p-4 text-sm text-text-muted">Work Orders</div>
            </div>
          </div>
        </Card>
      </section>

      <section id="capabilities" class="space-y-4">
        <SectionHeading
          eyebrow="قابلیت‌ها"
          title="قابلیت‌های مدیریت دارایی ZED"
          description="هر قابلیت با هدف ایجاد پرونده دیجیتال کامل و تصمیم‌گیری بهتر برای تیم‌های عملیاتی طراحی شده است."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard v-for="item in capabilities" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="چرخه عمر"
          title="مدیریت کامل چرخه عمر دارایی"
          description="از ثبت دارایی تا تحلیل عملکرد، ZED یک مسیر مداوم برای کنترل و بهینه‌سازی دارایی‌ها ایجاد می‌کند."
        />

        <AssetLifecycleIllustration :locale="props.locale" />
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="یکپارچگی"
          title="دارایی‌ها در ارتباط با کل سازمان"
          description="مدیریت دارایی در ZED با فرآیندهای نگهداری، انبار، گردش کار و گزارش‌ها در یک بستر یکپارچه هم‌راستا می‌شود."
        />

        <Card>
          <div class="grid gap-3 md:grid-cols-4">
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">Asset Management</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">Maintenance</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">Inventory</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">Analytics</div>
          </div>
        </Card>
      </section>

      <CTASection
        title="آماده توسعه مدیریت دارایی سازمانی خود هستید؟"
        description="در یک جلسه کوتاه، ببینید ZED چگونه پروندهٔ دیجیتال و چرخه عمر دارایی‌های شما را به یک سیستم عملیاتی قابل اتکا تبدیل می‌کند."
        primary-cta="درخواست جلسه معرفی"
        secondary-cta="تماس با ما"
        primary-href="/?page=asset-management&lang=fa"
        secondary-href="/#"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
