import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(true)

  watch(isDark, (val) => {
    document.documentElement.classList.toggle('dark', val)
  })

  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
})
