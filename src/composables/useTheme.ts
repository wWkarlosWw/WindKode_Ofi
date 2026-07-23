import { useThemeStore } from '@/stores/theme.store'

export function useTheme() {
  const store = useThemeStore()
  return { isDark: store.isDark, toggle: store.toggle }
}
