<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  href?: string
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  href: '',
})

const variantClasses = {
  primary: 'bg-brand text-white hover:bg-brand-hover',
  secondary: 'bg-surface border border-border text-text hover:bg-surface-muted',
  ghost: 'bg-transparent text-text hover:bg-brand-soft',
  danger: 'bg-danger text-white hover:opacity-90',
}

const sizeClasses = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
}
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand/40"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </a>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand/40 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </button>
</template>
