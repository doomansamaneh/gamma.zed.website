<script setup lang="ts">
withDefaults(defineProps<{
  headers?: string[]
  rows?: Array<string[]>
}>(), {
  headers: () => ['Name', 'Status', 'Owner'],
  rows: () => [
    ['ZED EAM', 'Active', 'Ops Team'],
    ['Workflow', 'Review', 'Platform Team'],
    ['Inventory', 'Healthy', 'Supply Chain'],
  ],
})
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-border bg-surface shadow-sm">
    <table class="min-w-full text-sm">
      <thead class="bg-surface-muted text-text-muted">
        <tr>
          <th v-for="header in headers" :key="header" class="px-4 py-3 text-left font-semibold">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index" class="border-t border-border hover:bg-surface-muted/70">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="px-4 py-3 text-text">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
