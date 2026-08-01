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
  FeatureCard,
} from '../components'

const props = withDefaults(defineProps<{ locale?: 'fa' | 'en' }>(), {
  locale: 'fa',
})

const isRtl = computed(() => props.locale === 'fa')

const industries = [
  {
    title: 'صنایع تولیدی',
    description: 'کاهش توقف خطوط تولید، بهبود برنامه‌ریزی نگهداری و افزایش بهره‌وری تجهیزات حیاتی.',
  },
  {
    title: 'انرژی و برق',
    description: 'کنترل بهتر دارایی‌های حساس، طیف کامل عملیات تعمیراتی و سطح بالاتر اطمینان عملیاتی.',
  },
  {
    title: 'بانک و خدمات مالی',
    description: 'هماهنگی فرایندهای زیرساختی، امنیت اطلاعات و اجرای استانداردهای خدماتی.',
  },
  {
    title: 'دولت و زیرساخت',
    description: 'روندهای تکرارشونده، گزارش‌های حسابرسی و ردیابی دقیق روی دارایی‌ها و سرویس‌ها.',
  },
  {
    title: 'سلامت و بیمارستان',
    description: 'حفظ دسترسی به تجهیزات حیاتی و مدیریت نگهداری مستمر با الزامات تخصصی سخت.',
  },
  {
    title: 'حمل‌ونقل و ناوبری',
    description: 'مدیریت ماشین‌آلات، نگهداری برنامه‌ریزیشده و کاهش توقف ناوگان در مسیرهای حیاتی.',
  },
]

const benefits = [
  {
    title: 'هماهنگی عملیاتی',
    description: 'مدیریت یکپارچه دارایی، نگهداری و جریان داده‌ها در یک چارچوب مشترک.',
  },
  {
    title: 'شکیبایی برای رشد',
    description: 'ارائه مدل قابل گسترش برای سازمان‌های پرتنوع و چندمجموعه‌ای.',
  },
  {
    title: 'اعتماد سازمانی',
    description: 'ساختار حسابرسی‌پذیر، قابل کنترل و سازگار با الزامات حاکمیتی.',
  },
  {
    title: 'سازگاری با نیاز صنعت',
    description: 'طراحی محصول برای مواقع بحرانی، عملیات حساس و نگاه مدیریتی به داده‌ها.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="industry" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <HeroSection
        title="راهکارهای ZED برای صنایع مختلف"
        subtitle="برای سازمان‌هایی طراحی شده که در محیط‌های حساس، نیاز به کنترل عملیاتی، ردیابی دقیق و هماهنگی بالا دارند"
        eyebrow="Industries"
        primary-cta="درخواست جلسه معرفی"
        secondary-cta="مشاهده ماژول‌ها"
        :primary-href="`/?page=industry&lang=${props.locale}`"
        :secondary-href="`/?page=modules&lang=${props.locale}`"
        :locale="props.locale"
      />

      <section class="space-y-4">
        <SectionHeading
          eyebrow="صنایع"
          title="برای محیط‌های عملیاتی حیاتی و پیچیده"
          description="ZED می‌تواند در حوزه‌های مختلفی از تولید تا خدمات، چارچوب یکپارچه‌ای برای نگهداری، جریان کار و گزارش سازمانی فراهم کند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Card v-for="item in industries" :key="item.title" class="h-full">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <span class="text-base font-semibold text-text">{{ item.title }}</span>
                <Badge tone="info">Sector</Badge>
              </div>
              <p class="text-sm leading-6 text-text-muted">{{ item.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="مزایای راهکار"
          title="چگونه ZED برای نیاز صنعت پاسخ می‌دهد؟"
          description="در هر حوزه‌ای که داده‌ها، دارایی‌ها و فرایندهای عملیاتی به هم وابسته‌اند، ZED می‌تواند به‌صورت یکپارچه و قابل تنظیم نقش‌آفرینی کند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard v-for="item in benefits" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="نقشه استفاده"
          title="از صنعت تا عملیات روزمره"
          description="ZED برای استفاده در مدل‌های متعدد سازمانی طراحی شده است؛ از مسیرهای فنی تا گزارش‌های مدیریتی و هماهنگی تیمی."
        />

        <Card>
          <div class="grid gap-3 md:grid-cols-5">
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">اعتماد</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">عملیات</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">گزارش</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">کنترل</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">پاسخ</div>
          </div>
        </Card>
      </section>

      <CTASection
        title="آیا به یک رویکرد صنعتی و قابل تنظیم برای عملیات سازمانی نیاز دارید؟"
        description="ZED برای سازمان‌هایی ساخته شده که در هر صنعت، یک مدل قابل اعتماد از کنترل دارایی، داده و گردش کار نیاز دارند."
        primary-cta="درخواست دمو"
        secondary-cta="بازگشت به پلتفرم"
        :primary-href="`/?page=industry&lang=${props.locale}`"
        :secondary-href="`/?page=platform&lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
