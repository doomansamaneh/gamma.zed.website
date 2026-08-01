<script setup lang="ts">
import { computed, onMounted } from 'vue'
import HomePage from './pages/HomePage.vue'
import AssetManagementPage from './pages/AssetManagementPage.vue'
import ModulesPage from './pages/ModulesPage.vue'
import PlatformPage from './pages/PlatformPage.vue'
import MaintenancePage from './pages/MaintenancePage.vue'
import InventoryPage from './pages/InventoryPage.vue'
import WorkflowPage from './pages/WorkflowPage.vue'
import FormsPage from './pages/FormsPage.vue'
import ReportingPage from './pages/ReportingPage.vue'
import InboxPage from './pages/InboxPage.vue'
import IndustryPage from './pages/IndustryPage.vue'
import AboutPage from './pages/AboutPage.vue'
import { getInitialLocale, useLocale } from './composables/useLocale'

const { locale, setLocale } = useLocale()

const page = computed(() => {
  if (typeof window === 'undefined') {
    return 'home'
  }

  const params = new URLSearchParams(window.location.search)
  if (params.get('page') === 'asset-management') {
    return 'asset-management'
  }
  if (params.get('page') === 'modules') {
    return 'modules'
  }
  if (params.get('page') === 'platform') {
    return 'platform'
  }
  if (params.get('page') === 'maintenance') {
    return 'maintenance'
  }
  if (params.get('page') === 'inventory') {
    return 'inventory'
  }
  if (params.get('page') === 'workflow') {
    return 'workflow'
  }
  if (params.get('page') === 'forms') {
    return 'forms'
  }
  if (params.get('page') === 'reporting') {
    return 'reporting'
  }
  if (params.get('page') === 'inbox') {
    return 'inbox'
  }
  if (params.get('page') === 'industry') {
    return 'industry'
  }
  if (params.get('page') === 'about') {
    return 'about'
  }

  return 'home'
})

onMounted(() => {
  setLocale(getInitialLocale())
})
</script>

<template>
  <Transition name="page" mode="out-in" appear>
    <HomePage v-if="page === 'home'" :locale="locale" />
    <AssetManagementPage v-else-if="page === 'asset-management'" :locale="locale" />
    <PlatformPage v-else-if="page === 'platform'" :locale="locale" />
    <MaintenancePage v-else-if="page === 'maintenance'" :locale="locale" />
    <InventoryPage v-else-if="page === 'inventory'" :locale="locale" />
    <WorkflowPage v-else-if="page === 'workflow'" :locale="locale" />
    <FormsPage v-else-if="page === 'forms'" :locale="locale" />
    <ReportingPage v-else-if="page === 'reporting'" :locale="locale" />
    <InboxPage v-else-if="page === 'inbox'" :locale="locale" />
    <IndustryPage v-else-if="page === 'industry'" :locale="locale" />
    <AboutPage v-else-if="page === 'about'" :locale="locale" />
    <ModulesPage v-else :locale="locale" />
  </Transition>
</template>
