<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: string | number
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'search'
  disabled?: boolean
}>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  type: 'text',
  disabled: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <label class="block space-y-2">
    <span v-if="label" class="block text-xs font-semibold uppercase tracking-wide text-text-muted">
      {{ label }}
    </span>
    <input
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      class="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text outline-none transition focus:ring-2 focus:ring-brand/30"
      @input="onInput"
    />
  </label>
</template>
