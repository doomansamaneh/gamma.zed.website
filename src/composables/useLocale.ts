import { computed, ref } from 'vue'

export type Locale = 'fa' | 'en'

const currentLocale = ref<Locale>('fa')

export function useLocale() {
  const locale = computed(() => currentLocale.value)

  const setLocale = (value: Locale) => {
    currentLocale.value = value
    if (typeof document !== 'undefined') {
      document.documentElement.lang = value === 'fa' ? 'fa-IR' : 'en-US'
      document.documentElement.dir = value === 'fa' ? 'rtl' : 'ltr'
    }
  }

  const isRtl = computed(() => currentLocale.value === 'fa')

  return {
    locale,
    isRtl,
    setLocale,
  }
}

export function getInitialLocale() {
  if (typeof window === 'undefined') {
    return 'fa' as Locale
  }

  const params = new URLSearchParams(window.location.search)
  const queryLocale = params.get('lang')
  if (queryLocale === 'en') {
    return 'en'
  }

  return 'fa'
}
