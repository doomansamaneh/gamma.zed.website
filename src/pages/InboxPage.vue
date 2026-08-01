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
  { title: 'Inbox پراکنده', description: 'اعلان‌ها، درخواست‌ها و تأییدها در کانال‌های مختلف توزيع می‌شوند.' },
  { title: 'نادیده گرفتن کارها', description: 'کارهای مهم در پیام‌ها یا ایمیل‌ها بین تیم‌ها گم می‌شوند.' },
  { title: 'عدم اولویت‌بندی', description: 'کارهای حساس و فوری به‌صورت شفاف اولویت‌بندی نمی‌شوند.' },
  { title: 'پاسخ‌گویی نامنظم', description: 'تأخیر در پاسخ به کارهای عملیاتی، زمان اجرای عملیات را کاهش می‌دهد.' },
]

const capabilities = [
  { title: 'Inbox مرکزی', description: 'همه درخواست‌ها، تأییدها و اعلان‌ها در یک مسیر واحد و قابل دسترسی.' },
  { title: 'اولویت‌بندی', description: 'تفکیک کارهای فوری، پیگیری‌شده و نیمه‌کاره برای عملکرد بهتر.' },
  { title: 'تکمیل سریع', description: 'پاسخ سریع به کارهای جاری با دسترسی مستقیم به فرم‌ها و گردش کار.' },
  { title: 'نظارت و پیگیری', description: 'ردیابی وضعیت هر کار و اطلاع‌رسانی منظم بر اساس مسئولیت.' },
  { title: 'اعلان‌های هوشمند', description: 'ارسال یادآوری و اعلان در زمان مناسب و به‌صورت هدفمند.' },
  { title: 'گروه‌بندی تیمی', description: 'نمایش وظایف بر اساس نقش و گروه تیم برای هماهنگی بهتر.' },
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="modules" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <HeroSection
        title="Inbox سازمانی"
        subtitle="مرکز هماهنگی کارها، اعلان‌ها و تأییدهای در جریان عملیات"
        eyebrow="Enterprise Inbox"
        primary-cta="درخواست جلسه معرفی"
        secondary-cta="مشاهده قابلیت‌ها"
        :primary-href="`/?page=inbox&lang=${props.locale}`"
        :secondary-href="`#capabilities`"
        :locale="props.locale"
      />

      <section class="space-y-4">
        <SectionHeading
          eyebrow="چالش"
          title="چرا inbox یکنواخت در سازمان‌ها مهم است؟"
          description="به‌طور معمول کارهای مهم و فوری میان چند کانال مختلف چرخ می‌زنند و رگبار اعلان‌ها همیشه به موقع دیده نمی‌شوند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card v-for="item in challenges" :key="item.title" class="h-full">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <span class="text-sm font-semibold text-text">{{ item.title }}</span>
                <Badge tone="warning">Inbox</Badge>
              </div>
              <p class="text-sm leading-6 text-text-muted">{{ item.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="capabilities" class="space-y-4">
        <SectionHeading
          eyebrow="قابلیت‌ها"
          title="امکانات Inbox سازمانی ZED"
          description="Inbox ZED به‌عنوان دروازهٔ کارهای جاری، یک مسیر متمرکز برای اشتراک اعلان‌ها و انجام اقدامات فراهم می‌کند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard v-for="item in capabilities" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="مرکز اقدام"
          title="کارهای مهم در یک نگاه"
          description="در Inbox ZED، اعلان‌ها، تأییدها و کارهای در جریان به‌صورت دسته‌بندی‌شده در دسترس قرار می‌گیرند."
        />

        <Card>
          <div class="grid gap-3 md:grid-cols-4">
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">تأیید</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">اعلان</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">پیگیری</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">اقدام</div>
          </div>
        </Card>
      </section>

      <CTASection
        title="آیا مرکز کارهای سازمانی شما نیاز به یکپارچگی بیشتری دارد؟"
        description="ZED با inbox مرکزی، دسترسی به کارها و تصمیم‌های جاری را برای تیم‌ها واضح‌تر و سریع‌تر می‌کند."
        primary-cta="درخواست دمو"
        secondary-cta="بازگشت به ماژول‌ها"
        :primary-href="`/?page=inbox&lang=${props.locale}`"
        :secondary-href="`/?page=modules&lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
