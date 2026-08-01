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
} from '../components'

const props = withDefaults(defineProps<{ locale?: 'fa' | 'en' }>(), {
  locale: 'fa',
})

const isRtl = computed(() => props.locale === 'fa')

const challenges = [
  { title: 'گزارش‌های نامتوازن', description: 'اطلاعات از منابع مختلف و با فرمت‌های متفاوت به تصمیم‌گیران می‌رسد.' },
  { title: 'عدم نمایش شاخص', description: 'شاخص‌های مهم سازمانی در یک نگاه به مدیران نشان داده نمی‌شوند.' },
  { title: 'داده‌های دست‌ساز', description: 'جمع‌آوری داده برای گزارش به‌صورت دستی و زمان‌بر انجام می‌شود.' },
  { title: 'تأخیر در تصمیم‌گیری', description: 'از دست رفتن زمان برای تحلیل داده، باعث عقب‌افتادن عملیات می‌شود.' },
]

const capabilities = [
  { title: 'داشبوردهای مدیریتی', description: 'نمایش شاخص‌های عملکردی، سلامت دارایی و وضعیت عملیات در یک نگاه.' },
  { title: 'گزارش‌های استاندارد', description: 'ایجاد خروجی‌های ثابت برای عملکرد، انبار، نگهداری و جریان درخواست‌ها.' },
  { title: 'تحلیل عملکرد', description: 'ترکیب داده‌های سازمانی برای سنجش روندها و افزایش کیفیت تصمیم‌گیری.' },
  { title: 'اشتراک‌گذاری گزارش', description: 'انتشار خروجی‌ها برای مدیران، تیم‌های عملیاتی و واحدهای پشتیبانی.' },
  { title: 'شاخص‌های قابل تنظیم', description: 'تعریف KPI و معیارهای اختصاصی متناسب با اکوسیستم سازمانی.' },
  { title: 'سازگاری با داده‌های لحظه‌ای', description: 'گزارش‌گیری از داده‌های در حال تغییر با نگاه به وضعیت جاری و مسیرهای گذشته.' },
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="modules" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <HeroSection
        title="گزارش و تحلیل سازمانی"
        subtitle="نمایش داده‌های عملیاتی، شاخص‌های اصلی و روندهای مدیریتی برای تصمیم‌گیری سریع و دقیق"
        eyebrow="Reporting"
        primary-cta="درخواست جلسه معرفی"
        secondary-cta="مشاهده قابلیت‌ها"
        :primary-href="`/?page=reporting&lang=${props.locale}`"
        :secondary-href="`#capabilities`"
        :locale="props.locale"
      />

      <section class="space-y-4">
        <SectionHeading
          eyebrow="چالش"
          title="گزارش‌های سازمانی چرا اغلب ناقص هستند؟"
          description="وقتی داده‌ها در سامانه‌های پراکنده جمع می‌شوند، مدیران با تصویری نامطمئن از وضعیت واقعی روبه‌رو می‌شوند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card v-for="item in challenges" :key="item.title" class="h-full">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <span class="text-sm font-semibold text-text">{{ item.title }}</span>
                <Badge tone="warning">Report</Badge>
              </div>
              <p class="text-sm leading-6 text-text-muted">{{ item.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="capabilities" class="space-y-4">
        <SectionHeading
          eyebrow="قابلیت‌ها"
          title="قابلیت‌های گزارش‌گیری ZED"
          description="ZED با داشبورد و تحلیل‌های منسجم، تصویر لحظه‌ای از عملکرد دارایی، نگهداری و انبار ارائه می‌دهد."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard v-for="item in capabilities" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="داشبورد"
          title="یک نگاه به سلامت عملیات"
          description="از شاخص‌های عملکردی تا گزارش‌های خلاصه، همه چیز در یک بستر قابل مشاهده و اشتراک‌گذاری قرار می‌گیرد."
        />

        <Card>
          <div class="grid gap-3 md:grid-cols-4">
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">KPI</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">شاخص نگهداری</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">انبار</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">تصمیم‌گیری</div>
          </div>
        </Card>
      </section>

      <CTASection
        title="به تصویر شفاف‌تر از وضعیت عملیات نیاز دارید؟"
        description="گزارش‌های ZED به مدیران کمک می‌کنند سیاست‌های عملیاتی را سریع‌تر، دقیق‌تر و با اطمینان بیشتری اجرا کنند."
        primary-cta="درخواست دمو"
        secondary-cta="بازگشت به ماژول‌ها"
        :primary-href="`/?page=reporting&lang=${props.locale}`"
        :secondary-href="`/?page=modules&lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
