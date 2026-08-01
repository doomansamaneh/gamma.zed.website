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
  { title: 'پراکندگی مسیرها', description: 'فرآیندهای درخواست و تأیید در چند ابزار جداگانه اجرا می‌شوند.' },
  { title: 'عدم شفافیت وضعیت', description: 'کارها و تصمیم‌های در جریان با ردیابی کامل به مدیران نشان داده نمی‌شوند.' },
  { title: 'رعایت SLA نامنظم', description: 'نمایش زمان پاسخ و تسلیم کارها به‌صورت استاندارد انجام نمی‌شود.' },
  { title: 'دوباره‌کاری مدیریتی', description: 'بازبینی و جمع‌آوری اطلاعات از مسیرهای مختلف باعث افت سرعت می‌شود.' },
]

const capabilities = [
  { title: 'طراحی جریان کار', description: 'ساخت مسیرهای استاندارد برای درخواست، بررسی، تأیید و اجرای عملیات.' },
  { title: 'قوانین کسب‌وکار', description: 'تعریف منطق تصمیم‌گیری، مسیرهای شرطی و عواقب هر اقدام.' },
  { title: 'تقسیم وظایف', description: 'تخصیص نقش‌ها، مسئولیت‌ها و سطح دسترسی برای هر مرحله.' },
  { title: 'اعلان و یادآوری', description: 'ارسال اعلان به کاربر یا تیم برای انجام اقدام‌های هویت‌دار.' },
  { title: 'ردیابی SLA', description: 'مقایسه زمان انجام و تداوم رسیدگی برای ارائه گزارش و اصلاح.' },
  { title: 'مدیریت Inbox', description: 'تمرکز کارهای روزانه، تأییدها و اعلان‌ها در یک مسیر قابل نظارت.' },
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="modules" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <HeroSection
        title="گردش کار سازمانی"
        subtitle="طراحی، اجرا و ردیابی جریان‌های داخلی در یک مسیر هماهنگ و قابل کنترل"
        eyebrow="Workflow Engine"
        primary-cta="درخواست جلسه معرفی"
        secondary-cta="مشاهده قابلیت‌ها"
        :primary-href="`/?page=workflow&lang=${props.locale}`"
        :secondary-href="`#capabilities`"
        :locale="props.locale"
      />

      <section class="space-y-4">
        <SectionHeading
          eyebrow="چالش"
          title="چرا گردش کارهای سازمانی گاهی شکست می‌خورند؟"
          description="در پروژه‌های پیچیده، مسیرهای تصمیم‌گیری و تائیدها بدون یک چارچوب مشخص، باعث تأخیر و ناهماهنگی می‌شوند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card v-for="item in challenges" :key="item.title" class="h-full">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <span class="text-sm font-semibold text-text">{{ item.title }}</span>
                <Badge tone="warning">Flow</Badge>
              </div>
              <p class="text-sm leading-6 text-text-muted">{{ item.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="capabilities" class="space-y-4">
        <SectionHeading
          eyebrow="قابلیت‌ها"
          title="توانمندی‌های موتور گردش کار ZED"
          description="ZED مسیرهای کاری را از ثبت درخواست تا اجرایی شدن کامل و ردیابی پیگیری می‌کند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard v-for="item in capabilities" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="مسیر اجرا"
          title="یک جریان واحد برای تمامی درخواست‌ها"
          description="کارهای استاندارد در ZED با مدیریت نقش‌ها، اولویت و اعلان‌ها به صورت یکپارچه اجرا می‌شوند."
        />

        <Card>
          <div class="grid gap-3 md:grid-cols-4">
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">درخواست</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">بازبینی</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">تأیید</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">اجرا</div>
          </div>
        </Card>
      </section>

      <CTASection
        title="می‌خواهید مسیر تصمیم‌گیری در سازمانتان استاندارد شود؟"
        description="با ZED، گردش کارهای سازمانی در یک چارچوب شفاف، قابل تنظیم و قابل پیگیری اجرا می‌شوند."
        primary-cta="درخواست دمو"
        secondary-cta="بازگشت به ماژول‌ها"
        :primary-href="`/?page=workflow&lang=${props.locale}`"
        :secondary-href="`/?page=modules&lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
