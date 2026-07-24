<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  variant?: 'overview' | 'operations'
}>(), {
  title: 'Operational Dashboard',
  subtitle: 'Live enterprise visibility',
  variant: 'overview',
})
</script>

<template>
  <div class="rounded-xl border border-border bg-surface p-3 shadow-sm">
    <div class="mb-3 flex items-center justify-between">
      <div>
        <h3 class="text-sm font-semibold text-text">{{ title }}</h3>
        <p class="text-xs text-text-muted">{{ subtitle }}</p>
      </div>
      <span class="rounded-full bg-success/15 px-2 py-1 text-[10px] font-semibold text-success">Live</span>
    </div>

    <svg viewBox="0 0 760 420" class="h-auto w-full rounded-lg bg-surface-muted" role="img" aria-label="Enterprise dashboard mockup illustration">
      <defs>
        <linearGradient id="panelGrad" x1="0" x2="1">
          <stop offset="0%" stop-color="#dbeafe" />
          <stop offset="100%" stop-color="#eff6ff" />
        </linearGradient>
        <linearGradient id="chartGrad" x1="0" x2="1">
          <stop offset="0%" stop-color="#2563eb" />
          <stop offset="100%" stop-color="#60a5fa" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="760" height="420" fill="#f8fafc" rx="16" />

      <rect x="20" y="20" width="140" height="380" rx="14" fill="#0f172a" />
      <text x="40" y="60" fill="#e5eefb" font-size="14" font-family="Segoe UI, Arial, sans-serif" font-weight="700">ZED Core</text>
      <rect x="40" y="94" width="100" height="26" rx="8" fill="#1f6feb" />
      <text x="62" y="112" fill="#ffffff" font-size="12" font-family="Segoe UI, Arial, sans-serif">Dashboard</text>
      <text x="40" y="155" fill="#94a3b8" font-size="11" font-family="Segoe UI, Arial, sans-serif">Operations</text>
      <text x="40" y="184" fill="#94a3b8" font-size="11" font-family="Segoe UI, Arial, sans-serif">Assets</text>
      <text x="40" y="213" fill="#94a3b8" font-size="11" font-family="Segoe UI, Arial, sans-serif">Workflow</text>
      <text x="40" y="242" fill="#94a3b8" font-size="11" font-family="Segoe UI, Arial, sans-serif">Inventory</text>

      <rect x="182" y="28" width="552" height="60" rx="14" fill="#ffffff" stroke="#dbe3ee" />
      <text x="208" y="56" fill="#0f172a" font-size="18" font-family="Segoe UI, Arial, sans-serif" font-weight="700">Enterprise operations overview</text>
      <text x="208" y="74" fill="#64748b" font-size="11" font-family="Segoe UI, Arial, sans-serif">Asset health • Work order throughput • Inventory confidence</text>

      <rect x="182" y="104" width="170" height="78" rx="14" fill="url(#panelGrad)" />
      <text x="198" y="132" fill="#334155" font-size="12" font-family="Segoe UI, Arial, sans-serif">Assets online</text>
      <text x="198" y="160" fill="#0f172a" font-size="24" font-family="Segoe UI, Arial, sans-serif" font-weight="700">12,480</text>

      <rect x="365" y="104" width="170" height="78" rx="14" fill="#ffffff" stroke="#dbe3ee" />
      <text x="381" y="132" fill="#334155" font-size="12" font-family="Segoe UI, Arial, sans-serif">Maintenance SLA</text>
      <text x="381" y="160" fill="#0f172a" font-size="24" font-family="Segoe UI, Arial, sans-serif" font-weight="700">94.2%</text>

      <rect x="548" y="104" width="186" height="78" rx="14" fill="#ffffff" stroke="#dbe3ee" />
      <text x="564" y="132" fill="#334155" font-size="12" font-family="Segoe UI, Arial, sans-serif">Workflow backlog</text>
      <text x="564" y="160" fill="#0f172a" font-size="24" font-family="Segoe UI, Arial, sans-serif" font-weight="700">18 open</text>

      <rect x="182" y="196" width="360" height="198" rx="14" fill="#ffffff" stroke="#dbe3ee" />
      <text x="198" y="222" fill="#0f172a" font-size="14" font-family="Segoe UI, Arial, sans-serif" font-weight="700">Operational activity</text>

      <path d="M208 346 C238 320, 260 285, 286 280 S340 282, 370 250 S432 230, 468 252 S520 284, 532 260" fill="none" stroke="url(#chartGrad)" stroke-width="5" stroke-linecap="round" />
      <path d="M208 346 C238 320, 260 285, 286 280 S340 282, 370 250 S432 230, 468 252 S520 284, 532 260" fill="none" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-dasharray="4 6" opacity="0.7" />

      <circle cx="286" cy="280" r="5" fill="#1f6feb" />
      <circle cx="370" cy="250" r="5" fill="#1f6feb" />
      <circle cx="468" cy="252" r="5" fill="#1f6feb" />
      <circle cx="532" cy="260" r="5" fill="#1f6feb" />

      <rect x="562" y="196" width="172" height="198" rx="14" fill="#ffffff" stroke="#dbe3ee" />
      <text x="578" y="222" fill="#0f172a" font-size="14" font-family="Segoe UI, Arial, sans-serif" font-weight="700">Priority queue</text>

      <rect x="578" y="238" width="132" height="18" rx="9" fill="#dbeafe" />
      <rect x="578" y="266" width="120" height="18" rx="9" fill="#e2e8f0" />
      <rect x="578" y="294" width="88" height="18" rx="9" fill="#d1fae5" />
      <rect x="578" y="322" width="108" height="18" rx="9" fill="#fef3c7" />

      <text x="592" y="251" fill="#1f6feb" font-size="10" font-family="Segoe UI, Arial, sans-serif">Work orders: 42</text>
      <text x="592" y="279" fill="#475569" font-size="10" font-family="Segoe UI, Arial, sans-serif">Inventory alerts: 8</text>
      <text x="592" y="307" fill="#047857" font-size="10" font-family="Segoe UI, Arial, sans-serif">Approved: 16</text>
      <text x="592" y="335" fill="#b45309" font-size="10" font-family="Segoe UI, Arial, sans-serif">Escalations: 3</text>
    </svg>
  </div>
</template>
