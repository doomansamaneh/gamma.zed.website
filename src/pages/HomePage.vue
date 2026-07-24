<script setup lang="ts">
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
</script>

<template>
  <div class="min-h-screen bg-bg text-text">
    <Navbar />

    <main class="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8 lg:space-y-10">
      <div class="fade-up stagger-1">
        <HeroSection
          title="ZED Core"
          subtitle="A unified enterprise operations platform for asset visibility, workflow automation, inventory control, and configurable digital execution."
          primary-cta="Request Demo"
          secondary-cta="Explore Platform"
        />
      </div>

      <div class="fade-up stagger-2">
        <StatsSection />
      </div>

      <section class="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Card class="h-full">
          <div class="space-y-4">
            <SectionHeading
              eyebrow="Detail"
              title="One platform for operational control"
              description="ZED Core brings asset information, approvals, business rules, inventory signals, and reporting into one governed operating layer."
            />

            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-lg border border-border bg-surface-muted p-4">
                <div class="text-sm font-semibold text-text">Asset intelligence</div>
                <div class="mt-1 text-sm text-text-muted">Track lifecycle, maintenance history, and reliability signals.</div>
              </div>
              <div class="rounded-lg border border-border bg-surface-muted p-4">
                <div class="text-sm font-semibold text-text">Workflow orchestration</div>
                <div class="mt-1 text-sm text-text-muted">Coordinate approvals, routing, and operational actions.</div>
              </div>
              <div class="rounded-lg border border-border bg-surface-muted p-4">
                <div class="text-sm font-semibold text-text">Digital forms</div>
                <div class="mt-1 text-sm text-text-muted">Collect structured information without heavy custom development.</div>
              </div>
              <div class="rounded-lg border border-border bg-surface-muted p-4">
                <div class="text-sm font-semibold text-text">Enterprise reporting</div>
                <div class="mt-1 text-sm text-text-muted">Surface the operational signals that matter to leadership.</div>
              </div>
            </div>
          </div>
        </Card>

        <Card class="h-full bg-gradient-to-br from-brand-soft to-surface">
          <div class="space-y-4">
            <SectionHeading
              eyebrow="Operational snapshot"
              title="What enterprise teams need"
              description="Reliable delivery, shared visibility, and configurable business logic across high-impact processes."
            />

            <div class="space-y-3">
              <div class="rounded-lg border border-border bg-surface p-4">
                <div class="text-sm font-semibold text-brand">Unified operations</div>
                <div class="mt-1 text-sm text-text-muted">One shared foundation for asset, workflow, and inventory decisions.</div>
              </div>
              <div class="rounded-lg border border-border bg-surface p-4">
                <div class="text-sm font-semibold text-text">Governance ready</div>
                <div class="mt-1 text-sm text-text-muted">Audit-friendly, configurable, and built for multi-team coordination.</div>
              </div>
              <div class="rounded-lg border border-border bg-surface p-4">
                <div class="text-sm font-semibold text-text">Designed for scale</div>
                <div class="mt-1 text-sm text-text-muted">Structure operations for growth without breaking the existing model.</div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section class="fade-up stagger-3 space-y-4">
        <SectionHeading
          eyebrow="Why ZED Core"
          title="Built for enterprise confidence"
          description="ZED Core combines operational visibility, configurable workflows, and trusted governance into one digital operating foundation."
        />

        <div class="grid gap-4 md:grid-cols-3">
          <FeatureCard title="Secure by design" description="Governed, auditable, and engineered for enterprise-grade trust." />
          <FeatureCard title="Scalable architecture" description="Designed to support growing operational complexity across teams and domains." />
          <FeatureCard title="Connected workflows" description="Bring assets, approvals, inventory, and forms into one shared operating system." />
        </div>
      </section>

      <section class="fade-up stagger-4 space-y-4">
        <SectionHeading
          eyebrow="Platform modules"
          title="Core capabilities"
          description="Each module is reusable, configurable, and aligned to the demands of modern enterprise operations."
        />

        <div class="grid gap-4 lg:grid-cols-2">
          <ModuleCard title="ZED EAM" badge="Enterprise" description="Manage the full asset lifecycle with maintenance planning, work orders, inspections, and complete operational history.">
            <div class="flex flex-wrap gap-2">
              <Badge tone="success">Asset Registry</Badge>
              <Badge tone="info">Maintenance</Badge>
              <Badge tone="warning">Work Orders</Badge>
            </div>
          </ModuleCard>

          <ModuleCard title="ZED Workflow" badge="Automation" description="Digitize approvals, business rules, and process orchestration with measurable service-level control.">
            <div class="flex flex-wrap gap-2">
              <Badge tone="info">Approvals</Badge>
              <Badge tone="success">Rules Engine</Badge>
              <Badge tone="warning">Notifications</Badge>
            </div>
          </ModuleCard>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <ModuleCard title="ZED Inventory" badge="Operations" description="Track stock, movement, spare parts, and transaction history in one operational view.">
            <div class="flex flex-wrap gap-2">
              <Badge tone="success">Stock Management</Badge>
              <Badge tone="info">Transactions</Badge>
            </div>
          </ModuleCard>

          <ModuleCard title="ZED Forms" badge="Digital" description="Capture structured inputs using dynamic forms, templates, and configurable operational data collection.">
            <div class="flex flex-wrap gap-2">
              <Badge tone="warning">Form Builder</Badge>
              <Badge tone="info">Templates</Badge>
            </div>
          </ModuleCard>
        </div>
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="Dashboard preview"
          title="Operational visibility for decision-makers"
          description="Real-time operating surfaces help teams monitor asset health, workflow velocity, and inventory confidence in one place."
        />

        <DashboardMockup title="Maintenance Operations" subtitle="Work order and asset resilience" variant="operations" />
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="Architecture"
          title="One platform. Shared enterprise services."
          description="ZED Core delivers a connected operating layer across assets, processes, data, and shared governance services."
        />

        <ArchitectureDiagram title="One Core Platform" />
      </section>

      <section class="space-y-4">
        <SectionHeading
          eyebrow="Industries"
          title="Built for enterprise operations"
          description="The platform supports organizations that need control, visibility, and continuity across mission-critical workflows."
        />

        <div class="grid gap-4 md:grid-cols-3">
          <IndustryCard title="Manufacturing" description="Improve uptime, reliability, and maintenance coordination across production lines." />
          <IndustryCard title="Energy" description="Support field operations, asset readiness, and compliance-driven reliability workflows." />
          <IndustryCard title="Banking" description="Coordinate facility operations, approvals, and service processes with stronger discipline." />
        </div>
      </section>

      <section class="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <div class="space-y-4">
            <SectionHeading
              eyebrow="Trust"
              title="Enterprise-ready foundations"
              description="Secure architecture, configuration flexibility, integration readiness, and a disciplined operating model support long-term adoption."
            />
            <div class="flex flex-wrap gap-2">
              <Badge tone="success">Secure Architecture</Badge>
              <Badge tone="info">Scalable Platform</Badge>
              <Badge tone="warning">Flexible Configuration</Badge>
              <Badge tone="success">Integration Ready</Badge>
            </div>
          </div>
        </Card>

        <Card>
          <div class="space-y-4">
            <SectionHeading
              eyebrow="Actions"
              title="Start the conversation"
              description="Book a guided demo and discuss how ZED Core can fit your enterprise operating model."
            />
            <Button variant="primary">Request Demo</Button>
          </div>
        </Card>
      </section>

      <CTASection />
    </main>

    <Footer />
  </div>
</template>
