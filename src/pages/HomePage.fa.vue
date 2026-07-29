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
import faContent from '../locales/fa.json'

const content = computed(() => faContent.home)
</script>

<template>
  <div class="min-h-screen bg-bg text-text" dir="rtl">
    <Navbar />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <div class="fade-up stagger-1">
        <HeroSection
          :title="content.hero.title"
          :subtitle="content.hero.subtitle"
          :primary-cta="content.hero.primaryCta"
          :secondary-cta="content.hero.secondaryCta"
        />
      </div>

      <div class="fade-up stagger-2">
        <StatsSection :items="content.stats" />
      </div>

      <section class="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Card class="h-full">
          <div class="space-y-4">
            <SectionHeading
              :eyebrow="content.valueProps.eyebrow"
              :title="content.valueProps.title"
              :description="content.valueProps.description"
            />

            <div class="grid gap-3 sm:grid-cols-2">
              <div v-for="item in content.valueProps.items" :key="item.title" class="rounded-lg border border-border bg-surface-muted p-4">
                <div class="text-sm font-semibold text-text">{{ item.title }}</div>
                <div class="mt-1 text-sm text-text-muted">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </Card>

        <Card class="h-full bg-gradient-to-br from-brand-soft to-surface">
          <div class="space-y-4">
            <SectionHeading
              :eyebrow="content.operational.eyebrow"
              :title="content.operational.title"
              :description="content.operational.description"
            />

            <div class="space-y-3">
              <div v-for="item in content.operational.items" :key="item.title" class="rounded-lg border border-border bg-surface p-4">
                <div class="text-sm font-semibold text-brand">{{ item.title }}</div>
                <div class="mt-1 text-sm text-text-muted">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section class="fade-up stagger-3 space-y-4">
        <SectionHeading
          :eyebrow="content.whyZed.eyebrow"
          :title="content.whyZed.title"
          :description="content.whyZed.description"
        />

        <div class="grid gap-4 md:grid-cols-3">
          <FeatureCard v-for="item in content.whyZed.items" :key="item.title" :title="item.title" :description="item.description" />
        </div>
      </section>

      <section class="fade-up stagger-4 space-y-4">
        <SectionHeading
          :eyebrow="content.modules.eyebrow"
          :title="content.modules.title"
          :description="content.modules.description"
        />

        <div class="grid gap-4 lg:grid-cols-2">
          <ModuleCard v-for="(item, index) in content.modules.items.slice(0, 2)" :key="item.title" :title="item.title" :badge="item.badge" :description="item.description">
            <div class="flex flex-wrap gap-2">
              <Badge v-for="tag in item.tags" :key="tag" tone="info">{{ tag }}</Badge>
            </div>
          </ModuleCard>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <ModuleCard v-for="(item, index) in content.modules.items.slice(2, 4)" :key="item.title" :title="item.title" :badge="item.badge" :description="item.description">
            <div class="flex flex-wrap gap-2">
              <Badge v-for="tag in item.tags" :key="tag" tone="info">{{ tag }}</Badge>
            </div>
          </ModuleCard>
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
          :eyebrow="content.architecture.eyebrow"
          :title="content.architecture.title"
          :description="content.architecture.description"
        />

        <ArchitectureDiagram :title="content.architecture.diagramTitle" />
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
        <Card>
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

        <Card>
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

      <CTASection
        :title="content.cta.title"
        :description="content.cta.description"
        :primary-cta="content.cta.primary"
        :secondary-cta="content.cta.secondary"
      />
    </main>

    <Footer />
  </div>
</template>
