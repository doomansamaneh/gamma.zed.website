<script setup lang="ts">
import { computed } from 'vue'
import {
  Navbar,
  SectionHeading,
  Card,
  Footer,
  Badge,
  FeatureCard,
  CTASection,
} from '../components'

const props = withDefaults(defineProps<{ locale?: 'fa' | 'en' }>(), {
  locale: 'fa',
})

const isRtl = computed(() => props.locale === 'fa')

const story = [
  {
    title: 'بیش از ۱۵ سال تجربه‌ی اجرایی',
    description: 'در طراحی، پیاده‌سازی و بهبود سامانه‌های سازمانی برای محیط‌های پیچیده و حساس، تجربه‌ای عملی و کاربردی داریم.',
  },
  {
    title: 'بیش از ۱۵۰ پیاده‌سازی بزرگ',
    description: 'کار ما در سازمان‌های بزرگ نشان داده که راهکارها باید هم از نظر فنی پایدار باشند و هم از نظر عملیاتی قابل پذیرش.',
  },
  {
    title: 'درک عمیق از درد کسب‌وکار',
    description: 'ما با چالش‌های سازمانی واقعی سروکار داریم؛ از نبود شفافیت تا اختلال در گردش کار و هزینه‌های عملیاتی.',
  },
]

const sectors = [
  'نفت و گاز',
  'پتروشیمی',
  'بانک‌ها و مؤسسات مالی',
  'بیمه',
  'سازمان‌های دولتی و عمومی',
]

const focusAreas = [
  {
    title: 'شفافیت عملیاتی',
    description: 'دارایی‌ها، گردش کار، موجودی و گزارش‌ها در یک نمای مشترک و قابل اعتماد کنار هم قرار می‌گیرند.',
  },
  {
    title: 'انضباط فرایندی',
    description: 'تاییدها، درخواست‌ها و اجرای عملیات در یک مسیر استاندارد و قابل کنترل اجرا می‌شوند.',
  },
  {
    title: 'تحول قابل اندازه‌گیری',
    description: 'با بهبود نظم عملیاتی، سرعت تصمیم‌گیری و اطمینان از اجرای کارها به‌صورت پایدار رشد می‌کنیم.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="about" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <section class="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-brand-soft via-surface to-surface p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] md:p-8 lg:p-10">
        <div class="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div class="space-y-5">
            <div class="inline-flex rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              درباره ما
            </div>

            <div class="space-y-3">
              <h1 class="text-3xl font-semibold leading-[1.9] tracking-tight text-text md:text-4xl lg:text-5xl">
                تجربه‌ای عملی برای حل واقعی مشکلات سازمانی
              </h1>
              <p class="max-w-2xl text-base leading-7 text-text-muted md:text-lg">
                ما با درد سازمان‌ها آشناییم؛ از پراکندگی داده تا نبود شفافیت در تصمیم‌گیری و ضعف در اجرای قانون‌های کسب‌وکار.
                برای همین، راه‌حل‌هایی طراحی کرده‌ایم که در عمل، نظم، کنترل و قابلیت اجرا را به سازمان بازمی‌گردانند.
              </p>
            </div>

            <div class="flex flex-wrap gap-2">
              <Badge tone="info">ZED Core</Badge>
              <Badge tone="success">تحویل سازمانی</Badge>
              <Badge tone="warning">حاکمیت عملیاتی</Badge>
            </div>
          </div>

          <Card class="h-full">
            <div class="space-y-4">
              <SectionHeading
                eyebrow="سابقه"
                title="بیش از ۱۵۰ سازمان بزرگ در مسیر همکاری"
                description="از حوزه نفت و گاز و پتروشیمی تا بانک‌ها، بیمه‌ها و سازمان‌های دولتی، تجربه‌ی ما در محیط‌هایی شکل گرفته که دقت، ناوبری دقیق و حاکمیت از اولویت‌های اصلی بوده‌اند."
              />

              <div class="grid gap-3 sm:grid-cols-2">
                <div v-for="item in story" :key="item.title" class="rounded-2xl border border-border bg-surface-muted p-4">
                  <div class="text-sm font-semibold text-text">{{ item.title }}</div>
                  <p class="mt-2 text-sm leading-6 text-text-muted">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="پوشش"
          title="در حوزه‌های حیاتی و حساس، با سازمان‌های بزرگ همکاری کرده‌ایم"
          description="راهکارهای ما در سازمان‌هایی به کار گرفته شده‌اند که عملکردشان به نظم، شفافیت و اعتماد در اجرای فرایندها وابسته است."
        />

        <div class="grid gap-4 md:grid-cols-3">
          <Card v-for="sector in sectors" :key="sector" class="h-full text-center">
            <div class="text-sm font-semibold text-text">{{ sector }}</div>
          </Card>
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="تمرکز"
          title="چه چیزی به نتیجه می‌رسد؟"
          description="تمرکز ما بر ایجاد یک بستر مشترک برای داده، فرایند و اجرای تصمیم‌هاست؛ بسترهایی که تیم‌ها بتوانند با اطمینان در آن حرکت کنند."
        />

        <div class="grid gap-4 md:grid-cols-3">
          <FeatureCard v-for="item in focusAreas" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <CTASection
        title="آماده‌اید در مسیر تحول عملیاتی همراه شوید؟"
        description="با یک جلسه کوتاه، ساختار فعلی سازمان خود را مرور می‌کنیم و می‌بینیم ZED چگونه می‌تواند در مسیر اعتماد، شفافیت و اجرای دقیق به شما کمک کند."
        primary-cta="درخواست جلسه معرفی"
        secondary-cta="تماس با ما"
        :primary-href="`/?page=asset-management&lang=${props.locale}`"
        :secondary-href="`/?page=platform&lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
