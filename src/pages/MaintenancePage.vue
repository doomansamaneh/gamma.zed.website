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
  {
    title: 'برنامه‌ریزی نامنظم',
    description: 'کارهای نگهداری بدون زمان‌بندی واحد و بدون ربط روشن به وضعیت دارایی انجام می‌شوند.',
  },
  {
    title: 'عدم ردیابی سوابق',
    description: 'تاریخچه تعمیرات، بازبینی‌ها و بررسی‌های فنی در قالب یک پرونده قابل استناد باقی نمی‌ماند.',
  },
  {
    title: 'وقوع خرابی ناگهانی',
    description: 'نبود پیش‌بینی به موقع در صورت‌های قطعی، تولید و کیفیت را با ریسک بالا مواجه می‌کند.',
  },
  {
    title: 'هماهنگی ضعیف تیم‌ها',
    description: 'کارهای عملیاتی میان نگهداری، انبار و مدیران به‌صورت پراکنده و بدون جریان واحد انجام می‌شوند.',
  },
]

const capabilities = [
  {
    title: 'برنامه‌ریزی تعمیرات',
    description: 'برنامه‌ریزی PM و CM با زمان‌بندی روشن، اولویت‌بندی و هماهنگی سازمانی.',
  },
  {
    title: 'تکلیف و دستورکار',
    description: 'صدور دستورکار، تخصیص نقش‌ها و ردیابی پیشرفت در یک گردش کار منظم.',
  },
  {
    title: 'ثبت بازبینی و کیفیت',
    description: 'ذخیره گزارش‌های بازبینی، نتایج بررسی، آمار خرابی و اقدامات اصلاحی.',
  },
  {
    title: 'تحلیل عملکرد تجهیزات',
    description: 'ترکیب داده‌های تعمیرات با شاخص‌های بهره‌وری، توقف و هزینه برای تصمیم‌گیری دقیق‌تر.',
  },
  {
    title: 'هشدار و اعلان',
    description: 'یادآوری‌های خودکار برای چک‌لیست‌ها، زمان‌بندی‌ها و اقدام‌های موردنیاز.',
  },
  {
    title: 'گزارش‌گیری مدیریتی',
    description: 'نمایش شاخص‌های کلیدی نگهداری برای مدیران ارشد، تیم‌های فنی و واحدهای پشتیبانی.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="maintenance" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <HeroSection
        title="نگهداری و تعمیرات هوشمند"
        subtitle="مدیریت برنامه‌ریزی، اجرای تعمیرات و ردیابی گذشته‌ی عملکرد تجهیزات در یک مسیر عملیاتی یکپارچه"
        eyebrow="Maintenance Management"
        primary-cta="درخواست جلسه معرفی"
        secondary-cta="مشاهده قابلیت‌ها"
        :primary-href="`/?page=maintenance&lang=${props.locale}`"
        :secondary-href="`#capabilities`"
        :locale="props.locale"
      />

      <section class="space-y-4">
        <SectionHeading
          eyebrow="چالش"
          title="چرا نگهداری در سازمان‌های صنعتی با چالش همراه است؟"
          description="هنگامی که برنامه‌ریزی، دستورکار و سوابق تعمیرات از هم جدا باشند، عملکرد فنی و تصمیم‌گیری مدیریتی دچار ریسک می‌شود."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card v-for="item in challenges" :key="item.title" class="h-full">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <span class="text-sm font-semibold text-text">{{ item.title }}</span>
                <Badge tone="warning">Ops</Badge>
              </div>
              <p class="text-sm leading-6 text-text-muted">{{ item.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="capabilities" class="space-y-4">
        <SectionHeading
          eyebrow="قابلیت‌ها"
          title="توانمندی‌های ZED در نگهداری و تعمیرات"
          description="ZED با ترکیب برنامه‌ریزی، دستورکار، سوابق و داشبوردهای عملکرد، مسیر اجرای نگهداری را شفاف و قابل کنترل می‌کند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard v-for="item in capabilities" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="گردش عملیات"
          title="از درخواست تا اجرای تعمیرات"
          description="در یک جریان یکپارچه، درخواست، بررسی، زمان‌بندی، اجرا، تأیید و گزارش نهایی به یک مسیر یک‌دست وصل می‌شوند."
        />

        <Card>
          <div class="grid gap-3 md:grid-cols-5">
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">درخواست</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">بررسی</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">برنامه‌ریزی</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">اجرا</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">گزارش</div>
          </div>
        </Card>
      </section>

      <CTASection
        title="آماده بهبود فرایند نگهداری سازمانی هستید؟"
        description="با ZED، زمان‌بندی، اجرای تعمیرات و گزارش‌های عملکرد در یک ساختار قابل اعتماد و قابل کنترل قرار می‌گیرند."
        primary-cta="درخواست دمو"
        secondary-cta="بازگشت به پلتفرم"
        :primary-href="`/?page=maintenance&lang=${props.locale}`"
        :secondary-href="`/?page=platform&lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
