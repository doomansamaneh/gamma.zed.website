<script setup lang="ts">
withDefaults(defineProps<{
  items?: Array<{ label: string; shortLabel?: string; href: string; active?: boolean }>
}>(), {
  items: () => [
    { label: 'Products', shortLabel: 'P', href: '/products', active: true },
    { label: 'Product Details', shortLabel: 'PD', href: '/product-details' },
    { label: 'Shopping Cart', shortLabel: 'SC', href: '/shopping-cart' },
    { label: 'Checkout', shortLabel: 'CH', href: '/checkout' },
  ],
})
</script>

<template>
  <aside class="h-full min-w-[220px] border-r border-border bg-surface p-3">
    <nav class="flex flex-col gap-2">
      <a
        v-for="item in items"
        :key="item.label"
        :href="item.href"
        class="flex items-center justify-between rounded-md px-3 py-2 text-sm transition"
        :class="item.active ? 'bg-brand-soft text-brand' : 'text-text-muted hover:bg-surface-muted hover:text-text'"
      >
        <span class="hidden md:inline">{{ item.label }}</span>
        <span class="md:hidden">{{ item.shortLabel || item.label.slice(0, 2) }}</span>
      </a>
    </nav>
  </aside>
</template>
