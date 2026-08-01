<script setup lang="ts">
import { computed } from 'vue'
import {
  Navbar,
  HeroSection,
  SectionHeading,
  Card,
  Footer,
  CTASection,
  FeatureCard,
  ArchitectureDiagram,
  Badge,
} from '../components'

const props = withDefaults(defineProps<{ locale?: 'fa' | 'en' }>(), {
  locale: 'fa',
})

const isRtl = computed(() => props.locale === 'fa')

const capabilities = [
  {
    title: 'مدیریت دارایی‌های سازمانی',
    description: 'ثبت، طبقه‌بندی، مالکیت، وضعیت و تاریخچه کامل چرخه عمر تجهیزات در یک پرونده دیجیتال واحد.',
  },
  {
    title: 'گردش کار و تأییدات',
    description: 'اجرای استاندارد فرآیندها، مسیرهای تصمیم‌گیری و اعلان‌های خودکار برای عملیات سازمانی.',
  },
  {
    title: 'فرم‌های پویا و ساختاریافته',
    description: 'جمع‌آوری داده‌ها در قالب فرم‌های سازمانی با منطق شرطی، قالب‌های قابل استفاده مجدد و خروجی‌های استاندارد.',
  },
  {
    title: 'مدیریت موجودی',
    description: 'نمایش لحظه‌ای موجودی، مصرف، سفارش و ارتباط مستقیم آن با عملیات نگهداری و دارایی.',
  },
  {
    title: 'گزارش‌دهی و داشبورد',
    description: 'حسگرهای عملکرد، شاخص‌های مدیریتی و گزارش‌های عملیاتی برای تصمیم‌گیری سریع و اثربخش.',
  },
  {
    title: 'یکپارچگی با سامانه‌های سازمانی',
    description: 'پشتیبانی از تعامل با سرویس‌ها، منابع داده و جریان‌های اطلاعاتی سازمان بر اساس استانداردهای قابل گسترش.',
  },
]

const layerCards = [
  {
    title: 'Asset Layer',
    description: 'پرونده دیجیتال دارایی، موقعیت، مسیر عمر و داده‌های وابسته.',
  },
  {
    title: 'Workflow Layer',
    description: 'فرآیندهای استاندارد، Rules، SLA و اعلان‌های مجزا.',
  },
  {
    title: 'Data Layer',
    description: 'داده‌های عملیاتی، گزارش‌ها و شاخص‌های مدیریتی در یک مدل مشترک.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="isRtl ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="platform" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <HeroSection
        title="پلتفرم ZED Core"
        subtitle="یک لایه عملیاتی یکپارچه برای مدیریت دارایی، گردش کار، فرم‌ها، موجودی و دیده‌بانی سازمانی"
        eyebrow="Platform"
        primary-cta="درخواست جلسه معرفی"
        secondary-cta="مشاهده ماژول‌ها"
        :primary-href="`/?page=platform&lang=${props.locale}`"
        :secondary-href="`/?page=modules&lang=${props.locale}`"
        :locale="props.locale"
      />

      <section class="space-y-4">
        <SectionHeading
          eyebrow="معماری"
          title="یک هستهٔ باز برای عملیات سازمانی"
          description="پلتفرم ZED یک ساختار مشترک برای داده، فرآیندها، قوانین کسب‌وکار و خدمات سازمانی ارائه می‌دهد تا عملیات در سطح سازمان هماهنگ باقی بماند."
        />

        <ArchitectureDiagram title="Platform Architecture" />
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="قابلیت‌ها"
          title="قابلیت‌های اصلی پلتفرم"
          description="هر ماژول در ZED با هدف افزایش شفافیت عملیاتی، کاهش دوباره‌کاری و ایجاد تصمیم‌گیری مبتنی بر داده طراحی شده است."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard v-for="item in capabilities" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="لایه‌ها"
          title="چهارچوب مشترک برای اجرای سازمانی"
          description="پلتفرم ZED در سه لایهٔ اصلی عمل می‌کند: لایه دارایی، لایه گردش کار و لایه داده، به‌گونه‌ای که هر شیوهٔ عملیاتی در مسیر یک حقیقت مشترک هماهنگ بماند."
        />

        <div class="grid gap-4 lg:grid-cols-3">
          <Card v-for="item in layerCards" :key="item.title" class="h-full">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <span class="text-base font-semibold text-text">{{ item.title }}</span>
                <Badge tone="info">Core</Badge>
              </div>
              <p class="text-sm leading-6 text-text-muted">{{ item.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="مزایا"
          title="ارزش پلتفرم ZED برای سازمان"
          description="این پلتفرم به سازمان‌ها کمک می‌کند از یک مدل استاندارد برای کنترل دارایی‌ها، گردش کار و تصمیم‌گیری با کیفیت بالا استفاده کنند."
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card class="h-full">
            <div class="space-y-3">
              <div class="text-base font-semibold text-text">قابلیت پیکربندی</div>
              <p class="text-sm leading-6 text-text-muted">تطبیق سریع فرآیندها با مدل‌های کسب‌وکار بدون تغییر سنگین نرم‌افزاری.</p>
            </div>
          </Card>
          <Card class="h-full">
            <div class="space-y-3">
              <div class="text-base font-semibold text-text">همگام‌سازی داده</div>
              <p class="text-sm leading-6 text-text-muted">یکپارچه‌سازی اطلاعات عملیاتی در سطح سازمان برای تصمیم‌گیری مشترک.</p>
            </div>
          </Card>
          <Card class="h-full">
            <div class="space-y-3">
              <div class="text-base font-semibold text-text">حاکمیت و شفافیت</div>
              <p class="text-sm leading-6 text-text-muted">کنترل بهتر روی عملیات، قوانین و ثبت رویدادها در مسیر حسابرسی و مدیریت.</p>
            </div>
          </Card>
          <Card class="h-full">
            <div class="space-y-3">
              <div class="text-base font-semibold text-text">مقیاس‌پذیری</div>
              <p class="text-sm leading-6 text-text-muted">پشتیبانی از رشد سازمانی، تنوع ماژول‌ها و افزایش پیچیدگی به‌صورت کنترل‌شده.</p>
            </div>
          </Card>
        </div>
      </section>

      <CTASection
        title="پلتفرم ZED برای آیندهٔ عملیات شما آماده است؟"
        description="با دیدی یکپارچه به دارایی‌ها، فرآیندها و گزارش‌ها، می‌توانید مدل عملیات سازمانی‌تان را قابل اعتمادتر و سریع‌تر اجرا کنید."
        primary-cta="درخواست دمو"
        secondary-cta="مشاهده مسیرهای استفاده"
        :primary-href="`/?page=modules&lang=${props.locale}`"
        :secondary-href="`/?page=asset-management&lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
