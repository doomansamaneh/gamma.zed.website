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
    title: 'پراکنده‌بودن موجودی',
    description: 'موجودی قطعات و کالاها در چندین مکان و فرم جداگانه ثبت می‌شود و کنترل آن سخت می‌شود.',
  },
  {
    title: 'عدم دید لحظه‌ای',
    description: 'زمانی که موجودی به‌صورت دستی مدیریت می‌شود، وضعیت انبار برای تصمیم‌گیری و برنامه‌ریزی دقیق باقی نمی‌ماند.',
  },
  {
    title: 'هدر رفت هزینه',
    description: 'نوع و تعداد سفارش‌های اضافی، دوباره‌کاری در خرید یا مصرف نامناسب قطعات باعث افزایش هزینه‌ها می‌شود.',
  },
  {
    title: 'کمبود ردیابی مصرف',
    description: 'ارتباط مصرف قطعه با دستورکار، تعمیر و دارایی به‌طور کامل ثبت نمی‌شود.',
  },
]

const capabilities = [
  {
    title: 'ثبت و طبقه‌بندی کالا',
    description: 'مدیریت قطعات، موجودی، کد کالا، محل انبار و وضعیت هر قلم در یک مدل مشترک.',
  },
  {
    title: 'تراکنش‌های انبار',
    description: 'ثبت ورود، خروج، مصرف، برگشت و انتقال کالا برای ردیابی دقیق وضعیت انبار.',
  },
  {
    title: 'ارتباط با تعمیرات',
    description: 'اتصال مصرف قطعات به دستورکار، شکایت‌ها و عملکرد دارایی برای تحلیل دقیق‌تر.',
  },
  {
    title: 'هشدار سطح موجودی',
    description: 'اعلان خودکار برای سطح کم موجودی، نقطه سفارش مجدد و تأثیر آن روی عملیات.',
  },
  {
    title: 'گزارش‌های مدیریتی',
    description: 'ارائه گزارش مصرف، گردش کالا، هزینه‌ها و وضعیت انبار برای تصمیم‌گیری دقیق.',
  },
  {
    title: 'کنترل دسترسی و حاکمیت',
    description: 'نقش‌های تعریف‌شده برای ثبت، تأیید و بازبینی کالاها و تراکنش‌های انبار.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="inventory" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <HeroSection
        title="مدیریت انبار و قطعات یدکی"
        subtitle="کنترل موجودی، مصرف قطعه و جریان عملیات انبار در یک بستر شفاف و قابل ردیابی"
        eyebrow="Inventory Management"
        primary-cta="درخواست جلسه معرفی"
        secondary-cta="مشاهده قابلیت‌ها"
        :primary-href="`/?page=inventory&lang=${props.locale}`"
        :secondary-href="`#capabilities`"
        :locale="props.locale"
      />

      <section class="space-y-4">
        <SectionHeading
          eyebrow="چالش"
          title="چرا انبارهای سازمانی به سیستم واحد نیاز دارند؟"
          description="وقتی موجودی‌ها در چند کارتابل و فایل گسسته مدیریت شوند، دقت، زمان پاسخ و هزینه عملیاتی به‌طور مستقیم تحت تأثیر قرار می‌گیرد."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card v-for="item in challenges" :key="item.title" class="h-full">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <span class="text-sm font-semibold text-text">{{ item.title }}</span>
                <Badge tone="warning">Stock</Badge>
              </div>
              <p class="text-sm leading-6 text-text-muted">{{ item.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="capabilities" class="space-y-4">
        <SectionHeading
          eyebrow="قابلیت‌ها"
          title="قابلیت‌های ZED در مدیریت انبار"
          description="ZED با ردیابی دقیق موجودی، مدل‌های تراکنش و پیوند با عملیات نگهداری، یک سیستم قابل اتکا برای کنترل انبار و قطعات فراهم می‌کند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard v-for="item in capabilities" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="ارزش عملیات"
          title="از ثبت کالا تا مصرف سازمانی"
          description="هر تراکنش انبار در ZED به یک مسیر قابل پیگیری در عملیات، گزارش‌گیری و تصمیم‌گیری مدیریتی وصل می‌شود."
        />

        <Card>
          <div class="grid gap-3 md:grid-cols-4">
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">ورود</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">طبقه‌بندی</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">مصرف</div>
            <div class="rounded-2xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">گزارش</div>
          </div>
        </Card>
      </section>

      <CTASection
        title="برای کنترل بهتر انبار و قطعات خود به راهکار یکپارچه نیاز دارید؟"
        description="ZED به تیم‌های عملیاتی کمک می‌کند موجودی، مصرف و وضعیت انبار را در یک مسیر شفاف و قابل اعتماد مدیریت کنند."
        primary-cta="درخواست دمو"
        secondary-cta="بازگشت به ماژول‌ها"
        :primary-href="`/?page=inventory&lang=${props.locale}`"
        :secondary-href="`/?page=modules&lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
