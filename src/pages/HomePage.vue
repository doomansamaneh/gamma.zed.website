<script setup lang="ts">
import { computed } from 'vue'
import {
  Navbar,
  HeroSection,
  StatsSection,
  SectionHeading,
  FeatureCard,
  ModuleCard,
  ArchitectureDiagram,
  IndustryCard,
  CTASection,
  Footer,
  Card,
  Button,
  Badge,
  DashboardMockup,
} from '../components'
import enContent from '../locales/en.json'
import faContent from '../locales/fa.json'

const props = withDefaults(defineProps<{ locale?: 'fa' | 'en' }>(), {
  locale: 'fa',
})

const content = computed(() => props.locale === 'fa' ? faContent.home : enContent.home)

const problemItems = [
  {
    title: 'پراکندگی اطلاعات',
    description: 'اطلاعات تجهیزات در فایل‌ها، سامانه‌های مجزا و واحدهای جداگانه نگهداری می‌شود.',
  },
  {
    title: 'خرابی‌های غیرمنتظره',
    description: 'عدم دسترسی به سوابق و تحلیل مناسب باعث توقف‌های ناگهانی تجهیزات می‌شود.',
  },
  {
    title: 'نبود دید مدیریتی',
    description: 'مدیران نمی‌توانند وضعیت واقعی دارایی‌ها و عملکرد تیم‌ها را لحظه‌ای ببینند.',
  },
  {
    title: 'هزینه‌های بالای نگهداری',
    description: 'تعمیرات واکنشی و تصمیم‌های دیرهنگام هزینه سازمان را افزایش می‌دهد.',
  },
  {
    title: 'فرآیندهای غیر استاندارد',
    description: 'درخواست‌ها، تعمیرات و تأییدها بدون گردش کار مشخص انجام می‌شوند.',
  },
]

const impactItems = [
  'افزایش توقف تجهیزات',
  'افزایش هزینه تعمیرات',
  'کاهش عمر مفید تجهیزات',
  'مصرف غیر بهینه قطعات',
  'تصمیم‌گیری بر اساس حدس',
]

const moduleHref = (item: { title: string }) => {
  const title = item.title.toLowerCase()

  if (title.includes('zed eam') || title.includes('مدیریت دارایی') || title.includes('مدیریت دارایی‌ها') || title.includes('asset')) {
    return `/?page=asset-management&lang=${props.locale}`
  }

  if (title.includes('maintenance') || title.includes('نگهداری') || title.includes('تعمیرات')) {
    return `/?page=maintenance&lang=${props.locale}`
  }

  if (title.includes('inventory') || title.includes('انبار') || title.includes('قطعات')) {
    return `/?page=inventory&lang=${props.locale}`
  }

  if (title.includes('workflow') || title.includes('گردش کار') || title.includes('workflow')) {
    return `/?page=workflow&lang=${props.locale}`
  }

  if (title.includes('forms') || title.includes('فرم') || title.includes('form')) {
    return `/?page=forms&lang=${props.locale}`
  }

  if (title.includes('report') || title.includes('گزارش') || title.includes('analytics')) {
    return `/?page=reporting&lang=${props.locale}`
  }

  if (title.includes('inbox') || title.includes('صندوق')) {
    return `/?page=inbox&lang=${props.locale}`
  }

  return ''
}
</script>

<template>
  <div class="min-h-screen bg-bg text-text" :dir="props.locale === 'fa' ? 'rtl' : 'ltr'">
    <Navbar :locale="props.locale" active-page="home" />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <div class="fade-up stagger-1">
        <HeroSection
          :title="content.hero.title"
          :subtitle="content.hero.subtitle"
          :eyebrow="content.hero.eyebrow"
          :primary-cta="content.hero.primaryCta"
          :secondary-cta="content.hero.secondaryCta"
          :primary-href="`/?page=asset-management&lang=${props.locale}`"
          :secondary-href="`/?page=modules&lang=${props.locale}`"
          :highlights="content.hero.highlights"
          :locale="props.locale"
        />
      </div>

      <div class="fade-up stagger-2">
        <StatsSection :items="content.stats" />
      </div>

      <section class="space-y-4">
        <SectionHeading
          :eyebrow="content.valueProps.eyebrow"
          :title="content.valueProps.title"
          :description="content.valueProps.description"
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <Card v-for="item in problemItems" :key="item.title" class="h-full">
            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <span class="text-xs font-semibold text-brand">{{ item.title }}</span>
                <span class="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-semibold text-brand">Risk</span>
              </div>
              <p class="text-sm leading-6 text-text-muted">{{ item.description }}</p>
            </div>
          </Card>
        </div>
      </section>

      <section class="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <Card class="h-full">
          <div class="space-y-4">
            <SectionHeading
              :eyebrow="content.operational.eyebrow"
              :title="content.operational.title"
              :description="content.operational.description"
            />

            <div class="space-y-3">
              <div v-for="item in content.operational.items" :key="item.title" class="rounded-lg border border-border bg-surface-muted p-4">
                <div class="text-sm font-semibold text-text">{{ item.title }}</div>
                <div class="mt-1 text-sm text-text-muted">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </Card>

        <Card class="h-full bg-gradient-to-br from-brand-soft to-surface">
          <div class="space-y-4">
            <SectionHeading
              :eyebrow="content.architecture.eyebrow"
              :title="content.architecture.title"
              :description="content.architecture.description"
            />

            <div class="grid gap-3 md:grid-cols-3">
              <div class="rounded-xl border border-border bg-surface p-4 text-center text-sm font-semibold text-text">دارایی‌ها</div>
              <div class="rounded-xl border border-border bg-surface p-4 text-center text-sm font-semibold text-text">نگهداری</div>
              <div class="rounded-xl border border-border bg-surface p-4 text-center text-sm font-semibold text-text">انبار</div>
            </div>

            <div class="rounded-xl border border-dashed border-border bg-surface/80 p-4 text-center text-sm text-brand">
              Workflow → ZED Platform → Assets
            </div>
          </div>
        </Card>
      </section>

      <section class="space-y-4">
        <SectionHeading
          :eyebrow="content.whyZed.eyebrow"
          :title="content.whyZed.title"
          :description="content.whyZed.description"
        />

        <div class="grid gap-4 md:grid-cols-3">
          <FeatureCard v-for="item in content.whyZed.items" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          :eyebrow="content.dashboard.eyebrow"
          :title="content.dashboard.title"
          :description="content.dashboard.description"
        />

        <DashboardMockup :title="content.dashboard.cardTitle" :subtitle="content.dashboard.cardSubtitle" variant="operations" />
      </section>

      <section class="space-y-4">
        <SectionHeading
          :eyebrow="content.modules.eyebrow"
          :title="content.modules.title"
          :description="content.modules.description"
        />

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <ModuleCard
            v-for="item in content.modules.items"
            :key="item.title"
            :title="item.title"
            :badge="item.badge"
            :description="item.description"
            :href="moduleHref(item)"
          >
            <div class="flex flex-wrap gap-2">
              <Badge v-for="tag in item.tags" :key="tag" tone="info">{{ tag }}</Badge>
            </div>
          </ModuleCard>
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          :eyebrow="content.industries.eyebrow"
          :title="content.industries.title"
          :description="content.industries.description"
        />

        <div class="grid gap-4 md:grid-cols-3">
          <IndustryCard v-for="item in content.industries.items" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Card class="h-full">
          <div class="space-y-4">
            <SectionHeading
              :eyebrow="content.trust.eyebrow"
              :title="content.trust.title"
              :description="content.trust.description"
            />
            <div class="flex flex-wrap gap-2">
              <Badge v-for="badge in content.trust.badges" :key="badge" tone="success">{{ badge }}</Badge>
            </div>
          </div>
        </Card>

        <Card class="h-full">
          <div class="space-y-4">
            <SectionHeading
              :eyebrow="content.actions.eyebrow"
              :title="content.actions.title"
              :description="content.actions.description"
            />
            <Button variant="primary">{{ content.actions.button }}</Button>
          </div>
        </Card>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="پیامدها"
          title="پیامدهای مدیریت سنتی دارایی"
          description="مدیریت سنتی دارایی رویه‌های بدنه را درگیر می‌کند و نتیجه آن کاهش قابلیت اطمینان، هزینه بیشتر و تصمیم‌گیری آهسته است."
        />

        <Card>
          <div class="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            <div v-for="item in impactItems" :key="item" class="rounded-xl border border-border bg-surface-muted p-4 text-center text-sm font-semibold text-text">
              {{ item }}
            </div>
          </div>
        </Card>
      </section>

      <CTASection
        :title="content.cta.title"
        :description="content.cta.description"
        :primary-cta="content.cta.primary"
        :secondary-cta="content.cta.secondary"
        :primary-href="`/?page=asset-management&lang=${props.locale}`"
        :secondary-href="`/?page=modules&lang=${props.locale}`"
      />
    </main>

    <Footer :locale="props.locale" />
  </div>
</template>
