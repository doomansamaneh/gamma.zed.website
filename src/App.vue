<script setup lang="ts">
import { onMounted } from 'vue'
import HomePage from './pages/HomePage.vue'
import { getInitialLocale, useLocale } from './composables/useLocale'

const { locale, setLocale } = useLocale()

onMounted(() => {
  setLocale(getInitialLocale())
})
</script>

<template>
  <Transition name="page" mode="out-in" appear>
    <HomePage :locale="locale" />
  </Transition>
</template>
