<script setup lang="ts">
import HomePage from './pages/HomePage.vue'
</script>

<template>
  <Transition name="page" mode="out-in" appear>
    <HomePage />
  </Transition>
</template>
