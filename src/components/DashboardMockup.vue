<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  workOrders?: string
  alerts?: string
  health?: string
  assets?: string
}>(), {
  title: 'داشبورد عملیات دارایی',
  subtitle: 'نمای لحظه‌ای وضعیت تجهیزات و عملیات نگهداری',
  workOrders: 'دستور کارها',
  alerts: 'هشدارها',
  health: 'دسترسی‌پذیری',
  assets: 'داراییها'
})
</script>


<template>
  <div class="rounded-xl border border-border bg-surface p-4 shadow-sm">

    <!-- Header -->
    <div class="mb-4 flex items-center justify-between">
      <div>
        <h3 class="text-sm font-semibold text-text">
          {{ title }}
        </h3>

        <p class="text-xs text-text-muted">
          {{ subtitle }}
        </p>
      </div>

      <div
        class="flex items-center gap-2 rounded-full bg-success/10 px-3 py-1"
      >
        <span class="h-2 w-2 rounded-full bg-success" />
        <span class="text-xs font-medium text-success">
          Live
        </span>
      </div>
    </div>


    <!-- Dashboard Illustration -->

    <svg
      viewBox="0 0 760 420"
      class="w-full rounded-xl bg-surface-muted"
    >

      <defs>

        <linearGradient id="cardBlue">
          <stop offset="0%" stop-color="#EFF6FF"/>
          <stop offset="100%" stop-color="#DBEAFE"/>
        </linearGradient>

        <linearGradient id="lineBlue">
          <stop offset="0%" stop-color="#0B84F3"/>
          <stop offset="100%" stop-color="#60A5FA"/>
        </linearGradient>

      </defs>


      <!-- Background -->

      <rect
        width="760"
        height="420"
        rx="18"
        fill="#F5F7FA"
      />


      <!-- KPI cards -->

      <g>

        <!-- Card 1 -->
        <rect
          x="25"
          y="25"
          width="165"
          height="90"
          rx="14"
          fill="url(#cardBlue)"
        />

        <rect
          x="210"
          y="25"
          width="165"
          height="90"
          rx="14"
          fill="#FFFFFF"
          stroke="#E2E8F0"
        />


        <rect
          x="395"
          y="25"
          width="165"
          height="90"
          rx="14"
          fill="#FFFFFF"
          stroke="#E2E8F0"
        />


        <rect
          x="580"
          y="25"
          width="155"
          height="90"
          rx="14"
          fill="#FFFFFF"
          stroke="#E2E8F0"
        />


        <!-- fake numbers -->

        <rect
          x="45"
          y="65"
          width="80"
          height="16"
          rx="8"
          fill="#17263C"
        />

        <rect
          x="230"
          y="65"
          width="70"
          height="16"
          rx="8"
          fill="#16A34A"
        />

        <rect
          x="415"
          y="65"
          width="65"
          height="16"
          rx="8"
          fill="#2563EB"
        />

        <rect
          x="600"
          y="65"
          width="50"
          height="16"
          rx="8"
          fill="#DC2626"
        />

      </g>



      <!-- Chart -->

      <rect
        x="25"
        y="145"
        width="430"
        height="245"
        rx="16"
        fill="#FFFFFF"
        stroke="#E2E8F0"
      />


      <!-- chart header -->

      <rect
        x="50"
        y="175"
        width="120"
        height="10"
        rx="5"
        fill="#CBD5E1"
      />


      <!-- chart line -->

      <path
        d="
          M60 320
          C120 280
          170 300
          220 255
          S330 220
          410 260
        "
        fill="none"
        stroke="url(#lineBlue)"
        stroke-width="5"
        stroke-linecap="round"
      />


      <circle
        cx="220"
        cy="255"
        r="6"
        fill="#0B84F3"
      />

      <circle
        cx="410"
        cy="260"
        r="6"
        fill="#0B84F3"
      />




      <!-- Activity panel -->

      <rect
        x="480"
        y="145"
        width="255"
        height="245"
        rx="16"
        fill="#FFFFFF"
        stroke="#E2E8F0"
      />


      <rect
        x="510"
        y="180"
        width="130"
        height="10"
        rx="5"
        fill="#CBD5E1"
      />


      <!-- rows -->

      <rect
        x="510"
        y="225"
        width="170"
        height="26"
        rx="8"
        fill="#DBEAFE"
      />


      <rect
        x="510"
        y="265"
        width="145"
        height="26"
        rx="8"
        fill="#DCFCE7"
      />


      <rect
        x="510"
        y="305"
        width="120"
        height="26"
        rx="8"
        fill="#FEF3C7"
      />


      <rect
        x="510"
        y="345"
        width="95"
        height="26"
        rx="8"
        fill="#FEE2E2"
      />

    </svg>


    <!-- Real UI labels -->

    <div class="mt-4 grid grid-cols-4 gap-3">

      <div>
        <p class="text-xs text-text-muted">
          {{ assets }}
        </p>
        <p class="font-semibold text-text">
          12,480
        </p>
      </div>


      <div>
        <p class="text-xs text-text-muted">
          {{ health }}
        </p>
        <p class="font-semibold text-success">
          96%
        </p>
      </div>


      <div>
        <p class="text-xs text-text-muted">
          {{ workOrders }}
        </p>
        <p class="font-semibold text-primary">
          42
        </p>
      </div>


      <div>
        <p class="text-xs text-text-muted">
         {{ alerts }}
        </p>
        <p class="font-semibold text-negative">
          3
        </p>
      </div>

    </div>

  </div>
</template>