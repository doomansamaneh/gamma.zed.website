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
import zedAttribute from '../assets/images/zed-attribute.png'

const props = withDefaults(defineProps<{ locale?: 'fa' | 'en' }>(), {
  locale: 'fa',
})

const isRtl = computed(() => props.locale === 'fa')

const challenges = [
  { title: 'فرم‌های گسسته', description: 'ثبت داده‌ها در فایل‌ها و فرم‌های مجزا انجام می‌شود و به‌راحتی به یکدیگر متصل نمی‌شوند.' },
  { title: 'جمع‌آوری دستی', description: 'داده‌ها به‌صورت دستی وارد می‌شوند و در نتیجه نرخ خطا بالا می‌رود.' },
  { title: 'نبود منطق پویا', description: 'فرم‌ها به صورت ثابت هستند و برای شرایط متغیر سازمان پاسخ‌گو نیستند.' },
  { title: 'عدم استانداردسازی', description: 'الگوهای فرم بین تیم‌ها از هم فاصله می‌گیرند.' },
]

const capabilities = [
  { title: 'ساخت فرم پویا', description: 'ایجاد فرم‌های بسته به شرایط، نقش و حوزهٔ کاری بدون توسعه سفارشی.' },
  { title: 'فیلدهای قابل تنظیم', description: 'پشتیبانی از فیلدهای متنی، عددی، انتخابی، فایل و وابستگی‌های شرطی.' },
  { title: 'قالب‌های استاندارد', description: 'بازنشر الگوهای فرم در پروژه‌ها و عملیات مختلف با حفظ سازگاری.' },
  { title: 'یکپارچگی خروجی', description: 'پاسخ‌های فرم در جریان داده، گزارش و تصمیم‌گیری به‌صورت یکپارچه استفاده می‌شوند.' },
  { title: 'دسترسی و نقش', description: 'کنترل ورودی، بازبینی و تایید فرم‌ها بر اساس نقش‌های سازمانی.' },
  { title: 'مدارک و پیوست', description: 'تضمین ثبت اسناد و پیوست‌ها در کنار داده‌های اصلی هر درخواست.' },
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="modules" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <section class="relative overflow-hidden rounded-[28px] border border-border bg-gradient-to-br from-brand-soft via-surface to-surface p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] md:p-8 lg:p-10">
        <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div class="space-y-5">
            <div class="inline-flex rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              Forms
            </div>

            <div class="space-y-3">
              <h1 class="text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">فرم‌ساز سازمانی</h1>
              <p class="max-w-2xl text-base leading-7 text-text-muted md:text-lg">ایجاد فرم‌های پویا و استاندارد برای جمع‌آوری داده‌های عملیاتی در یک مسیر قابل استفاده مجدد</p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap" :class="props.locale === 'fa' ? 'sm:flex-row-reverse' : ''">
              <a href="/?page=forms&lang=fa" class="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover">درخواست جلسه معرفی</a>
              <a href="#capabilities" class="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-4 py-3 text-sm font-semibold text-text transition hover:bg-surface-muted">مشاهده قابلیت‌ها</a>
            </div>
          </div>

          <div class="rounded-[22px] border border-border bg-surface p-3 shadow-sm">
            <img :src="zedAttribute" alt="ZED attribute image" class="h-auto w-full rounded-[16px] object-cover" />
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="چالش"
          title="فرم‌های سازمانی چه شکلی باید باشند؟"
          description="فرم‌ها باید هم استاندارد باشد و هم قابلیت تغییر در مسیرهای عملیاتی متنوع را داشته باشد."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card v-for="item in challenges" :key="item.title" class="h-full">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <span class="text-sm font-semibold text-text">{{ item.title }}</span>
                <Badge tone="warning">Form</Badge>
              </div>
              <p class="text-sm leading-6 text-text-muted">{{ item.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="capabilities" class="space-y-4">
        <SectionHeading
          eyebrow="قابلیت‌ها"
          title="امکانات فرم‌ساز ZED"
          description="فرم‌ها در ZED به‌صورت ساختاریافته، قابل استفاده مجدد و سازگار با جریان دادهٔ سازمانی طراحی می‌شوند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard v-for="item in capabilities" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="پیش‌نمایش مصرف"
          title="از فرم تا جریان داده"
          description="فرم‌های ساخته‌شده در ZED به‌صورت مستقیم در عملیات، گزارش و گردش کار به کار می‌آیند."
        />

        <Card>
          <div class="grid gap-3 md:grid-cols-4">
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">داده</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">بررسی</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">تأیید</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">گزارش</div>
          </div>
        </Card>
      </section>

      <CTASection
        title="می‌خواهید داده‌های عملیاتی سازمان را فرم‌محور و استاندارد کنید؟"
        description="با ZED، فرم‌های پویا به بخشی از جریان تصمیم‌گیری، گزارش و عملیات سازمانی تبدیل می‌شوند."
        primary-cta="درخواست دمو"
        secondary-cta="بازگشت به ماژول‌ها"
        :primary-href="`/?page=forms&lang=${props.locale}`"
        :secondary-href="`/?page=modules&lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
